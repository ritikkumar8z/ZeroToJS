/**
 * 📘 TypeScript: tsconfig.json Basics
 * Author: Ritik Kumar
 * Date: 25 Feb 2025
 *
 * - tsconfig.json → configures TypeScript compiler (tsc)
 * - Defines:
 *   - input/output paths
 *   - target JS version
 *   - module system
 *   - strictness & compiler options
 */

// ------------------------------
// 1. Basic tsconfig.json
// ------------------------------
/**
{
  "compilerOptions": {
    "target": "ES2020",             // JS version output
    "module": "ESNext",             // Module system (ESM)
    "outDir": "./dist",             // Output folder
    "rootDir": "./src",             // Source folder
    "strict": true,                 // Enable all strict type checks
    "esModuleInterop": true,        // Default import compatibility
    "forceConsistentCasingInFileNames": true, // Case-sensitive imports
    "skipLibCheck": true            // Skip type checking of node_modules
  },
  "include": ["src/**/*"],          // Files to compile
  "exclude": ["node_modules", "dist"] // Files to ignore
}
*/

// ------------------------------
// 2. Key Options Explained
// ------------------------------
/**
 * "target": ES2015 / ES2020 / ESNext → JS version emitted
 * "module": CommonJS / ESNext → module system
 * "strict": enables strict type-checking (recommended)
 * "outDir": compiled JS output folder
 * "rootDir": source TS files folder
 * "esModuleInterop": allows default import of CommonJS modules
 * "forceConsistentCasingInFileNames": avoid import mismatches
 * "skipLibCheck": skip node_modules type checks (speeds up build)
 */

// ------------------------------
// 3. Optional / Useful
// ------------------------------
/**
 * "sourceMap": true → generate .map files for debugging
 * "resolveJsonModule": true → import JSON as module
 * "noImplicitAny": true → error if type cannot be inferred
 * "noEmitOnError": true → don't emit JS if errors exist
 */

// ------------------------------
// 4. Commands
// ------------------------------
/**
 * Compile TS → JS: npx tsc
 * Watch mode: npx tsc --watch
 * With custom tsconfig: npx tsc -p tsconfig.json
 */
