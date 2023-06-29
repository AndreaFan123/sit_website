import { expect, test } from '@playwright/test';

test("go to landing page", async ({ page }) => {
  await page.goto("/");
});

// test.describe('index page', () => {
//   test.beforeEach(async ({ page }) => {
//     await page.goto('/');
//   });

//   test('has expected navbar', async ({ page }) => {
//     const navText = await page.textContent('nav');
//     expect(navText).toBe('Here is the navigation');
//   });

//   test('has expected footer', async ({ page }) => {
//     const footerText = await page.textContent('footer');
//     expect(footerText).toBe('Here is the footer');
//   });

//   test('has expected h1', async ({ page }) => {
//     const h1Text = await page.textContent('h1');
//     expect(h1Text).toStrictEqual('Welcome to SvelteKit');
//   });
// });
