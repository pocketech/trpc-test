/* eslint-disable @typescript-eslint/naming-convention */
/**
 * @type {import("eslint").Linter.Config}
 */
module.exports = {
  root: true,
  env: {
    browser: true,
    es2022: true,
    node: true,
  },
  settings: {
    react: {
      version: "detect",
    },
  },
  parserOptions: {
    project: "./tsconfig.eslint.json",
    tsconfigRootDir: __dirname,
  },
  extends: [
    "eslint:all",
    "plugin:@typescript-eslint/all",
    "plugin:react/all",
    "plugin:react-hooks/recommended",
    "plugin:import/recommended",
    "plugin:import/typescript",
    "plugin:import/react",
    "plugin:promise/recommended",
    "plugin:jsx-a11y/strict",
    "plugin:@next/next/core-web-vitals",
    "prettier",
  ],
  plugins: ["unused-imports"],
  overrides: [],
  rules: {
    "arrow-body-style": ["error", "always"],
    "id-length": "off",
    "line-comment-position": "off",
    "max-lines-per-function": "off",
    "multiline-comment-style": "off",
    "no-inline-comments": "off",
    "no-nested-ternary": "off",
    "no-restricted-syntax": [
      "error",
      {
        selector: "TSEnumDeclaration",
        message: "Don't declare enums",
      },
    ],
    "no-ternary": "off",
    "no-undefined": "off",
    "one-var": ["error", "never"],
    "sort-imports": "off",
    "sort-keys": "off",

    "@typescript-eslint/prefer-readonly-parameter-types": "off",
    "@typescript-eslint/no-type-alias": "off",
    "@typescript-eslint/no-unused-vars": "off",
    "@typescript-eslint/no-magic-numbers": "warn",
    "@typescript-eslint/consistent-type-definitions": ["error", "type"],
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "@typescript-eslint/naming-convention": [
      "warn",
      {
        selector: ["typeAlias", "typeParameter"],
        format: ["PascalCase"],
      },
      {
        selector: ["property", "parameterProperty", "method"],
        format: ["camelCase"],
      },
      {
        selector: ["variable"],
        types: ["boolean"],
        format: ["PascalCase"],
        prefix: ["is", "has", "should", "can"],
      },
      {
        selector: ["variable"],
        types: ["string", "number", "array"],
        modifiers: ["const"],
        format: ["camelCase", "UPPER_CASE"],
      },
      {
        selector: ["typeProperty"],
        types: ["boolean"],
        format: ["PascalCase"],
        prefix: ["is", "has", "should", "can"],
      },
    ],
    "import/no-unresolved": ["error", { ignore: ["^@/(.*)$"] }],
    "import/order": [
      "warn",
      {
        groups: [
          "builtin",
          "external",
          "internal",
          "parent",
          "sibling",
          "index",
          "object",
          "type",
        ],
        "newlines-between": "always",
        pathGroupsExcludedImportTypes: ["react", "next"],
        alphabetize: { order: "asc", caseInsensitive: true },
        pathGroups: [
          {
            pattern: "react",
            group: "external",
            position: "before",
          },
          {
            pattern: "next/**",
            group: "external",
            position: "before",
          },
        ],
      },
    ],
    "import/newline-after-import": "error",

    "react/jsx-max-depth": "off",
    "react/jsx-no-literals": "off",
    "react/prop-types": "off",
    "react/react-in-jsx-scope": "off",
    "react/jsx-props-no-spreading": "off",
    "react/jsx-filename-extension": [
      "error",
      { allow: "as-needed", extensions: [".tsx"] },
    ],
    "react/function-component-definition": [
      "error",
      {
        namedComponents: "arrow-function",
        unnamedComponents: "arrow-function",
      },
    ],
    "jsx-a11y/anchor-is-valid": "off",
    "unused-imports/no-unused-imports": "error",
    "unused-imports/no-unused-vars": [
      "warn",
      {
        vars: "all",
        varsIgnorePattern: "^_",
        args: "after-used",
        argsIgnorePattern: "^_",
      },
    ],
  },
};
