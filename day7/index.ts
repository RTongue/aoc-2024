import { solvePartOne, solvePartTwo } from './solve'
import { getInput } from '../utils/getInput'

getInput('https://adventofcode.com/2024/day/7/input')
  .then((res: string) => {
    const answerOne = solvePartOne(res)
    console.log('Day 7 - Answer one', answerOne)

    const answerTwo = solvePartTwo(res)
    console.log('Day 7 - Answer two', answerTwo)
  })
  .catch(err => console.error(err))
