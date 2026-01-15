import { By, PageElement, PageElements } from '@serenity-js/web';

export class HomePage {

  /**
   * All main menu cards displayed on the home page
   */
  static mainMenuCards = PageElements.located(
    By.css('.card.mt-4.top-card'),
  ).describedAs('main menu cards');

  /**
   * Card identified by its visible title (h5 text)
   * Examples:
   *  - Elements
   *  - Forms
   *  - Alerts, Frame & Windows
   *  - Widgets
   *  - Interactions
   *  - Book Store Application
   */
  static cardCalled = (name: string) =>
    PageElement.located(
      By.xpath(
        `//h5[normalize-space()='${name}']/ancestor::div[contains(@class,'top-card')]`
      ),
    ).describedAs(`${name} main menu card`);

  /**
   * Specific cards (semantic aliases)
   * These are OPTIONAL but improve readability in tests/tasks
   */

  static elementsCard = HomePage.cardCalled('Elements');

  static formsCard = HomePage.cardCalled('Forms');

  static alertsFrameWindowsCard = HomePage.cardCalled(
    'Alerts, Frame & Windows',
  );

  static widgetsCard = HomePage.cardCalled('Widgets');

  static interactionsCard = HomePage.cardCalled('Interactions');

  static bookStoreApplicationCard = HomePage.cardCalled(
    'Book Store Application',
  );
}
