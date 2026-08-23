const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  
  page.on('console', msg => console.log('BROWSER CONSOLE:', msg.type(), msg.text()));
  page.on('pageerror', err => console.log('BROWSER ERROR:', err.message));
  
  await page.goto('http://localhost:8000/');
  console.log('Page loaded');
  
  console.log('Clicking Expert View button');
  await page.click('#btn-astrologer');
  
  await page.waitForTimeout(1000);
  
  await browser.close();
})();
