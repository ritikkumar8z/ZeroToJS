/**
 * 📘 End-to-End (E2E) Testing: Playwright & Cypress
 * Author: Ritik Kumar
 * Date: 15 Feb 2025
 *
 * - E2E tests simulate real user flows (open browser → click → assert).
 * - Playwright → modern, fast, multi-browser (Chromium, Firefox, WebKit).
 * - Cypress → easy, interactive, great DX.
 */

// ------------------------------
// 1. Playwright Setup
// ------------------------------
// Install:
// $ npm install -D @playwright/test
// $ npx playwright install

// package.json:
/**
"scripts": {
  "test:e2e": "playwright test"
}
*/

// playwright.config.js:
/**
import { defineConfig } from "@playwright/test";

export default defineConfig({
  use: {
    headless: true,
    baseURL: "http://localhost:3000",
  },
});
*/

// Example test: tests/example.spec.js
/**
import { test, expect } from "@playwright/test";

test("homepage has title and link to docs", async ({ page }) => {
  await page.goto("/");
  await expect(page).toHaveTitle(/My App/);
  await page.click("text=Docs");
  await expect(page).toHaveURL(/.*docs/);
});
*/

// Run: $ npm run test:e2e

// ------------------------------
// 2. Cypress Setup
// ------------------------------
// Install:
// $ npm install -D cypress
// $ npx cypress open   → interactive UI

// package.json:
/**
"scripts": {
  "cypress:open": "cypress open",
  "cypress:run": "cypress run"
}
*/

// Example test: cypress/e2e/home.cy.js
/**
describe("Homepage", () => {
  it("should load and navigate", () => {
    cy.visit("http://localhost:3000");
    cy.contains("Docs").click();
    cy.url().should("include", "/docs");
  });
});
*/

// Run:
// $ npm run cypress:open → interactive
// $ npm run cypress:run  → headless CI

// ------------------------------
// 3. When to Use
// ------------------------------
// - Playwright: full browser automation, good for cross-browser tests.
// - Cypress: great developer experience, visual test runner.
// - Both can integrate into CI/CD pipelines (GitHub Actions, GitLab CI).

// ------------------------------
// 4. Best Practices
// ------------------------------
// - Keep E2E tests small (don’t test everything).
// - Cover critical user flows: login, signup, checkout, forms.
// - Combine with unit tests (don’t replace).
// - Use data-testid attributes for stable selectors.
