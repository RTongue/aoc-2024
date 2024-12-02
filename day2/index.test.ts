import { checkIfSafe, checkIfSafeOneLevelRemoved, solvePartOne, solvePartTwo } from './solve'

describe('Day 2', () => {
  describe('check if safe', () => {
    it('returns safe when all levels are decresing by 1 or 2', () => {
      const isSafe = checkIfSafe([7, 6, 4, 2, 1])
      expect(isSafe).toBe(true)
    })

    it('returns unsafe if the increase is greater than 3', () => {
      const isSafe = checkIfSafe([1, 2, 7, 8, 9])
      expect(isSafe).toBe(false)
    })

    it('returns false if there is a decrease greater than 3', () => {
      const isSafe = checkIfSafe([9, 7, 6, 2, 1])
      expect(isSafe).toBe(false)
    })

    it('returns false if there is an increase and a decrease', () => {
      const isSafe = checkIfSafe([1, 3, 2, 4, 5])
      expect(isSafe).toBe(false)
    })

    it('returns false if there is neither and increase or a decrease between two levels', () => {
      const isSafe = checkIfSafe([8, 6, 4, 4, 1])
      expect(isSafe).toBe(false)
    })

    it('returns true if the leves are all increasing by 1, 2, or 3', () => {
      const isSafe = checkIfSafe([1, 3, 6, 7, 9])
      expect(isSafe).toBe(true)
    })
  })

  describe('part one', () => {
    it('solves for example input', () => {
      const answer = solvePartOne(`7 6 4 2 1
1 2 7 8 9
9 7 6 2 1
1 3 2 4 5
8 6 4 4 1
1 3 6 7 9
`)
      expect(answer).toEqual(2)
    })
  })

  describe('check if safe with one level removed', () => {
    it('returns safe when all levels are decresing by 1 or 2', () => {
      const isSafe = checkIfSafeOneLevelRemoved([7, 6, 4, 2, 1])
      expect(isSafe).toBe(true)
    })

    it('returns unsafe if the increase is greater than 3', () => {
      const isSafe = checkIfSafeOneLevelRemoved([1, 2, 7, 8, 9])
      expect(isSafe).toBe(false)
    })

    it('returns false if there is a decrease greater than 3', () => {
      const isSafe = checkIfSafeOneLevelRemoved([9, 7, 6, 2, 1])
      expect(isSafe).toBe(false)
    })

    it('returns true if there is an increase and a decrease in only one level', () => {
      const isSafe = checkIfSafeOneLevelRemoved([1, 3, 2, 4, 5])
      expect(isSafe).toBe(true)
    })

    it('returns true if there is neither and increase or a decrease between two levels in only one level', () => {
      const isSafe = checkIfSafeOneLevelRemoved([8, 6, 4, 4, 1])
      expect(isSafe).toBe(true)
    })

    it('returns true if the leves are all increasing by 1, 2, or 3', () => {
      const isSafe = checkIfSafeOneLevelRemoved([1, 3, 6, 7, 9])
      expect(isSafe).toBe(true)
    })
  })

  describe('part two', () => {
    it('solves for example input', () => {
      const answer = solvePartTwo(`7 6 4 2 1
1 2 7 8 9
9 7 6 2 1
1 3 2 4 5
8 6 4 4 1
1 3 6 7 9
`)
      expect(answer).toEqual(4)
    })
  })
})