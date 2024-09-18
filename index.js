// index.js

import { startScraper } from "./utils/Interval.js";

// Input Data
const twitterAccounts = [
  "https://twitter.com/warrior_0719",
  "https://twitter.com/allstarcharts",
  "https://twitter.com/yuriymatso",
  "https://twitter.com/TriggerTrades",
  "https://twitter.com/AdamMancini4",
  "https://twitter.com/CordovaTrades",
  "https://twitter.com/Barchart",
  "https://twitter.com/RoyLMattox"
];

const arr=twitterAccounts.map((ele)=> ele.split("https://twitter.com/")[1])
const stockSymbol = "$TSLA"; // Example stock symbol to look for
const intervalInMinutes = 1; // Scraping interval (e.g., every 15 minutes)

// Start the scheduled scraping sessions
startScraper(arr, stockSymbol, intervalInMinutes);
