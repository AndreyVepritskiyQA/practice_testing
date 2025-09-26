import { test, expect } from '@playwright/test';
import { PageInputString } from '../pages/Page_String_Input';

let basePage: PageInputString;

test.describe('Тестирование поля ввода текста', () => {
  test.beforeEach(async ({ page }) => {
    basePage = new PageInputString(page); //Новую страницу создаем перед каждым тестом
    await basePage.openURL(); //Открывает вкладку перед каждым тестом
  });
  test.describe('Позитивные тестовые сценарии', () => {
    test('Ввод валидных данных в поле ввода', async () => {
      let validText: string = 'Test1nG-_'; //Указываем текст для проверки
      await basePage.fillForm(validText);
      await basePage.validationInputTrue(validText);
    });

    test('Ввод минимального валидного значения в поле ввода', async () => {
      let validText: string = 'T1';
      await basePage.fillForm(validText);
      await basePage.validationInputTrue(validText);
    });

    test('Ввод максимально допустимого валидного значения в поле ввода', async () => {
      let validText: string = 'A'.repeat(25);
      await basePage.fillForm(validText);
      await basePage.validationInputTrue(validText);
    });

    test('Ввод валидного значения после пробелов', async () => {
      let validText: string = '     Test';
      await basePage.fillForm(validText);
      await basePage.validationInputTrue(validText);
    });
  });

  test.describe('Негативные тестовые сценарии', () => {
    test('Ввод пустого значения с использованием пробелов', async () => {
      let invalidText: string = '    ';
      await basePage.fillForm(invalidText);
      await basePage.validationInputError('This field is required.');
    });

    test('Значение меньше допустимого минимума', async () => {
      let invalidText: string = '1';
      await basePage.fillForm(invalidText);
      await basePage.validationInputError('Please enter 2 or more characters');
    });

    test('Значение больше допустимого максимума', async () => {
      let invalidText: string = 'A'.repeat(26);
      await basePage.fillForm(invalidText);
      await basePage.validationInputError('Please enter no more than 25 characters');
    });

    test('Ввод невалидных символов', async () => {
      let invalidText: string = '!@#';
      await basePage.fillForm(invalidText);
      await basePage.validationInputError(
        'Enter a valid string consisting of letters, numbers, underscores or hyphens.',
      );
    });

    test('Ввод текста с пробелом', async () => {
      let invalidText: string = 'My Test';
      await basePage.fillForm(invalidText);
      await basePage.validationInputError(
        'Enter a valid string consisting of letters, numbers, underscores or hyphens.',
      );
    });
  });
});
