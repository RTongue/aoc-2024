function generate (plop) {
  // create your generators here
  plop.setGenerator('day', {
    description: 'Generate a new Advent of Code Day',
    prompts: [
      {
        type: 'input',
        name: 'day',
        message: 'Enter the day number:',
      },
    ],
    actions: [
      {
        type: 'add',
        path: 'day{{day}}/index.ts',
        templateFile: 'templates/index.ts.hbs',
      },
      {
        type: 'add',
        path: 'day{{day}}/index.test.ts',
        templateFile: 'templates/index.test.ts.hbs',
      },
      {
        type: 'add',
        path: 'day{{day}}/solve.ts',
        templateFile: 'templates/solve.ts.hbs',
      },
    ],
  })
}

module.exports = generate