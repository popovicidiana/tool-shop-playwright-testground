import { test, expect } from "@playwright/test";

test(" Edit the user profile details", async ({ page }) => {
  await page.goto('https://practicesoftwaretesting.com/');
  await page.getByTestId('nav-sign-in').click();
  await page.getByTestId('email').click();
  await page.getByTestId('email').fill('popovicidiana_1@yahoo.com');
  await page.getByTestId('email').press('Tab');
  await page.getByTestId('password').fill('Popovici10.');
  await page.getByTestId('login-submit').click();

  //Edit the first and last name and phone
  await page.getByTestId('nav-profile').click();
  await page.getByTestId('first-name').click();
  await page.getByTestId('first-name').fill('Diana');
  await page.getByTestId('last-name').click();
  await page.getByTestId('last-name').fill('Popovici');
  await page.getByTestId('phone').click();
  await page.getByTestId('phone').fill('0745988594');
  await page.getByTestId('update-profile-submit').click();
  await page.getByText('Your profile is successfully').click();

  //Check that the first and last name is changed in the header
  await page.getByTestId('nav-menu').click();
  await expect(page.getByTestId("nav-menu")).toContainText("Diana Popovici");
  
});