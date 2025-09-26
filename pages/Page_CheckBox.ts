import { Page, Locator } from '@playwright/test';

export class PageCheckBox {
  private page: Page;
  readonly baseURL: string = 'https://www.qa-practice.com/elements/checkbox/single_checkbox';
  readonly locatorCheckBox: Locator;
  readonly locatorTextCheckBox: Locator;
  readonly locatorSumbitButton: Locator;
  readonly locatorResponse: Locator;

  constructor(page: Page) {
    this.page = page;
    this.locatorCheckBox = page.getByRole('checkbox', { name: 'checkbox' });
    this.locatorSumbitButton = page.getByRole('button', { name: 'submit' });
    this.locatorTextCheckBox = page.locator('label[for="id_checkbox_0"]');
    this.locatorResponse = page.locator('#result-text');
  }
}
