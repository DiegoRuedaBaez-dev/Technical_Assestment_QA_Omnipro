import { By, PageElement, PageElements } from '@serenity-js/web';

export class HomePage {

  static mainMenuCards = PageElements.located(
    By.css('.card.mt-4.top-card'),
  ).describedAs('main menu cards');

  static cardCalled = (name: string) =>
    PageElement.located(
      By.xpath(
        `//h5[normalize-space()='${name}']/ancestor::div[contains(@class,'top-card')]`
      ),
    ).describedAs(`${name} main menu card`);

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
