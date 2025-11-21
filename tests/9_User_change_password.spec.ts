import { test, expect } from "@playwright/test";

test(" Change User password", async ({ page }) => {
  await page.goto('https://practicesoftwaretesting.com/');
  await page.getByTestId('nav-sign-in').click();
  await page.getByTestId('email').click();
  await page.getByTestId('email').fill('popovicidiana_1@yahoo.com');
  await page.getByTestId('email').press('Tab');
  await page.getByTestId('password').fill('Popovici100.');
  await page.getByTestId('login-submit').click();

  await page.getByTestId('nav-profile').click();
  await page.getByTestId('current-password').click();
  await page.getByTestId('current-password').fill('Popovici100.');

  await page.getByTestId('new-password').click();
  await page.getByTestId('new-password').fill('Popovici10.');
  await page.getByRole('button').filter({ hasText: /^$/ }).nth(1).click();
  await page.getByRole('button').nth(5).click();

  await page.getByTestId('new-password-confirm').click();
  await page.getByTestId('new-password-confirm').fill('Popovici10.');
  await page.getByRole('button').filter({ hasText: /^$/ }).nth(1).click();
  await page.getByRole('button').nth(5).click();
  
  await page.getByTestId('change-password-submit').click();

  //Login with new password
  await page.getByTestId('email').click();
  await page.getByTestId('email').fill('popovicidiana_1@yahoo.com');
  await page.getByTestId('password').click();
  await page.getByTestId('password').fill('Popovici10.');
  await page.getByTestId('login-form').locator('button').click();
  await page.getByTestId('login-submit').click();
  await page.getByTestId('nav-menu').click();
});