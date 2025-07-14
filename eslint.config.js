import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'
import tseslint from 'typescript-eslint'
import { globalIgnores } from 'eslint/config'

export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      js.configs.recommended,
      // tseslint.configs.recommended,
      tseslint.configs.recommendedTypeChecked,
      reactHooks.configs['recommended-latest'],
      reactRefresh.configs.vite,
      reactX.configs['recommended-typescript'],
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    rules: {
      // react-x rules
      "react-x/no-class-component": "warn",
      "react-x/no-array-index-key": "warn",
      "react-x/no-children-prop": "error",
      "react-x/no-duplicate-key": "error",
      "react-x/no-missing-key": "warn",
      "react-x/no-nested-components": "warn",
      "react-x/no-unstable-context-value": "warn",
      "react-x/no-unstable-default-props": "warn",
      "react-x/prefer-shorthand-boolean": "warn",
      "react-x/prefer-shorthand-fragment": "warn",

      // react-dom rules
      "react-dom/no-dangerously-set-innerhtml": "warn",
      "react-dom/no-children-in-void-dom-elements": "error",
      "react-dom/no-dangerously-set-innerhtml-with-children": "error",
      "react-dom/no-find-dom-node": "error",
      "react-dom/no-missing-button-type": "warn",
      "react-dom/no-missing-iframe-sandbox": "warn",
      "react-dom/no-namespace": "error",
      "react-dom/no-render-return-value": "error",
      "react-dom/no-script-url": "error",
      "react-dom/no-unsafe-iframe-sandbox": "warn",
      "react-dom/no-unsafe-target-blank": "warn",
    }
  },
])
