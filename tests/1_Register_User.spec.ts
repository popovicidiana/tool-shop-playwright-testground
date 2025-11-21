import { test, expect } from "@playwright/test";

// Register a new account
test(" Register", async ({ page }) => {

  await page.goto("https://practicesoftwaretesting.com/");
  await page.getByTestId('nav-sign-in').click();
  await page.getByTestId('register-link').click();
  await page.getByTestId('first-name').click();
  await page.getByTestId('first-name').fill('Ana');
  await page.getByTestId('last-name').click();
  await page.getByTestId('last-name').fill('Maria');
  await page.getByTestId('dob').click();
  await page.getByTestId('dob').fill('1987-11-10');
  await page.getByTestId('street').click();
  await page.getByTestId('street').fill('Nicolina');
  await page.getByTestId('postal_code').click();
  await page.getByTestId('postal_code').fill('700515');
  await page.getByTestId('city').click();
  await page.getByTestId('city').fill('Iasi');
  await page.getByTestId('state').click();
  await page.getByTestId('state').fill('Iasi');
  await page.getByTestId('country').selectOption('RO');
  await page.getByTestId('phone').click();
  await page.getByTestId('phone').fill('0746668593');
  await page.getByTestId('email').click();
  await page.getByTestId('email').fill('anamaria@yahoo.com');
  await page.getByTestId('password').click();
  await page.getByTestId('password').fill('bunaZiua55.');
  await page.getByRole('button').filter({ hasText: /^$/ }).click();
  await page.getByTestId('register-submit').click();
  
  await page.getByTestId('email').fill('anamaria@yahoo.com');
  await page.getByTestId('password').fill('bunaZiua55.');
  await page.getByTestId('login-submit').click();

});