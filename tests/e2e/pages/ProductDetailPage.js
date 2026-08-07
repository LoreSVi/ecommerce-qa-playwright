import { BasePage } from "./BasePage.js";

export class ProductDetailPage extends BasePage {
  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    super(page);
    this.addToCartButton = page.getByRole("button", {
      name: /agregar al carrito/i,
    });
    this.openCartButton = page.getByRole("button", { name: /ir al carrito/i });
  }

  async addToCart() {
    await this.waitForElement(this.addToCartButton);
    await this.addToCartButton.click();
  }

  async openCart() {
    await this.waitForElement(this.openCartButton);
    await this.openCartButton.click();
  }
}
