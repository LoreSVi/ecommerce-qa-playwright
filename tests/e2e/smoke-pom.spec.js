import { test, expect } from "@playwright/test";
import { HomePage } from "./pages/HomePage.js";
import { ProductDetailPage } from "./pages/ProductDetailPage.js";
import { CartPage } from "./pages/CartModal.js";

test("Smoke Test completo con POM", async ({ page }) => {
  const homePage = new HomePage(page);
  const productPage = new ProductDetailPage(page);
  const cartPage = new CartPage(page);

  await homePage.goto();
  await homePage.selectFirstProduct();

  await productPage.addToCart();
  await productPage.openCart();

  await cartPage.completeCheckout();

  await expect(page).toHaveURL(/.*checkout/);
});
