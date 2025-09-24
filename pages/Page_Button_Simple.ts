import { expect, Locator, Page } from '@playwright/test';

export class PageButtonSimple {
  baseURL: string = 'https://www.qa-practice.com/elements/button/simple';
  private page: Page;
  readonly buttonLocator: Locator;
  readonly responseLocator: Locator;

  constructor(page: Page) {
    this.page = page;
    this.buttonLocator = page.locator('#submit-id-submit');
    this.responseLocator = page.locator('#result-text');
  }

  //Методы для тестов

  async OpenURL() {
    await this.page.goto(this.baseURL);
    await this.buttonLocator.waitFor({ timeout: 10000 });
  }

  async ValidateButtonLabel(labelText: string) {
    await expect(this.buttonLocator).toHaveText(labelText);
  }

  async ClickButton() {
    await this.buttonLocator.click();
  }

  async ValidateResponse(responseText: string) {
    await expect(this.responseLocator).toHaveText(responseText);
  }
}
