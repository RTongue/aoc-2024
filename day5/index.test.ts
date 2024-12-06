import { parseRules, order, parseInput, solvePartOne, solvePartTwo } from './solve'

describe('Day 5', () => {
  describe('part one', () => {
    it('solves an easy example input', () => {
      const answer = solvePartOne(`47|53
97|13
97|61
97|47
75|29
61|13
75|53
29|13
97|29
53|29
61|53
97|53
61|29
47|13
75|47
97|75
47|61
75|61
47|29
75|13
53|13

75,47,61,53,29
`)
      expect(answer).toEqual(61)
    })

    it('solves for example input', () => {
      const answer = solvePartOne(`47|53
97|13
97|61
97|47
75|29
61|13
75|53
29|13
97|29
53|29
61|53
97|53
61|29
47|13
75|47
97|75
47|61
75|61
47|29
75|13
53|13

75,47,61,53,29
97,61,53,29,13
75,29,13
75,97,47,61,53
61,13,29
97,13,75,29,47
`)
      expect(answer).toEqual(143)
    })
  })

  describe('part two', () => {
    it('correctly orders out of order pages', () => {
      const { rules } = parseInput(`47|53
97|13
97|61
97|47
75|29
61|13
75|53
29|13
97|29
53|29
61|53
97|53
61|29
47|13
75|47
97|75
47|61
75|61
47|29
75|13
53|13

75,97,47,61,53
`)
      const ruleMap = parseRules(rules)
      const orderedPages = order(['97', '13', '75', '29', '47'], ruleMap)
      expect(orderedPages.join(',')).toEqual('97,75,47,29,13')
    })


    it('solves an easy example input', () => {
      const answer = solvePartTwo(`47|53
97|13
97|61
97|47
75|29
61|13
75|53
29|13
97|29
53|29
61|53
97|53
61|29
47|13
75|47
97|75
47|61
75|61
47|29
75|13
53|13

75,97,47,61,53
`)
      expect(answer).toEqual(47)
    })

    it('solves for example input', () => {
      const answer = solvePartTwo(`47|53
97|13
97|61
97|47
75|29
61|13
75|53
29|13
97|29
53|29
61|53
97|53
61|29
47|13
75|47
97|75
47|61
75|61
47|29
75|13
53|13

75,47,61,53,29
97,61,53,29,13
75,29,13
75,97,47,61,53
61,13,29
97,13,75,29,47
`)
      expect(answer).toEqual(123)
    })
  })
})
