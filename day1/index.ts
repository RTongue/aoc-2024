import { getInput } from '../utils/getInput'

export const answerTwo = (input) => {
  const raw = input.split('\n')
  const rows = raw.slice(0, raw.length - 1)
  const { left, right } = rows
                    .map(row => row.split('   ').map(cell => Number(cell.trim())))
                    .reduce((accum, el) => {
                      accum.left.push(el[0])
                      accum.right.push(el[1])
                      return accum
                    }, { left: [], right: []})

  const rightCounts = {}
  for (let i = 0; i < right.length; i++) {
    if (rightCounts[right[i]] === undefined) {
      rightCounts[right[i]] = 0
    }
    rightCounts[right[i]]++
  }

  let sum = 0
  for (let i = 0; i < left.length; i++) {
    const multiplier = rightCounts[left[i]] || 0
    sum += (left[i] * multiplier)
  }
  
  return sum
}

export const processInput = (input) => {
  const r = input.split('\n')
  const goodRows = r.slice(0, r.length - 1)
  const rows = goodRows
                    .map(row => row.split('   ').map(cell => Number(cell.trim())))
                    .reduce((accum, el) => {
                      accum.left.push(el[0])
                      accum.right.push(el[1])
                      return accum
                    }, { left: [], right: []})
  const sortedLeft = rows.left.sort()
  const sortedRight = rows.right.sort()
  let sum = 0
  for (let i = 0; i < sortedLeft.length; i++) {
    sum += Math.abs(sortedLeft[i] - sortedRight[i])
    if (isNaN(sum)) {
      console.log(i, sortedLeft.length, sortedRight.length, sortedLeft[i], sortedRight[i])
    }
  }
  return sum
}

getInput('https://adventofcode.com/2024/day/1/input')
  .then((res: string) => {
    const answer = processInput(res)
    console.log('Answer one', answer)

    const puzzleTwo = answerTwo(res)
    console.log('Answer two', puzzleTwo)
  })
  .catch(err => console.error(err))
