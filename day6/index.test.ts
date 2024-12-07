import { solvePartOne, solvePartTwo } from './solve'

describe('Day 6', () => {
  describe('part one', () => {
    it('solves for example input', () => {
      const answer = solvePartOne(`....#.....
.........#
..........
..#.......
.......#..
..........
.#..^.....
........#.
#.........
......#...
`)
      expect(answer).toEqual(41)
    })
  })

  describe('part two', () => {
    it('solves for example input', () => {
      const answer = solvePartTwo(``)
      expect(answer).toEqual(0)
    })
  })
})