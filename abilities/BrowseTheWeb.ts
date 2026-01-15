import { Ability } from '@serenity-js/core';
import { BrowseTheWebWithPlaywright } from '@serenity-js/playwright';
import { Page } from '@playwright/test';

export class BrowseTheWeb extends Ability {
  static using(page: Page) {
    return BrowseTheWebWithPlaywright.using(page);
  }
}
