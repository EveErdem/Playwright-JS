
/*
2.Using ChromeDriver, Go to youtube and verify if page title is “youtube”, If not, print the correct title.
3.Verify if the page URL contains youtube if not, print the right url.
4.Then Navigate to https://www.amazon.com/
5.Navigate back to youtube
6.Refresh the page
7.Navigate forward to amazon
8.Maximize the window
9.Then verify if page title includes “Amazon”, If not, print the correct title.
10.Verify if the page URL is https://www.amazon.com/, if not print the correct url
11.Quit the browser
*/
import { test, expect } from '@playwright/test';
const { chromium } = require('@playwright/test');

test('utube-amazon', async () => {
    const browser = await chromium.launch({
        headless: false
    });
    const context = await browser.newContext();

    const page = await context.newPage();

    await page.goto('https://www.google.com/');

    await page.getByRole('combobox', { name: 'Ara' }).click();

    await page.getByRole('combobox', { name: 'Ara' }).fill('youtube');

    await page.getByRole('option', { name: 'YouTube' }).click();
    // await page.waitForURL('https://www.google.com/search?q=youtube&source=hp&ei=TrVCY8qKKKK-xc8P-uyouAU&iflsig=AJiK0e8AAAAAY0LDXmlBHUbqApF2ETR_0T3sYrtHdEWt&gs_ssp=eJzj4tTP1TewzEouK1ZgNGB0YPBir8wvLSlNSgUAUQAG7g&oq=youtube&gs_lcp=Cgdnd3Mtd2l6EAEYADIRCC4QgAQQsQMQgwEQxwEQ0QMyBQgAEIAEMggIABCABBCxAzILCAAQgAQQsQMQgwEyCwgAEIAEELEDEIMBMgsIABCABBCxAxCDATILCAAQgAQQsQMQgwEyCAgAEIAEELEDMgsIABCABBCxAxCDATIECAAQAzoLCC4QsQMQgwEQ1AI6DgguEIAEELEDEMcBENEDUO0LWOgTYIkmaAFwAHgAgAGKAYgB-waSAQMwLjeYAQCgAQGwAQA&sclient=gws-wiz');

    await page.getByRole('link', { name: 'YouTube https://www.youtube.com › ...' }).click();
    // await page.waitForURL('https://www.youtube.com/');

    await page.getByRole('link', { name: 'YouTube Ana Sayfası' }).click();
    //  await page.waitForURL('https://www.youtube.com/');

    await page.goto('https://www.amazon.com/');

    await page.goBack('https://www.youtube.com/');
    await page.reload([options]);

    await page.goForward('https://www.amazon.com/');

    await page.getByRole('link', { name: 'Amazon' }).click();
    await page.getByTitle();
    //await page.waitForURL('https://www.amazon.com/ref=nav_logo');

    // ---------------------
    await context.close();
    await browser.close();
});