/**
 * 📘 ESLint + Prettier Setup
 * Author: Ritik Kumar
 * Date: 12 Feb 2025
 *
 * - ESLint → Finds & fixes code problems (bugs, bad practices).
 * - Prettier → Formats code consistently (spaces, semicolons, quotes).
 * - Together → clean, readable, error-free code.
 */

// ------------------------------
// 1. Install ESLint + Prettier
// ------------------------------
// $ npm install -D eslint prettier eslint-config-prettier eslint-plugin-prettier

// ------------------------------
// 2. Initialize ESLint
// ------------------------------
// $ npx eslint --init
// Choose:
// - How would you like to use ESLint? → "To check syntax, find problems, and enforce style"
// - TypeScript? → No (unless using TS)
// - Framework? → None / React / etc.
// - Config format → JSON

// ------------------------------
// 3. Example .eslintrc.json
// ------------------------------
/**
{
  "env": {
    "browser": true,
    "es2021": true,
    "node": true
  },
  "extends": [
    "eslint:recommended",
    "plugin:prettier/recommended"
  ],
  "plugins": ["prettier"],
  "rules": {
    "prettier/prettier": "error",
    "no-unused-vars": "warn",
    "no-console": "off"
  }
}
*/

// ------------------------------
// 4. Prettier Config (optional)
// ------------------------------
// Create file: .prettierrc
/**
{
  "semi": true,
  "singleQuote": true,
  "tabWidth": 2,
  "trailingComma": "es5"
}
 */

// ------------------------------
// 5. Add NPM Scripts
// ------------------------------
/**
{
  "scripts": {
    "lint": "eslint . --ext .js",
    "lint:fix": "eslint . --ext .js --fix",
    "format": "prettier --write ."
  }
}
 */

// Run:
// $ npm run lint
// $ npm run lint:fix
// $ npm run format

// ------------------------------
// 6. VS Code Setup
// ------------------------------
// Install extensions:
// - ESLint (Dirk Baeumer)
// - Prettier (Prettier Code Formatter)
//
// In settings.json:
/**
{
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  }
}
 */
