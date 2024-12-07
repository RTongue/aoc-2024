import { start } from 'repl'
import { twoDimensionalArray } from '../utils/twoDimensionalArray'

const directions = {
  '^': [-1, 0],
  '>': [0, 1],
  'v': [1, 0],
  '<': [0, -1],
}

function getNextDirection(dirChar: string): string {
  switch (dirChar) {
    case '^':
      return '>'
    case '>':
      return 'v'
    case 'v':
      return '<'
    case '<':
      return '^'
    default:
      throw Error('invald direction char: ' + dirChar)
  }
}

function getPositions(grid, startX, startY, direction, dirChar) {
  let visited = 1

  for (let x = startX + direction[0]; x < grid.length && x > 0; x + direction[0]) {
    const nextRow = grid[x + direction[0]]
    if (nextRow === undefined) return visited
    for (let y = startY; x < nextRow.length; y + direction[1]) {
      const cell = grid[x + direction[0]][y + direction[1]]
      if (cell === '#') {
        const nextDirChar = getNextDirection(dirChar)
        visited += getPositions(grid, x, y, directions[nextDirChar], nextDirChar)
      } else if (cell === '.') {
        visited++
      } else if (cell === undefined) {
        return visited
      }
    }
  }
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
  const startChar = grid[startX][startY]
  const direction = directions[startChar]

  const positions = getPositions(grid, startX, startY, direction, startChar)

  return positions
}

export function solvePartTwo (input: string) {
  // Code to solve part two here
  return 0
}