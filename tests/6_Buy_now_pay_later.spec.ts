import { test, expect } from "@playwright/test";

test.describe("Checkout challenge", () => {
  test.use({ storageState: ".auth/customer01.json" });

  test.beforeEach(async ({ page }) => {
    await page.goto("https://practicesoftwaretesting.com");
  });

  test("Buy a product with buy now pay later", async ({ page, headless }) => {
    await page.getByText("Claw Hammer with Shock Reduction Grip").click();
    await page.getByTestId("add-to-cart").click();
    await expect(page.getByTestId("cart-quantity")).toHaveText("1");
    await page.getByTestId("nav-cart").click();
    await page.getByTestId("proceed-1").click();
    await page.getByTestId("proceed-2").click();

   await page.getByPlaceholder("Street *").fill("123 Testing Way");
   await page.getByPlaceholder("City *").fill("Sacramento");
   await page.getByPlaceholder("State *").fill("California");
   await page.getByPlaceholder("Country *").fill("USA");
   await page.getByPlaceholder("Your Postcode *").fill("98765");
   await page.getByTestId("proceed-3").click();


    await expect(page.getByTestId("finish")).toBeDisabled();

    await page
      .getByTestId("payment-method")
      .selectOption({ label: "Buy Now Pay Later" });

    await page
      .getByTestId("monthly_installments")
      .selectOption({ label: "6 Monthly Installments" });

    await page.getByTestId("finish").click();

    await expect(page.getByTestId('payment-success-message'))
       .toHaveText('Payment was successful');


    if (headless) {
      await test.step("visual test", async () => {
        await expect(page).toHaveScreenshot("checkout.png", {
          mask: [page.getByTitle("Practice Software Testing - Toolshop")],
        });
      });
    } else {
      console.log("Running in Headed mode, no screenshot comparison");
    }
  });
});
