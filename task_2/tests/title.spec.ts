import { test, expect } from "@playwright/test";

test.describe("Playwright.dev главная страница", () => {
  test("должна иметь корректный заголовок", async ({ page }) => {
    const baseUrl = "https://playwright.dev/"; //Лучше вынести в env, не делал для упрощения запуска

    await page.goto(baseUrl);

    await expect(
      page.locator("body"),
      "Страница должна загрузиться"
    ).toBeVisible();

    await expect(
      page,
      "Заголовок страницы должен соответствовать ожидаемому"
    ).toHaveTitle(
      "Fast and reliable end-to-end testing for modern web apps | Playwright"
    );
  });
});
