/**
 * 📘 Husky + lint-staged (Pre-commit Hooks)
 * Author: Ritik Kumar
 * Date: 17 Feb 2025
 *
 * - Husky → Manage Git hooks (pre-commit, pre-push, etc.)
 * - lint-staged → Run linters only on changed files (fast!)
 *
 * Together: Prevent bad code from entering Git repo 🚀
 */

// ------------------------------
// 1. Install
// ------------------------------
// Run:
/**
npm install --save-dev husky lint-staged
*/

// ------------------------------
// 2. Enable Git hooks
// ------------------------------
// Add Husky setup:
/**
npx husky install
*/

// Add to package.json (so after install, hooks auto-enabled):
/**
"scripts": {
  "prepare": "husky install"
}
*/

// ------------------------------
// 3. Add pre-commit hook
// ------------------------------
// Command:
/**
npx husky add .husky/pre-commit "npx lint-staged"
git add .husky/pre-commit
*/

// ------------------------------
// 4. Configure lint-staged
// ------------------------------
// package.json:
/**
"lint-staged": {
  "*.js": ["eslint --fix", "prettier --write"],
  "*.css": ["prettier --write"],
  "*.md": ["prettier --write"]
}
*/

// Or use lint-staged.config.js:
/**
export default {
  "*.js": ["eslint --fix", "prettier --write"],
  "*.css": ["prettier --write"],
  "*.md": ["prettier --write"],
};
*/

// ------------------------------
// 5. How it works
// ------------------------------
// - When you run `git commit -m "msg"`
// - Husky triggers → runs "npx lint-staged"
// - lint-staged only lints/stylizes changed files
// - Commit will fail if ESLint/Prettier errors exist
// - Keeps codebase clean, consistent ✨

// ------------------------------
// 6. Bonus (pre-push hook)
// ------------------------------
// Example: run tests before push
/**
npx husky add .husky/pre-push "npm test"
*/
