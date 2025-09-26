import { expect, Locator, Page } from '@playwright/test';

export class PageInputString {
  //Класс, который определяет локаторы страницы и доступные методы для тестов (с реализацией внутри класса)
  private baseURL: string = 'https://www.qa-practice.com/elements/input/simple';
  private page: Page;
  readonly textInput: Locator;
  readonly successString: Locator;
  readonly errorString: Locator;

  constructor(page: Page) {
    this.page = page;
    this.textInput = page.getByRole('textbox', { name: 'text_string' });
    this.successString = page.locator('#result-text');
    this.errorString = page.locator('#error_1_id_text_string');
  }

  //Методы для тестов

  async openURL() {
    await this.page.goto(this.baseURL);
    await this.textInput.waitFor({ timeout: 10000 });
  }

  async fillForm(enterText: string) {
    await this.textInput.fill(enterText);
    await this.textInput.press('Enter');
  }

  async validationInputTrue(enterText: string) {
    await expect(this.successString).toHaveText(enterText);
  }

  async validationInputError(errorMessage: string) {
    await expect(this.errorString).toHaveText(errorMessage);
  }
}
