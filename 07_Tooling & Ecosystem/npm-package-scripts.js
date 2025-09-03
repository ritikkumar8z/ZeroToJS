/**
 * 📘 NPM & package.json Scripts
 * Author: Ritik Kumar
 * Date: 11 Feb 2025
 *
 * - NPM = Node Package Manager (install, manage, run packages).
 * - package.json = project metadata + dependencies + scripts.
 */

// ------------------------------
// 1. package.json Example
// ------------------------------
/**
{
  "name": "my-app",
  "version": "1.0.0",
  "scripts": {
    "start": "node index.js",
    "dev": "nodemon index.js",
    "build": "webpack --mode production",
    "test": "jest"
  },
  "dependencies": {
    "express": "^4.18.2"
  },
  "devDependencies": {
    "nodemon": "^3.0.0"
  }
}
 */

// ------------------------------
// 2. Installing Dependencies
// ------------------------------
// $ npm init -y              → generate package.json
// $ npm install express      → add runtime dependency
// $ npm install -D nodemon   → add dev dependency
// $ npm uninstall express    → remove package
// $ npm outdated             → check old versions
// $ npm update               → update packages

// ------------------------------
// 3. Running Scripts
// ------------------------------
// $ npm run start     → runs "node index.js"
// $ npm run dev       → runs nodemon
// $ npm run build     → runs webpack
// $ npm test          → shortcut for "npm run test"

// ------------------------------
// 4. Custom Scripts Example
// ------------------------------
// package.json
/**
{
  "scripts": {
    "lint": "eslint .",
    "format": "prettier --write .",
    "serve": "http-server ./dist",
    "clean": "rimraf dist && mkdir dist"
  }
}
 */

// $ npm run lint
// $ npm run format
// $ npm run serve
// $ npm run clean

// ------------------------------
// 5. Global vs Local Packages
// ------------------------------
// Local (default): installed in ./node_modules
//   - run via npm scripts (preferred)
// Global (-g): installed system-wide
//   - use for CLI tools (e.g., npm install -g serve)

// ------------------------------
// 6. Yarn & pnpm
// ------------------------------
// Alternatives to npm with faster installs and better caching
// $ yarn add lodash
// $ pnpm install
