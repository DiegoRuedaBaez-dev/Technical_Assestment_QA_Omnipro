import { test } from '@playwright/test';
import { createActor } from './support/actor';

test('DemoQA main page loads', async ({ page }) => {
  const user = createActor(page);

  await page.goto('https://demoqa.com');
});
