import { expect, test } from '@playwright/test'

test('example test', async ({ page }) => {
  const buttonTypes = [
    'primary',
    'secondary',
    'large',
    'small',
  ]
  for (const buttonType of buttonTypes) {
    await page.goto(`http://localhost:6006/iframe.html?viewMode=docs&id=example-button--${buttonType}`)
    await expect(page).toHaveScreenshot()
  }
})
