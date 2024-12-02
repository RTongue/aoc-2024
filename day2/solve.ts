import fs from 'fs'

let debugString = ''

export function checkIfSafe(levels: number[]) {
  // console.log('input', levels)
  let lastDiff = 0
  for (let i = 1; i < levels.length; i++) {
    const currentLevel = levels[i - 1]
    const nextLevel = levels[i]
    const currentDiff = currentLevel - nextLevel

    /** DEBUG */
    if (lastDiff > 0 && currentDiff < 0) {
      debugString += levels + ' Increase then decrease' + '\n'
      return false
    }

    if (lastDiff < 0 && currentDiff > 0) {
      debugString += levels + ' Decrease then increase' + '\n'
      return false
    }

    if (Math.abs(currentDiff) < 1) {
      debugString += levels + ' Change less than 1 ' + currentLevel + nextLevel + '\n'
      return false
    }

    if (Math.abs(currentDiff) > 3) {
      debugString += levels + 'Change greater than 3' + currentLevel + nextLevel + '\n'
      return false
    }
    /** END */

    if ((lastDiff > 0 && currentDiff < 0) || 
        (lastDiff < 0 && currentDiff > 0) ||
        Math.abs(currentDiff) < 1 || 
        Math.abs(currentDiff) > 3) {
      // Not all increasing or decreasing
      // console.log('current level', currentLevel)
      // console.log('next level', nextLevel)
      // console.log('last diff', lastDiff)
      // console.log('current diff', currentDiff)
      return false
    }
    lastDiff = currentDiff
  }

  debugString += levels + ' Safe\n'
  return true
}

export function checkIfSafeOneLevelRemoved(levels: number[]) {
  let lastDiff = 0
  for (let i = 1; i < levels.length; i++) {
    const currentLevel = levels[i - 1]
    const nextLevel = levels[i]
    const currentDiff = currentLevel - nextLevel
    if ((lastDiff > 0 && currentDiff < 0) || 
        (lastDiff < 0 && currentDiff > 0) ||
        Math.abs(currentDiff) < 1 || 
        Math.abs(currentDiff) > 3) {
      // Not all increasing or decreasing
      // console.log('current level', currentLevel)
      // console.log('next level', nextLevel)
      // console.log('last diff', lastDiff)
      // console.log('current diff', currentDiff)
      debugString += levels + ' Found unsafe level - Current level ' + currentLevel + ' Next level ' + nextLevel + ' Removing level ' + levels[i]
      const excludingPrevious = levels.slice()
      excludingPrevious.splice(i - 2, 1)
      if (checkIfSafe(excludingPrevious)) return true

      const exlcudingCurrent = levels.slice()
      exlcudingCurrent.splice(i - 1, 1)
      if (checkIfSafe(exlcudingCurrent)) return true

      const excludingNext = levels.slice()
      excludingNext.splice(i, 1)
      return checkIfSafe(excludingNext)
    }
    lastDiff = currentDiff
  }

  debugString += levels + ' Safe\n'
  return true
}

export function solvePartOne (input: string) {
  // Code to solve part one here
  const rawRows = input.split('\n')
  const rows = rawRows.slice(0, rawRows.length - 1)
                      .map(row => row.split(' ').map(Number))

  return rows.reduce((accum, levels) => {
    const isSafe = checkIfSafe(levels)
    accum += Number(isSafe)
    return accum
  }, 0)
}

export function solvePartTwo (input: string) {
  // Code to solve part two here
  const rawRows = input.split('\n')
  const rows = rawRows.slice(0, rawRows.length - 1)
                      .map(row => row.split(' ').map(Number))

  const answer = rows.reduce((accum, levels) => {
    const isSafe = checkIfSafeOneLevelRemoved(levels)
    accum += Number(isSafe)
    return accum
  }, 0)

  fs.writeFileSync('debugString.txt', debugString, 'utf8')

  return answer
}