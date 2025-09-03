/**
 * 📘 GitHub Actions (CI/CD Basics)
 * Author: Ritik Kumar
 * Date: 16 Feb 2025
 *
 * CI (Continuous Integration) → Run tests/build automatically on every push/PR.
 * CD (Continuous Delivery/Deployment) → Deploy to servers after tests pass.
 *
 * GitHub Actions = free CI/CD tool built into GitHub.
 */

// ------------------------------
// 1. Basic Workflow
// ------------------------------
// Create a workflow file: .github/workflows/nodejs.yml

/**
name: Node.js CI

on:
  push:
    branches: [ "main" ]   # Run on push to main
  pull_request:
    branches: [ "main" ]   # Run on PRs

jobs:
  build:
    runs-on: ubuntu-latest

    steps:
      - name: Checkout repo
        uses: actions/checkout@v3

      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: 18

      - name: Install dependencies
        run: npm install

      - name: Run tests
        run: npm test
*/

// ------------------------------
// 2. With Playwright / Cypress
// ------------------------------
// Example: Playwright E2E pipeline
/**
jobs:
  e2e:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: 18
      - run: npm ci
      - run: npx playwright install --with-deps
      - run: npx playwright test
*/

// ------------------------------
// 3. Deployment Example
// ------------------------------
// Example: Deploy to GitHub Pages (React/Vite app)

/**
name: Deploy to GitHub Pages

on:
  push:
    branches: [ "main" ]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: 18
      - run: npm ci
      - run: npm run build
      - name: Deploy
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist
*/

// ------------------------------
// 4. Best Practices
// ------------------------------
// ✅ Use caching (actions/cache) to speed up installs
// ✅ Keep workflows simple & modular
// ✅ Run unit + E2E tests in CI
// ✅ Protect "main" branch → only merge after CI passes
// ✅ Use secrets for API keys / tokens
