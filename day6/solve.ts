import { twoDimensionalArray } from '../utils/twoDimensionalArray'

const directions = {
  '^': [-1, 0],
  '>': [0, 1],
  
}

export function solvePartOne (input: string) {
  // Code to solve part one here
  const grid: string[][] = twoDimensionalArray(input, '\n', '')
  const [startX, startY] = grid.reduce((accum, row, x) => {
    const y = row.reduce((accum, cell, y) => {
      if (cell !== '.' && cell !== '#') {
        return y
      }
      return accum
    }, null)

    if (y !== null) {
      return [x, y]
    }

    return accum
  }, [null, null])

  console.log('[x, y', [startX, startY])
  console.log('Start', grid[startX][startY])

  return 0
}

export function solvePartTwo (input: string) {
  // Code to solve part two here
  return 0
}