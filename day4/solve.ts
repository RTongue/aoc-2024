function searchDirection(rows, x, y, directionX, directionY, word) {
  if (word === '') return 1
  const nextChar = word.slice(0, 1)
  const remainingChars = word.slice(1)
  const nextX = x + directionX
  const nextY = y + directionY

  if (nextX < 0 || nextX === rows.length || nextY < 0 || nextY === rows[nextX].length) return 0

  if (rows[x + directionX][y + directionY] === nextChar) {
    return searchDirection(rows, x + directionX, y + directionY, directionX, directionY, remainingChars)
  }

  return 0
}

function searchWord(rows, x, y, word): number {
  let foundWords = 0
  const nextChar = word.slice(0, 1)
  const remainingChars = word.slice(1)
  const row = rows[x]

  for (let xDirection = -1; xDirection <= 1; xDirection++) {
    for (let yDirection = -1; yDirection <= 1; yDirection++) {
      if (xDirection === 0 && yDirection === 0) continue
      const nextX = x + xDirection
      const nextY = y + yDirection
      if (nextX < 0 || nextX === rows.length || nextY < 0 || nextY === row.length) continue
      const cell = rows[nextX][nextY]
      if (cell === nextChar) {
        foundWords += searchDirection(rows, nextX, nextY, xDirection, yDirection, remainingChars)
      }
    }
  }

  return foundWords
}

export function solvePartOne (input: string) {
  // Code to solve part one here
  const rawRows = input.split('\n')
  const rows = rawRows.filter(row => row.trim() !== '')
                      .map(r => r.split(''))
  
  let foundWords = 0

  for (let x = 0; x < rows.length; x++) {
    const row = rows[x]
    for (let y = 0; y < row.length; y++) {
      const cell = row[y]
      if (cell === 'X') {
        foundWords += searchWord(rows, x, y, 'MAS')
      }
    }
  }

  return foundWords
}

function searchXMas(rows, x, y): number {
  const row = rows[x]
  if (x - 1 < 0 || x + 1 === rows.length || y - 1 < 0 || y + 1 === row.length) return 0
  if (rows[x + 1] === undefined) console.log(x, y, rows.length, row.length)
  const topDownDiagonal = [rows[x - 1][y - 1], rows[x + 1][y + 1]]
  const bottomUpDiagonal = [rows[x + 1][y - 1], rows[x - 1][y + 1]]

  if (topDownDiagonal.includes('M') && 
      topDownDiagonal.includes('S') && 
      bottomUpDiagonal.includes('M') && 
      bottomUpDiagonal.includes('S')) {
    return 1
  }

  return 0
}

export function solvePartTwo (input: string) {
  // Code to solve part two here
  const rawRows = input.split('\n')
  const rows = rawRows.filter(row => row.trim() !== '')
                      .map(r => r.split(''))
  
  let foundXMas = 0

  for (let x = 0; x < rows.length; x++) {
    const row = rows[x]
    for (let y = 0; y < row.length; y++) {
      const cell = row[y]
      if (cell === 'A') {
        foundXMas += searchXMas(rows, x, y)
      }
    }
  }

  return foundXMas
}