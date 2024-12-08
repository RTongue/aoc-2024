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
  // console.log('get positions: grid', grid, 'x', startX, 'y', startY, 'directoin', direction, 'direChar', dirChar)
  let visited = 0

  for (let x = startX + direction[0]; x < grid.length + 1 && x >= 0; x += direction[0]) {
    // console.log('x', x, 'direction[0]', direction[0])
    const nextRow = grid[x]
    // console.log('nextRow', nextRow)
    if (nextRow === undefined) return visited
    for (let y = startY + direction[1]; y < nextRow.length + 1 && y >= 0; y += direction[1]) {
      const cell = nextRow[y]
      console.log('direction', direction, 'x', x, 'y', y, 'cell', cell)
      if (cell === '#') {
        const nextDirChar = getNextDirection(dirChar)
        // console.log('nextDirChar', nextDirChar)
        // console.log('next direction', directions[nextDirChar])
        return visited + getPositions(grid, x - direction[0], y - direction[1], directions[nextDirChar], nextDirChar)
      } else if (cell === '.') {
        visited++
        nextRow[y] = 'X'
        // console.log('visited++')
      } else if (cell === undefined) {
        // console.log('cell', cell)
        return visited
      }

      if (direction[1] === 0) {
        break
      }
    }

    if (direction[0] === 0) {
      break
    }
  }

  // console.log('returning visited', visited)

  return visited
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

  console.log('[x, y]', [startX, startY])
  console.log('Start', grid[startX][startY])
  const startChar = grid[startX][startY]
  const direction = directions[startChar]
  console.log('direction', direction)

  const positions = 1 + getPositions(grid, startX, startY, direction, startChar)

  return positions
}

export function solvePartTwo (input: string) {
  // Code to solve part two here
  return 0
}