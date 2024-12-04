import { solvePartOne, solvePartTwo } from './solve'

describe('Day 4', () => {
  describe('part one', () => {
    it('solves for example input', () => {
      const answer = solvePartOne(`MMMSXXMASM
MSAMXMSMSA
AMXSXMAAMM
MSAMASMSMX
XMASAMXAMM
XXAMMXXAMA
SMSMSASXSS
SAXAMASAAA
MAMMMXMMMM
MXMXAXMASX
`)
      expect(answer).toEqual(18)
    })
  })

  describe('part two', () => {
    it.only('solves for example input', () => {
      const answer = solvePartTwo(`MMMSXXMASM
MSAMXMSMSA
AMXSXMAAMM
MSAMASMSMX
XMASAMXAMM
XXAMMXXAMA
SMSMSASXSS
SAXAMASAAA
MAMMMXMMMM
MXMXAXMASX
`)
      expect(answer).toEqual(9)
    })
  })
})