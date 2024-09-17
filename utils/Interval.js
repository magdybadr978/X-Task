// scheduler.js
import schedule from "node-schedule";
import { scrapeTwitter } from "./Scraper.js";

export function startScraper(accounts, stockSymbol, interval) {
  // Schedule the scraper to run every X minutes using a cron-like schedule
  schedule.scheduleJob(`*/${interval} * * * *`, async () => {
    console.log(`Starting scraping  ${stockSymbol}...`);

    // Loop through each Twitter account and scrape it for stock symbol mentions
    for (let account of accounts) {
      const mentionCount = await scrapeTwitter(account, stockSymbol);
      console.log(
        `'${stockSymbol}' was mentioned '${mentionCount}' times on @${account} in the last '${interval}' minutes.`
      );
    }
  });
}


// * * * * * 
// | | | | |
// | | | | └── Day of the week (0 - 7) (0 or 7 is Sunday)
// | | | └──── Month (1 - 12)
// | | └────── Day of the month (1 - 31)
// | └──────── Hour (0 - 23)
// └────────── Minute (0 - 59)

