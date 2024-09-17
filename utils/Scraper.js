import puppeteer from "puppeteer";
//Web scraping is one of the most efficient and useful ways to extract data from a website
export const scrapeTwitter = async (account, stockSymbol) => {
  //to launch new browser
  // headless: false => to open browser with UI
  const browser = await puppeteer.launch({ headless: false });
  // newPage : method to open new tap in browser
  const page = await browser.newPage();

  try {
    // goto : puppeteer method typing URL in web browser bar
    // waitUntil : used for dynamic pages to know every thing is loaded
    await page.goto(`https://twitter.com/${account}`, {
      waitUntil: "networkidle2",
      timeout: 60000,
    });

    //On Twitter, each tweet is typically wrapped in an <article> element,
    // so this selector is looking for tweets or posts on the page.
    await page.waitForSelector("article");

    //page.evaluate() allows you to run JavaScript code in the
    //context of the page you are currently on.
    const tweets = await page.evaluate(() =>
      //This method returns a NodeList of all elements that match the given CSS selector.
      Array.from(document.querySelectorAll("article div[lang]")).map((el) => {
        return el.textContent;
      })
    );

    // Count occurrences of the stock symbol in the tweets
    const mentionCount = tweets.reduce(
      (count, tweet) => count + (tweet.includes(stockSymbol) ? 1 : 0),
      0
    );

    return mentionCount;
  } catch (error) {
    console.error(`Error in @${account}:`, error); // Handle errors
    return 0;
  } finally {
    await browser.close();
  }
};
