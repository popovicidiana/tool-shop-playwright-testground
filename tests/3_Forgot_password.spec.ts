import { test, expect } from "@playwright/test";

test(" Forgot password for non-existent account", async ({ page }) => {

  await page.goto('https://practicesoftwaretesting.com/');
  await page.getByTestId('nav-sign-in').click();
  await page.getByTestId('forgot-password-link').click();
  await page.getByTestId('email').click();
  // Try a non existent email to check if it works
  await page.getByTestId('email').fill('dianadiana@yahoo.com');
  await page.getByTestId('forgot-password-submit').click();
  // It's not working
  await expect(page.getByText('The selected email is invalid'))
  .toBeVisible();
});


test(" Forgot password for existent account", async ({ page }) => {

  await page.goto('https://practicesoftwaretesting.com/');
  await page.getByTestId('nav-sign-in').click();
  await page.getByTestId('forgot-password-link').click();
  // Try a e-mail that is registered
  await page.getByTestId('email').click();
  await page.getByTestId('email').fill('popovicidiana@yahoo.com');
  await page.getByTestId('forgot-password-submit').click();
  // It works
  await expect(page.getByText('Your password is successfully'))
  .toBeVisible();
});