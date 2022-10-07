const { test, expect } = require('@playwright/test')
/* const { hello, helloworld } = require('./demo/function')
console.log(hello()); */
test('bakalim', async ({ page }) => {
    await page.goto('https://google.com')
    await expect(page).toHaveTitle('Google')

})