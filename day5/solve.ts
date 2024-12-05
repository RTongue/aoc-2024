export function parseInput(input: string) {
  const rawRows = input.split('\n')
  const emptyLine = rawRows.reduce((accum, el, index) => {
    if (el.trim() === '' && index > 0 && accum === 0) {
      return index
    }
    return accum
  }, 0)

  const rules = rawRows.slice(0, emptyLine)
  const pageNumbers = rawRows.slice(emptyLine + 1, rawRows.length - 1)
                              .map(row => row.split(','))
  return { rules, pageNumbers }
}

export function parseRules(rules: string[]) {
  const ruleMap = {}

  for (const rule of rules) {
    const [x, y] = rule.split('|')
    if (!Object.hasOwnProperty.call(ruleMap, x)) {
      ruleMap[x] = { num: x, before: [] }
    }
    ruleMap[x].before.push(y)
  }

  return ruleMap
}

function findMiddle(pages: string[]) {
  return pages[Math.floor(pages.length / 2)]
}

export function solvePartOne (input: string) {
  // Code to solve part one here
  const { rules, pageNumbers } = parseInput(input)
  const ruleMap = parseRules(rules)
  
  let middlePageNumberSum = 0
  let countInvalidRows = 0

  for (const pages of pageNumbers) {
    let valid = true
    for (let i = 0; i + 1 < pages.length; i++) {
      const currentPage = pages[i]
      const nextPage = pages[i + 1]
      const currentPageRule = ruleMap[currentPage]
      const nextPageRule = ruleMap[nextPage]
      if (!currentPageRule?.before.includes(nextPage) || nextPageRule?.before.includes(currentPage)) {
        // console.log(currentPage, nextPage, currentPageRule, nextPageRule)
        countInvalidRows++
        valid = false
        break
      }
    }

    if (valid) {
      const middle = findMiddle(pages)
      middlePageNumberSum += Number(middle)
    }
  }

  console.log('countInvalidRows', countInvalidRows)
  return middlePageNumberSum
}

export function order(pages: string[], ruleMap: {}): string[] {
  const correctOrder: string[] = []
  console.log(pages)
  console.log(ruleMap)

  for (let i = 1; i < pages.length; i++) {
    let page = pages[i]
    let rule = ruleMap[page]
    if (!ruleMap) continue
    for (let j = i - 1; j >= 0; j--) {
      
      const previousPage = pages[j]
      const previoiusPageRule = ruleMap[previousPage]
      if (rule?.before.includes(previousPage)) {
        pages.splice(i, 1)
        pages.splice(j, 0, page)
        console.log(i, j)
        console.log(pages)
        page = pages[i]
        rule = ruleMap[page]
      }
    }
  }

  return pages
}

export function solvePartTwo (input: string) {
  // Code to solve part two here
  const { rules, pageNumbers } = parseInput(input)
  const ruleMap = parseRules(rules)
  
  let middlePageNumberSum = 0
  let countInvalidRows = 0

  for (const pages of pageNumbers) {
    let valid = true
    for (let i = 0; i + 1 < pages.length; i++) {
      const currentPage = pages[i]
      const nextPage = pages[i + 1]
      const currentPageRule = ruleMap[currentPage]
      const nextPageRule = ruleMap[nextPage]
      if (!currentPageRule?.before.includes(nextPage) || nextPageRule?.before.includes(currentPage)) {
        // console.log(currentPage, nextPage, currentPageRule, nextPageRule)
        valid = false
        break
      }
    }

    if (!valid) {
      countInvalidRows++
      const correctOrdering: string[] = order(pages, ruleMap)
      console.log(correctOrdering)
      const middle = findMiddle(correctOrdering)
      middlePageNumberSum += Number(middle)
    }
  }
  
  console.log('countInvalidRows', countInvalidRows)
  return middlePageNumberSum
}
