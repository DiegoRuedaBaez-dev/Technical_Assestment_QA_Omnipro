import { actorCalled } from '@serenity-js/core';
import { BrowseTheWebWithPlaywright } from '@serenity-js/playwright';
import { Browser } from '@playwright/test';

export function createActor(browser: Browser) {
  return actorCalled('QA User').whoCan(
    BrowseTheWebWithPlaywright.using(browser),
  );
}
