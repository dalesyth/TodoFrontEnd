import { browser } from 'globals';
import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';
import pluginReactConfig from 'eslint-plugin-react/configs/recommended.js';

export default {
  parser: '@typescript-eslint/parser', // Specifies the ESLint parser for TypeScript
  parserOptions: {
    ecmaVersion: 2021, // Allows for the parsing of modern ECMAScript features
    sourceType: 'module', // Allows for the use of imports
    ecmaFeatures: {
      jsx: true, // Allows for the parsing of JSX
    },
  },
  settings: {
    react: {
      version: 'detect', // Tells eslint-plugin-react to automatically detect the version of React to use
    },
  },
  languageOptions: { globals: { browser } },
  ...pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  ...pluginReactConfig,
  plugins: ['prettier'], // Specify ESLint plugins
  rules: {
    'prettier/prettier': 'error', // Enable the ESLint rule to report Prettier errors
  },
};
