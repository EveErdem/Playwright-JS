import { test, expect } from '@playwright/test';
const { chromium } = require('@playwright/test');
test('test', async ({ page }) => {
    // Go to https://playwright.dev/
    await page.goto('https://playwright.dev/');
    // Go to https://www.amazon.com/
    await page.goto('https://www.amazon.com/');
    // Select search-alias=stripbooks-intl-ship
    await page.locator('select[name="url"]').selectOption('search-alias=stripbooks-intl-ship');
    // Click [aria-label="Search"]
    await page.locator('[aria-label="Search"]').click();
    // Fill [aria-label="Search"]
    await page.locator('[aria-label="Search"]').fill('java');
    // Click input:has-text("Go")
    await page.locator('input:has-text("Go")').click();
    // await expect(page).toHaveURL('https://www.amazon.com/s?k=java&i=stripbooks-intl-ship&crid=26SVKSHIO3E0Y&sprefix=java%2Cstripbooks-intl-ship%2C228&ref=nb_sb_noss_1');
    // Click img[alt="Effective Java"]
    await page.locator('img[alt="Effective Java"]').click();
    await expect(page).toHaveURL('https://www.amazon.com/Effective-Java-Joshua-Bloch/dp/0134685997/ref=sr_1_2?crid=26SVKSHIO3E0Y&keywords=java&qid=1665074003&qu=eyJxc2MiOiI1Ljk5IiwicXNhIjoiNS44MCIsInFzcCI6IjUuOTAifQ%3D%3D&s=books&sprefix=java%2Cstripbooks-intl-ship%2C228&sr=1-2');
    // Click #merchant-info >> text=Ships from and sold by Amazon.com.
    await page.locator('#merchant-info >> text=Ships from and sold by Amazon.com.').click();
    // Click #alternativeOfferEligibilityMessaging_263333_feature_div >> text=Available at a lower price from other sellers that may not offer free Prime ship
    await page.locator('#alternativeOfferEligibilityMessaging_263333_feature_div >> text=Available at a lower price from other sellers that may not offer free Prime ship').click();
    await expect(page).toHaveURL('https://www.amazon.com/cart/smart-wagon?newItems=34c058fb-4c4e-497f-b29f-c01956650c98,1');
    // Click text=Added to Cart
    await page.locator('text=Added to Cart').click();
    // Click #sw-atc-details-single-container
    await page.locator('#sw-atc-details-single-container').click();
});