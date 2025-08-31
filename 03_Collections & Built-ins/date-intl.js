/**
 * 📘 JavaScript Date & Intl API
 * Author: Ritik Kumar
 * Date: 18 Jan 2025
 *
 * 👉 Working with dates, times, formatting & localization.
 */

// ------------------------------
// 1. Creating Dates
// ------------------------------
const now = new Date();
console.log("Now ->", now);

const fromString = new Date("2025-01-18T10:00:00");
console.log("From string ->", fromString);

const fromValues = new Date(2025, 0, 18, 10, 30); // (year, monthIndex, day, hour, minute)
console.log("From values ->", fromValues);

// ------------------------------
// 2. Date Methods
// ------------------------------
console.log("Year ->", now.getFullYear());
console.log("Month ->", now.getMonth() + 1); // 0-based
console.log("Day ->", now.getDate());
console.log("Weekday ->", now.getDay()); // 0 = Sunday
console.log("Hours ->", now.getHours());
console.log("Timestamp (ms) ->", now.getTime());

// Modify
let d = new Date();
d.setFullYear(2030);
console.log("Modified year ->", d);

// ------------------------------
// 3. Date Formatting (manual)
// ------------------------------
console.log(
  `Formatted: ${now.getDate()}/${now.getMonth() + 1}/${now.getFullYear()}`
);

// ------------------------------
// 4. Intl.DateTimeFormat
// ------------------------------
const formatter = new Intl.DateTimeFormat("en-US");
console.log("US format ->", formatter.format(now));

const formatterIN = new Intl.DateTimeFormat("hi-IN", {
  dateStyle: "full",
  timeStyle: "long",
});
console.log("India format ->", formatterIN.format(now));

// ------------------------------
// 5. Intl.NumberFormat
// ------------------------------
const price = 1234567.89;

console.log("US currency ->", new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
}).format(price));

console.log("India currency ->", new Intl.NumberFormat("hi-IN", {
  style: "currency",
  currency: "INR",
}).format(price));

// ------------------------------
// 6. Intl.RelativeTimeFormat
// ------------------------------
const rtf = new Intl.RelativeTimeFormat("en", { numeric: "auto" });
console.log("Relative time ->", rtf.format(-1, "day")); // yesterday
console.log("Relative time ->", rtf.format(1, "day"));  // tomorrow

/**
 * 🎯 Key Takeaways:
 * - Date object handles timestamps & components.
 * - Intl APIs help with locale-aware formatting (date, time, currency, numbers).
 * - RelativeTimeFormat gives natural phrases like "yesterday", "tomorrow".
 */
