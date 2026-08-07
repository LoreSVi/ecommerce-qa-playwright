import { expect } from "@playwright/test";

export class BasePage {
  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;
  }

  async goto(path = "/") {
    await this.page.goto(path);
    await this.page.waitForLoadState("domcontentloaded");
  }

  async waitForElement(locator) {
    await locator.waitFor({ state: "visible" });
  }

  async expectUrl(regex) {
    await expect(this.page).toHaveURL(regex);
  }
}
