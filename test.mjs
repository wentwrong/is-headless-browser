import http from "http";
import fs from "fs";
import puppeteer from "puppeteer";

const IS_DEBUG = !!process.env.DEBUG;

const server = http
  .createServer((req, res) => {
    if (req.url === "/") {
      fs.readFile("./example.html", "utf-8", (err, html) => {
        if (!err) {
          res.writeHead(200, { "Content-Type": "text/html" });
          res.end(html);
        }
      });
    } else if (req.url === "/dist/index.min.js") {
      fs.readFile("./dist/index.min.js", "utf-8", (err, html) => {
        if (!err) {
          res.writeHead(200, { "Content-Type": "text/javascript" });
          res.end(html);
        }
      });
    } else res.destroy();
  })
  .listen(3000, () => {
    console.log(`Server running at http://localhost:3000`);

    puppeteer.launch({ headless: !IS_DEBUG }).then(async (browser) => {
      console.log("🏃 Running Puppeteer...");

      const page = await browser.newPage();
      await page.goto(`http://localhost:3000`);
      const text = await page.evaluate(() => {
        const element = document.getElementById("verdict");
        return element ? element.textContent : null;
      });
      !IS_DEBUG && (await browser.close());
      !IS_DEBUG && server.close();

      if (/headless/.test(text)) {
        console.log("✅ Puppeteer is detected!");
      } else {
        console.error("❌ Puppeteer is not detected!");
        !IS_DEBUG && process.exit(1);
      }
    });
  });
