import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  workers: 1,
  fullyParallel: false,

  reporter: [
    ['html', { open: 'never' }],
    ['@serenity-js/playwright-test', {
      crew: [
        '@serenity-js/console-reporter',
        ['@serenity-js/serenity-bdd', { 
          outputDirectory: 'target/site/serenity' 
        }],
      ],
    }],
  ],

  use: {
    headless: false,
    viewport: { width: 1280, height: 900 },
    screenshot: 'only-on-failure',
    video: 'off',
  },
});
