const nextJest = require("next/jest");

const createJestConfig = nextJest({
  dir: "./",
});

const customJestConfig = {
  setupFilesAfterEnv: ["<rootDir>/setupTest.js"],
  moduleNameMapper: {
    // Handle module aliases (same as in tsconfig.json or jsconfig.json)
    "^@/(.*)$": "<rootDir>/src/$1",
  },
  testEnvironment: "jest-environment-jsdom",
};

module.exports = createJestConfig(customJestConfig);

// module.exports = {
//   testEnvironment: "jsdom",
//   setupFilesAfterEnv: ["./jest.setup.js"],
//   collectCoverage: true,
//   coverageDirectory: "coverage",
//   collectCoverageFrom: ["src/**/*.{js,jsx}"],
//   // coverageReporters: ["lcov", "text"],
//   // collectCoverageFrom: [
//   //   "pages/**/*.{js,jsx,ts,tsx}",
//   //   "components/**/*.{js,jsx,ts,tsx}",
//   //   "!**/node_modules/**",
//   //   "!**/.next/**",
//   // ],
// };
