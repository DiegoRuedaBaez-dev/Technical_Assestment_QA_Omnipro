import { actorCalled } from '@serenity-js/core';
import { Page } from '@playwright/test';
import { BrowseTheWebWithPlaywright } from '@serenity-js/playwright';

export function createActor(page: Page) {
  return actorCalled('QA User').whoCan(
    BrowseTheWebWithPlaywright.using(page),
  );
}
