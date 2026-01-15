import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests',

  workers: 1,
  fullyParallel: false,

  use: {
    headless: false,

    launchOptions: {
      slowMo: process.env.SLOWMO ? Number(process.env.SLOWMO) : 500,
    },

    viewport: { width: 1280, height: 900 },
    screenshot: 'only-on-failure',
    video: 'off',
  },
});
