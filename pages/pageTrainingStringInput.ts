import { Locator, Page } from '@playwright/test';
import { BasePage } from './BasePage';

export class pageTrainStringInput {
  //Класс, который определяет локаторы страницы и доступные методы для тестов (с реализацией внутри класса)
  private page: Page;
  readonly url: string = 'https://www.qa-practice.com/elements/input/simple';
  readonly textInput: Locator;
  readonly succesString: Locator;
  readonly responseString: Locator;

  constructor(page: Page) {
    this.page = page;
    this.textInput = page.locator('#id_text_string');
    this.succesString = page.locator('#result-text');
    this.responseString = page.locator('#error_1_id_text_string');
  }

  //Методы для тестов
}
