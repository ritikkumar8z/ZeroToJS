/**
 * 📘 JavaScript Security Basics
 * Author: Ritik Kumar
 * Date: 10 Feb 2025
 *
 * Covers: XSS, CSRF, CORS, CSP
 */

// ------------------------------
// 1. XSS (Cross-Site Scripting)
// ------------------------------
// Problem: Malicious JS injected into site
// Example:
const userInput = "<img src=x onerror=alert('Hacked!')>";
document.body.innerHTML = userInput; // ❌ Vulnerable

// Fix:
// - Escape/sanitize user input before rendering
// - Use textContent or libraries like DOMPurify
const safeDiv = document.createElement("div");
safeDiv.textContent = userInput; // ✅ Safe
document.body.appendChild(safeDiv);

// ------------------------------
// 2. CSRF (Cross-Site Request Forgery)
// ------------------------------
// Problem: Attacker tricks logged-in user into unwanted action
// Example: Hidden <img src="https://bank.com/transfer?amount=1000">
// Browser auto-sends cookies!

// Fix:
// - Use CSRF tokens (unique per session, validated server-side)
// - Use SameSite cookies: `Set-Cookie: session=abc; SameSite=Strict`
// - Require re-authentication for critical actions

// ------------------------------
// 3. CORS (Cross-Origin Resource Sharing)
// ------------------------------
// Problem: Browser blocks requests from other origins
// Example:
fetch("https://api.otherdomain.com/data")
  .then(r => r.json())
  .catch(err => console.error("CORS error:", err));

// Fix (server-side headers):
// Access-Control-Allow-Origin: https://yourdomain.com
// Access-Control-Allow-Methods: GET, POST, PUT
// Access-Control-Allow-Headers: Content-Type

// ------------------------------
// 4. CSP (Content Security Policy)
// ------------------------------
// Problem: Even if XSS happens, restrict what script can do.
// Example header:
// Content-Security-Policy: default-src 'self'; script-src 'self' https://cdn.example.com

// ✅ Prevents inline <script>alert(1)</script>
// ✅ Only allows scripts from trusted sources

// ------------------------------
// 5. General Security Best Practices
// ------------------------------
// - Never trust user input → validate/sanitize everywhere
// - Avoid eval(), new Function(), innerHTML
// - Use HTTPS (TLS)
// - Keep dependencies updated
// - Limit error exposure (don’t leak stack traces)
