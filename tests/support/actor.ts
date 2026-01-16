import { actorCalled } from '@serenity-js/core';
import { BrowseTheWebWithPlaywright } from '@serenity-js/playwright';
import { Browser } from '@playwright/test';

export const createActor = (browser: Browser) => {
  return actorCalled('User').whoCan(
    BrowseTheWebWithPlaywright.using(browser),
  );
};
