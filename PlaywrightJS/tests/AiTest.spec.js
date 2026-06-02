const { test, expect } = require("@playwright/test");
const { ai } = require("@zerostep/playwright");

test('Test Ai', async ({ page }) => {
    const aiArgs = { page, test };
    await page.goto("https://www.google.com/");
    await ai("search the selenium documention and click the first dropdown", aiArgs);
    await page.pause();
});



