import { BasePage } from "./BasePage.js";

export class HomePage extends BasePage {
  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    super(page);
    this.verDetalleButtons = page.getByRole("link", { name: /ver detalle/i });
  }

  async selectFirstProduct() {
    await this.waitForElement(this.verDetalleButtons.first());
    await this.verDetalleButtons.first().click();
  }
}
