import { BasePage } from "./BasePage.js";

export class CartPage extends BasePage {
  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    super(page);
    this.checkoutButton = page.getByRole("button", {
      name: /finalizar compra/i,
    });
  }

  async completeCheckout() {
    await this.waitForElement(this.checkoutButton);
    await this.checkoutButton.click();
  }
}
