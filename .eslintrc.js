module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended", // 使用推荐的React规则
    "plugin:react-hooks/recommended", // 使用推荐的React Hooks规则
    "plugin:jsx-a11y/recommended", // 使用推荐的a11y规则
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: "module",
  },
  plugins: ["react", "jsx-a11y"],
  rules: {
    // 在这里添加或覆盖规则
  },
  settings: {
    "import/resolver": {
      node: {
        extensions: [".tsx", ".ts", ".js", ".json"],
      },
      typescript: {},
    },
  },
};
