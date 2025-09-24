import { test, expect } from '@playwright/test';
import { StringInputPage } from '../pages/Page_String_Input';

test.describe('Тестирование поля ввода текста', () => {
  let basicPage: StringInputPage;
  test.beforeEach(async ({ page }) => {
    basicPage = new StringInputPage(page); //Новую страницу создаем перед каждым тестом
    await basicPage.openURL(); //Открывает вкладку перед каждым тестом
  });
  test.describe('Позитивные тестовые сценарии', () => {
    test('Ввод валидных данных в поле ввода', async () => {
      let validText: string = 'Test1ng-_'; //Указываем текст для проверки
      await basicPage.fillForm(validText);
      await basicPage.validationInputTrue(validText);
    });

    test('Ввод минимального валидного значения в поле ввода', async () => {
      let validText: string = 'T1';
      await basicPage.fillForm(validText);
      await basicPage.validationInputTrue(validText);
    });

    test('Ввод максимально допустимого валидного значения в поле ввода', async () => {
      let validText: string = 'A'.repeat(25);
      await basicPage.fillForm(validText);
      await basicPage.validationInputTrue(validText);
    });
  });

  test.describe('Негативные тестовые сценарии', () => {
    test('Значение меньше допустимого минимума', async () => {
      let invalidText: string = '1';
      await basicPage.fillForm(invalidText);
      await basicPage.validationInputError('Please enter 2 or more characters');
    });

    test('Значение больше допустимого максимума', async () => {
      let invalidText: string = 'A'.repeat(26);
      await basicPage.fillForm(invalidText);
      await basicPage.validationInputError('Please enter no more than 25 characters');
    });

    test('Ввод невалидных символов', async () => {
      let invalidText: string = '!@#';
      await basicPage.fillForm(invalidText);
      await basicPage.validationInputError(
        'Enter a valid string consisting of letters, numbers, underscores or hyphens.',
      );
    });
  });
});
