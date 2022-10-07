import { test, expect } from '@playwright/test';
const { chromium } = require('@playwright/test');

test('tradylinn', async () => {
    const browser = await chromium.launch({
        headless: false
    });
    const context = await browser.newContext();

    // Open new page
    const page = await context.newPage();

    // Go to about:blank

    // Go to https://tradylinn.com/
    await page.goto('https://tradylinn.com/');

    // Click text=Sign In
    await page.locator('text=Sign In').click();
    await page.waitForURL('https://tradylinn.com/my-account-2/');

    // Click text=Username or email address * Password * Remember me Lost your password? Sign In >> input[name="username"]
    await page.locator('text=Username or email address * Password * Remember me Lost your password? Sign In >> input[name="username"]').click();

    // Click #signin p:has-text("Password *")
    await page.locator('#signin p:has-text("Password *")').click();

    // Click .woocommerce
    await page.locator('.woocommerce').click();

    // Click button:has-text("Sign In")
    await page.locator('button:has-text("Sign In")').click();

    // Click text=Username or email address * Password * Remember me Lost your password? Sign In >> input[name="username"]
    await page.locator('text=Username or email address * Password * Remember me Lost your password? Sign In >> input[name="username"]').click();

    // Fill text=Username or email address * Password * Remember me Lost your password? Sign In >> input[name="username"]
    await page.locator('text=Username or email address * Password * Remember me Lost your password? Sign In >> input[name="username"]').fill('la.crymosa321@gmail.com');

    // Click text=Username or email address * Password * Remember me Lost your password? Sign In >> input[name="password"]
    await page.locator('text=Username or email address * Password * Remember me Lost your password? Sign In >> input[name="password"]').click();

    // Fill text=Username or email address * Password * Remember me Lost your password? Sign In >> input[name="password"]
    await page.locator('text=Username or email address * Password * Remember me Lost your password? Sign In >> input[name="password"]').fill('xbc7fQ2AMBC2Kne');

    // Go to https://tradylinn.com/store-manager/
    await page.goto('https://tradylinn.com/store-manager/');

    // Go to https://tradylinn.com/my-account-2/
    await page.goto('https://tradylinn.com/my-account-2/');

    // Go to https://tradylinn.com/store-manager/
    await page.goto('https://tradylinn.com/store-manager/');

    // Click span:has-text("Products")
    await page.locator('span:has-text("Products")').click();
    await page.waitForURL('https://tradylinn.com/store-manager/products/');

    // 0× click
    await page.locator('text=All (1) | Published (1) | Draft (0) | Pending (0) | Archived (0) Products Export').click();

    // Click text=hasortman120PublishedIn stock–Categories: Fashion, TrendingProduct brands: team3 >> img
    await page.locator('text=hasortman120PublishedIn stock–Categories: Fashion, TrendingProduct brands: team3 >> img').click();
    await page.waitForURL('https://tradylinn.com/store-manager/products/');

    // 0× click
    await page.locator('text=Products My Store 1 0 All (1) | Published (1) | Draft (0) | Pending (0) | Archiv').click();

    // Click #add_new_product_dashboard >> text=Add New
    await page.locator('#add_new_product_dashboard >> text=Add New').click();
    await page.waitForURL('https://tradylinn.com/store-manager/products-manage/');

    // 0× click
    await page.locator('select[name="product_type"]').click();

    // Select variable
    await page.locator('select[name="product_type"]').selectOption('variable');

    // Click [placeholder="Product Title"]
    await page.locator('[placeholder="Product Title"]').click();

    // Click [placeholder="Product Title"]
    await page.locator('[placeholder="Product Title"]').click();

    // Fill [placeholder="Product Title"]
    await page.locator('[placeholder="Product Title"]').fill('hasortman');

    // Click p
    await page.frameLocator('#excerpt_ifr').locator('p').click();

    // Click p
    await page.frameLocator('#description_ifr').locator('p').click();

    // Check li:nth-child(5) > .wcfm-checkbox >> nth=0
    await page.locator('li:nth-child(5) > .wcfm-checkbox').first().check();

    // Check #product_brand >> text=Şalvar Dünyası >> input[name="product_custom_taxonomies\[product_brand\]\[\]"]
    await page.locator('#product_brand >> text=Şalvar Dünyası >> input[name="product_custom_taxonomies\\[product_brand\\]\\[\\]"]').check();

    // Click #featured_img_display
    await page.locator('#featured_img_display').click();

    // Click text=Select Files
    await page.locator('text=Select Files').click();

    // Upload hasortman.jpg
    await page.locator('text=Select Files').setInputFiles('hasortman.jpg');

    // Click div[role="document"] >> text=Select >> nth=3
    await page.locator('div[role="document"] >> text=Select').nth(3).click();

    // Select simple
    await page.locator('select[name="product_type"]').selectOption('simple');

    // Check input[name="is_virtual"]
    await page.locator('input[name="is_virtual"]').check();

    // Check input[name="is_downloadable"]
    await page.locator('input[name="is_downloadable"]').check();

    // Click input[name="regular_price"]
    await page.locator('input[name="regular_price"]').click();

    // Fill input[name="regular_price"]
    await page.locator('input[name="regular_price"]').fill('120');

    // Click input[name="sale_price"]
    await page.locator('input[name="sale_price"]').click();

    // Fill input[name="sale_price"]
    await page.locator('input[name="sale_price"]').fill('100');

    // Click #gallery_img_gimage_0_display
    await page.locator('#gallery_img_gimage_0_display').click();

    // Click [aria-label="hasortman"] >> nth=1
    await page.locator('[aria-label="hasortman"]').nth(1).click();

    // Click text=Add to Gallery >> nth=2
    await page.locator('text=Add to Gallery').nth(2).click();

    // Click input[name="sku"]
    await page.locator('input[name="sku"]').click();

    // Fill input[name="sku"]
    await page.locator('input[name="sku"]').fill('120');

    // Check input[name="manage_stock"]
    await page.locator('input[name="manage_stock"]').check();

    // Click input[name="stock_qty"]
    await page.locator('input[name="stock_qty"]').click();

    // Fill input[name="stock_qty"]
    await page.locator('input[name="stock_qty"]').fill('100');

    // Select yes
    await page.locator('select[name="backorders"]').selectOption('yes');

    // Click text=SKUSKUManage Stock?Manage Stock?Stock QtyStock QtyAllow Backorders?Allow Backord
    await page.locator('text=SKUSKUManage Stock?Manage Stock?Stock QtyStock QtyAllow Backorders?Allow Backord').click();

    // Click #wcfm_products_manage_form div:has-text("Inventory SKUSKUManage Stock?Manage Stock?Stock QtyStock QtyAllow Backorders?All") >> nth=0
    await page.locator('#wcfm_products_manage_form div:has-text("Inventory SKUSKUManage Stock?Manage Stock?Stock QtyStock QtyAllow Backorders?All")').first().click();

    // Uncheck input[name="manage_stock"]
    await page.locator('input[name="manage_stock"]').uncheck();

    // Check input[name="sold_individually"]
    await page.locator('input[name="sold_individually"]').check();

    // Click text=Submit
    await page.locator('text=Submit').click();

    // ---------------------
    await context.close();
    await browser.close();
});