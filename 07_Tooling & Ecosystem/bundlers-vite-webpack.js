/**
 * 📘 Bundlers: Vite (preferred) & Webpack basics
 * Author: Ritik Kumar
 * Date: 13 Feb 2025
 *
 * - Bundlers combine JS, CSS, images, etc. into optimized output.
 * - Vite → next-gen, fast dev server + build on Rollup.
 * - Webpack → classic, powerful but heavier.
 */

// ------------------------------
// 1. Vite (Modern Choice)
// ------------------------------
// Install:
// $ npm create vite@latest my-app
// $ cd my-app && npm install && npm run dev

// Features:
// - Instant dev server (ESM-based, no heavy bundle during dev).
// - Hot Module Replacement (HMR) out of the box.
// - Production build uses Rollup under the hood.
// - Built-in TS, React, Vue, Svelte templates.

// vite.config.js example:
import { defineConfig } from "vite";
export default defineConfig({
  server: {
    port: 3000,
  },
  build: {
    outDir: "dist",
  },
});

// Run scripts in package.json:
/**
{
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview"
  }
}
 */

// ------------------------------
// 2. Webpack (Classic)
// ------------------------------
// Install:
// $ npm install -D webpack webpack-cli webpack-dev-server

// Basic webpack.config.js
const path = require("path");

module.exports = {
  entry: "./src/index.js", // starting point
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  mode: "development", // or "production"
  module: {
    rules: [
      {
        test: /\.css$/, // allow CSS imports
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: "babel-loader", // for ES6+
      },
    ],
  },
  devServer: {
    static: "./dist",
    port: 3000,
    hot: true,
  },
};

// Run scripts:
/**
{
  "scripts": {
    "start": "webpack serve --open",
    "build": "webpack --mode production"
  }
}
 */

// ------------------------------
// 3. Key Differences
// ------------------------------
// Vite:
// - Super fast dev server (native ESM).
// - Rollup optimized builds.
// - Ideal for modern frameworks (React, Vue).
//
// Webpack:
// - Battle-tested, very configurable.
// - Supports loaders/plugins ecosystem.
// - Heavier setup, slower dev builds.
