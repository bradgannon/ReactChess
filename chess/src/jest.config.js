const jestConfig = {
  verbose: true,
  testURL: "http://localhost/",
  'transform': {
    "^.+\\.(t|j)s$": "ts-jest"
  },
  testMatch: ['**/__tests__/*.js?(x)'],
}

module.exports = jestConfig