export function solvePartOne (input: string) {
  // Code to solve part one here
  const realInstructions: number[][] = []

  for (let i = 0; i < input.length; i++) {
    const currentSlice = input.slice(i, i + 4)
    if (currentSlice === 'mul(') {
      for (let j = i + 4; j < input.length; j++) {
        const closingChar = input[j]
        if (closingChar === ')') {
          const inBetween = input.slice(i + 4, j)
          const nums = inBetween.split(',')
          if (nums.length === 2) {
            const parsed = [Number(nums[0]), Number(nums[1])]
            const valid = parsed.every(n => !isNaN(n) && n >= 0 && n < 1000)
            if (valid) realInstructions.push(parsed)
          }
        }
      }
    }
  }

  return realInstructions.reduce((accum, instruction) => {
    const result = instruction[0] * instruction[1]
    accum += result
    return accum
  }, 0)
}

export function solvePartTwo (input: string) {
  // Code to solve part two here
  const realInstructions: number[][] = []

  for (let i = 0; i < input.length; i++) {
    const dontSlice = input.slice(i, i + 7)
    if (dontSlice === 'don\'t()') {
      for (let nextDo = i + 7; nextDo < input.length; nextDo++) {
        if (input.slice(nextDo, nextDo + 4) === 'do()') {
          i = nextDo
          nextDo = input.length
        }
      }
      continue
    }

    const currentSlice = input.slice(i, i + 4)

    if (currentSlice === 'mul(') {
      for (let j = i + 4; j < input.length; j++) {
        const closingChar = input[j]
        if (closingChar === ')') {
          const inBetween = input.slice(i + 4, j)
          const nums = inBetween.split(',')
          if (nums.length === 2) {
            const parsed = [Number(nums[0]), Number(nums[1])]
            const valid = parsed.every(n => !isNaN(n) && n >= 0 && n < 1000)
            if (valid) realInstructions.push(parsed)
          }
        }
      }
    }
  }

  return realInstructions.reduce((accum, instruction) => {
    const result = instruction[0] * instruction[1]
    accum += result
    return accum
  }, 0)
}