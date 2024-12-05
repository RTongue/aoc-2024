import { solvePartOne, solvePartTwo } from './solve'
import { getInput } from '../utils/getInput'

getInput('https://adventofcode.com/2024/day/5/input')
  .then((res: string) => {
    const answerOne = solvePartOne(res)
    console.log('Day 5 - Answer one', answerOne)

    const answerTwo = solvePartTwo(res)
    console.log('Day 5 - Answer two', answerTwo)
  })
  .catch(err => console.error(err))
