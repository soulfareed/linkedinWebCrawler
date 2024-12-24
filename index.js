const puppeteer = require("puppeteer");
const fs = require("fs");

const fetchPage = async (url) => {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();

  // Anti-bot measures: Set a random User-Agent
  await page.setUserAgent(
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Safari/537.36"
  );

  try {
    await page.goto(url);
    await new Promise((r) => setTimeout(r, 1000));
    const content = await page.evaluate(() => {
      const extractText = (selector) => {
        const element = document.querySelector(selector);
        return element ? element.innerText.trim() : null;
      };

      return {
        //Take unique name from each profile
        Name: extractText(
          "[data-modal='public_profile_top-card_title-modal-id']"
        ),
        JobTitle: extractText(".text-body-medium.break-words"),
        Location: extractText(
          ".text-body-small.inline.t-black--light.break-words"
        ),
        Summary: extractText("div.pv-about-section"),
      };
    });
    await browser.close();
    return content;
  } catch (error) {
    console.error(`Error fetching URL ${url}:`, error.message);
    await browser.close();
    return null;
  }
};

const crawlLinkedIn = async (urls, pageType = "profile") => {
  const extractedData = [];

  for (const url of urls) {
    console.log(`Fetching ${url}...`);
    const data = await fetchPage(url);

    if (data) {
      extractedData.push(data);
    }

    // Anti-bot measures: Random delay between requests
    await new Promise((resolve) =>
      setTimeout(resolve, Math.random() * (5000 - 2000) + 2000)
    );
  }

  return extractedData;
};

(async () => {
  const linkedinUrls = [
    "https://www.linkedin.com/in/sharmashradha/",
    // Add more URLs as needed
  ];

  const results = await crawlLinkedIn(linkedinUrls, "profile");

  // Output data in JSON format
  fs.writeFileSync("output.json", JSON.stringify(results, null, 4));
  console.log("Data saved to output.json");
})();
