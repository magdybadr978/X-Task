// index.js

import { startScraper } from "./utils/Interval.js";

// Input Data
const twitterAccounts = [
  "Mr_Derivatives",
  "warrior_0719",
  "allstarcharts",
  "yuriymatso",
  "TriggerTrades",
  "AdamMancini4",
  "CordovaTrades",
  "Barchart",
  "RoyLMattox",
];
const stockSymbol = "$TSLA"; // Example stock symbol to look for
const intervalInMinutes = 15; // Scraping interval (e.g., every 15 minutes)

// Start the scheduled scraping sessions
startScraper(twitterAccounts, stockSymbol, intervalInMinutes);
