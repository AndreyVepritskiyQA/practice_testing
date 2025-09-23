import { Page } from '@playwright/test';

export class BasePage {
  public page: Page;
  public url: string = '';

  constructor(page: Page) {
    this.page = page;
  }

  async openURL() {
    await this.page.goto(this.url);
  }
}
