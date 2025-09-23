import { test, expect } from '@playwright/test';
import { pageTrainStringInput } from '../pages/pageTrainingStringInput';

test.describe('Тестирование поля ввода текста', () => {
  let basicPage: pageTrainStringInput;
  test.beforeEach(async ({ page }) => {
    basicPage = new pageTrainStringInput(page); //Новую страницу создаем перед каждым тестом
    await basicPage.openURL(); //Открывает вкладку перед каждым тестом
  });
  test.describe('Позитивные тесты', () => {
    test('Ввод валидных данных в поле ввода', async () => {
      let validText: string = 'Test1ng-_'; //Указываем текст для проверки
      await basicPage.fillForm(validText);
      await basicPage.validationInputTrue(validText);
    });
  });
});
