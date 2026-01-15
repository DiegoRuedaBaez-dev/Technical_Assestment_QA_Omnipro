import { Task } from '@serenity-js/core';
import { Ensure } from '@serenity-js/assertions';
import { isVisible } from '@serenity-js/web';
import { HomePage } from '../ui/HomePage';

export class VerifyMainMenu {
  static isVisible = () =>
    Task.where(
      '#actor verifies main menu sections are visible',
      Ensure.that(HomePage.elementsCard, isVisible()),
      Ensure.that(HomePage.formsCard, isVisible()),
      Ensure.that(HomePage.alertsFrameWindowsCard, isVisible()),
      Ensure.that(HomePage.widgetsCard, isVisible()),
      Ensure.that(HomePage.interactionsCard, isVisible()),
      Ensure.that(HomePage.bookStoreApplicationCard, isVisible()),
    );
}
