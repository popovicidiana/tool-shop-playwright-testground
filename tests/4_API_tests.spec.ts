import { test, expect } from "@playwright/test";


test("GET /products", async ({ request }) => {
  const apiUrl = "https://api.practicesoftwaretesting.com";
  const response = await request.get(apiUrl + "/products");

  //HTTP status
  expect(response.status()).toBe(200);
  //Parse response JSON
  const body = await response.json();
  //Check that it returned 9 products in the data list
  expect(body.data.length).toBe(9);
  //Check that the total number of products in system = 53
  expect(body.total).toBe(53);
});

test("POST request with login data ", async ({ request }) => {
  const apiUrl = "https://api.practicesoftwaretesting.com";
  const response = await request.post(apiUrl + "/users/login", {
    data: {
      email: "customer@practicesoftwaretesting.com",
      password: "welcome01",
    },
  });

  expect(response.status()).toBe(200);
  const body = await response.json();
  //Ensures the API returned a valid login token
  expect(body.access_token).toBeTruthy();
});
