import { test, expect } from "@playwright/test";

// Check that there are no favorite items than add to favorites
test(" Favorite Item", async ({ page }) => {
  await page.goto('https://practicesoftwaretesting.com/');
  await page.getByTestId('nav-sign-in').click();
  await page.getByTestId('email').click();
  await page.getByTestId('email').fill('popovicidiana_1@yahoo.com');
  await page.getByTestId('password').click();
  await page.getByTestId('password').fill('Popovici10.');
  await page.getByTestId('login-submit').click();
  await page.getByTestId('login-form').locator('button').click();


  await page.getByTestId('nav-favorites').click();
  //no favorites yet
  await page.getByText('There are no favorites yet.').click();

  await page.getByTestId('nav-home').click();
  await page.getByText('Slip Joint Pliers').click();
  await page.getByTestId('add-to-favorites').click();
  await page.getByTestId('nav-home').click();
  await page.getByText('Combination Pliers').click();
  await page.getByTestId('add-to-favorites').click();

  await page.getByTestId('nav-menu').click();
  await page.getByTestId('nav-my-account').click();
  await page.getByTestId('nav-favorites').click();
  //the items we set to favorites are visible
  await page.getByRole('img', { name: 'Slip Joint Pliers' }).click();
  await page.getByRole('img', { name: 'Combination Pliers' }).click();


  //Add a product to favorites that is already favorited
  await page.getByTestId('nav-home').click();
  await page.getByText('Slip Joint Pliers').click();
  await page.getByTestId('add-to-favorites').click();
  await page.getByRole('alert', { name: 'Product already in your' }).click();

  //Delete an item from favorites
  await page.getByTestId('nav-menu').click();
  await page.getByTestId('nav-my-favorites').click();
  await page.getByTestId('delete').click();
  });

  