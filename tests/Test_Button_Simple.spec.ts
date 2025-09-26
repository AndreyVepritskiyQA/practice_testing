import { expect, test } from '@playwright/test';
import { PageButtonSimple } from '../pages/Page_Button_Simple';

let basePage: PageButtonSimple;
test.describe('Тестирование кнопки', () => {
  test.beforeEach(async ({ page }) => {
    basePage = new PageButtonSimple(page); //Новую страницу создаем перед каждым тестом
    await basePage.OpenURL(); //Открывает вкладку перед каждым тестом
  });
  test.describe('Позитивные тестовые сценарии', () => {
    test('Проверка корректности названия кнопки', async () => {
      let labelText: string = 'Click';
      await basePage.ValidateButtonLabel(labelText);
    });
    test('Нажатие на кнопку и проверка валидности ответа', async () => {
      let responseText: string = 'Submitted';
      await basePage.ClickButton();
      await basePage.ValidateResponse(responseText);
    });
    test('Повторное нажатие кнопки и проверка валидности ответа', async () => {
      let responseText: string = 'Submitted';
      await basePage.ClickButton();
      await basePage.ValidateResponse(responseText);
      await basePage.ClickButton();
      await basePage.ValidateResponse(responseText);
    });
  });
});
