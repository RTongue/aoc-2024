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
  let visited = 0

  for (let x = startX + direction[0]; x < grid.length + 1 && x >= 0; x += direction[0]) {
    const nextRow = grid[x]
    if (nextRow === undefined) return visited
    for (let y = startY + direction[1]; y < nextRow.length + 1 && y >= 0; y += direction[1]) {
      const cell = nextRow[y]
      if (cell === '#') {
        const nextDirChar = getNextDirection(dirChar)
        return visited + getPositions(grid, x - direction[0], y - direction[1], directions[nextDirChar], nextDirChar)
      } else if (cell === '.') {
        visited++
        nextRow[y] = 'X'
      } else if (cell === undefined) {
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

function getUniquePositions(grid, startX, startY, direction, dirChar) {
  console.log('called get unique positions')
  let uniquePositions = new Set<string>()

  for (let x = startX + direction[0]; x < grid.length + 1 && x >= 0; x += direction[0]) {
    const nextRow = grid[x]
    if (nextRow === undefined) return uniquePositions
    for (let y = startY + direction[1]; y < nextRow.length + 1 && y >= 0; y += direction[1]) {
      const cell = nextRow[y]
      if (cell === '#') {
        const nextDirChar = getNextDirection(dirChar)
        const nextUniquePositions = getUniquePositions(grid, x - direction[0], y - direction[1], directions[nextDirChar], nextDirChar)
        uniquePositions = uniquePositions.union(nextUniquePositions)
        return uniquePositions
      } else if (cell === '.') {
        uniquePositions.add(`${x}|${y}`)
        nextRow[y] = 'X'
      } else if (cell === undefined) {
        return uniquePositions
      }

      if (direction[1] === 0) {
        break
      }
    }

    if (direction[0] === 0) {
      break
    }
  }

  return uniquePositions
}

function makesLoop(grid, startX, startY, direction, dirChar, visited = new Set<string>()) {
  for (let x = startX + direction[0]; x < grid.length + 1 && x >= 0; x += direction[0]) {
    const nextRow = grid[x]
    if (nextRow === undefined) return false
    for (let y = startY + direction[1]; y < nextRow.length + 1 && y >= 0; y += direction[1]) {
      if (visited.has(`${x}|${y}|${dirChar}`)) return true
      const cell = nextRow[y]
      if (cell === '#') {
        const nextDirChar = getNextDirection(dirChar)
        return makesLoop(grid, x - direction[0], y - direction[1], directions[nextDirChar], nextDirChar, visited)
      } else if (cell === '.') {
        visited.add(`${x}|${y}|${dirChar}`)
        nextRow[y] = 'X'
      } else if (cell === undefined) {
        return false
      }

      if (direction[1] === 0) {
        break
      }
    }

    if (direction[0] === 0) {
      break
    }
  }

  return false
}

export function solvePartTwo (input: string) {
  // Code to solve part two here
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

  const startChar = grid[startX][startY]
  const direction = directions[startChar]

  const positions: Set<string> = getUniquePositions(grid, startX, startY, direction, startChar)
  let possibleObstructions = 0

  for (const position of positions) {
    const gridToCheck = twoDimensionalArray(input, '\n', '')
    const [obstacleX, obstacleY] = position.split('|')
    gridToCheck[obstacleX][obstacleY] = '#'
    if (makesLoop(gridToCheck, startX, startY, direction, startChar)) {
      possibleObstructions++
    }
  }
  
  console.log(positions, positions.size)
  return possibleObstructions
}