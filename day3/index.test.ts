import { solvePartOne, solvePartTwo } from './solve'

describe('Day 3', () => {
  describe('part one', () => {
    it('solves for example input', () => {
      const answer = solvePartOne(`xmul(2,4)%&mul[3,7]!@^do_not_mul(5,5)+mul(32,64]then(mul(11,8)mul(8,5))`)
      expect(answer).toEqual(161)
    })
  })

  describe('part two', () => {
    it('solves for example input', () => {
      const answer = solvePartTwo(`xmul(2,4)&mul[3,7]!^don't()_mul(5,5)+mul(32,64](mul(11,8)undo()?mul(8,5))`)
      expect(answer).toEqual(48)
    })
  })
})