import { Options } from 'prettier'

const prettierOptions: Options = {
  bracketSpacing: true,
  plugins: [
    'prettier-plugin-jsdoc',
    'prettier-plugin-organize-imports',
    'prettier-plugin-package-perfection',
  ],
  printWidth: 100,
  quoteProps: 'as-needed',
  requirePragma: false,
  semi: false,
  singleQuote: true,
  tabWidth: 2,
  trailingComma: 'none',
  useTabs: false
}

export = prettierOptions
