import { processInput, answerTwo } from '.'

describe('Day 1', () => {
  it('should return the correct answer for the example input', () => {
    const answer = processInput(`3   4
4   3
2   5
1   3
3   9
3   3
`)
    expect(answer).toEqual(11)
  })

  it('should return the correct answer for the example input for puzzle two', () => {
    const answer = answerTwo(`3   4
4   3
2   5
1   3
3   9
3   3
`)
      expect(answer).toEqual(31)
  })
})