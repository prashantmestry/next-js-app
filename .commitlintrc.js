module.exports = {
  extends: ["@commitlint/config-conventional"],
  rules: {
    "header-max-length": [2, "always", 72],
    "type-enum": [
      2,
      "always",
      ["feat", "fix", "docs", "style", "refactor", "test", "chore"],
    ],
    "subject-case": [2, "always", "sentence-case"], // Example: Ensure the subject is sentence-case
  },
  parserPreset: {
    parserOpts: {
      noteKeywords: ["BREAKING CHANGE", "RELEASE NOTE"],
    },
  },
};
