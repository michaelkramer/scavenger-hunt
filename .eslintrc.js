module.exports = {
    env: {
      browser: true,
      es6: true,
      node: true,
    },
    extends: ["eslint:recommended", "plugin:react/recommended", //"plugin:prettier/recommended"
],
    globals: {
      Atomics: "readonly",
      SharedArrayBuffer: "readonly",
    },
    parser: "@typescript-eslint/parser",
    parserOptions: {
      ecmaFeatures: {
        jsx: true,
      },
      ecmaVersion: 2018,
      sourceType: "module",
    },
    plugins: ["react", "@typescript-eslint"],
    rules: {
      "no-console": 0,
      "arrow-parens": "error",
      "eqeqeq": ["error", "always"],
      "no-unused-vars": [
        0,
        {
          argsIgnorePattern: "^_",
          ignoreRestSiblings: true,
        },
      ],
      //"@typescript-eslint/no-unused-vars": [1],
      //"prettier/prettier": 0,
      "react/prop-types": [1],
      "quotes": [
        "error",
        "double",
        { "avoidEscape": true , "allowTemplateLiterals": true }
    ],
    },
  };
