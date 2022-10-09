
import { test, expect } from '@playwright/test';
const { chromium } = require('@playwright/test');


test('amazon', async () => {
    const browser = await chromium.launch({
        headless: false
    });
    const context = await browser.newContext();

    const page = await context.newPage();

    await page.goto('https://www.amazon.com/');

    await page.getByRole('textbox', { name: 'Search' }).click();

    await page.getByRole('textbox', { name: 'Search' }).fill('java');

    await page.getByRole('textbox', { name: 'Search' }).press('Enter');
    await page.waitForNavigation();
    // await page.waitForURL('https://www.amazon.com/s?k=java&i=stripbooks&crid=22LWJMP7QXKI2&sprefix=java%2Cstripbooks%2C274&ref=nb_sb_noss_1');

    await page.getByRole('heading', { name: 'Think Java: How to Think Like a Computer Scientist' }).first().click();

    await page.getByRole('link', { name: 'Think Java: How to Think Like a Computer Scientist' }).first().click();
    // await page.waitForURL('https://www.amazon.com/Think-Java-Like-Computer-Scientist/dp/1492072508/ref=sr_1_2_sspa?crid=22LWJMP7QXKI2&keywords=java&qid=1665262680&qu=eyJxc2MiOiI1Ljk5IiwicXNhIjoiNS44MCIsInFzcCI6IjUuOTAifQ%3D%3D&s=books&sprefix=java%2Cstripbooks%2C274&sr=1-2-spons&psc=1&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUExUlNIWkZIM1BYMjImZW5jcnlwdGVkSWQ9QTA4MDE4MzExWUFUU1FIQjZFSzc0JmVuY3J5cHRlZEFkSWQ9QTAyMDMzNDAxNDRDUjlBTUpLTTQ4JndpZGdldE5hbWU9c3BfYXRmJmFjdGlvbj1jbGlja1JlZGlyZWN0JmRvTm90TG9nQ2xpY2s9dHJ1ZQ==');
    await page.waitForNavigation();
    await page.getByRole('button', { name: 'Add to Cart' }).click();
    //await page.waitForURL('https://www.amazon.com/cart/smart-wagon?newItems=c6e942e4-4a36-4849-8571-2dd340ddf358,1');
    await page.waitForNavigation();
    await page.getByText('Added to Cart').click();

    await page.getByText('Added to Cart').click({
        button: 'right'
    });

    await page.getByText('Added to Cart').click();

    // ---------------------
    await context.close();
    await browser.close();
});