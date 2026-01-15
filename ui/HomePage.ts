import { By, PageElement, PageElements } from '@serenity-js/web';

export class HomePage {
  static mainMenuCards = PageElements.located(
    By.css('.card.mt-4.top-card'),
  ).describedAs('main menu cards');

  static elementsCard = PageElement.located(
    By.xpath('Elements'),
  ).describedAs('Elements card');

  static formsCard = PageElement.located(
    By.xpath('Forms'),
  ).describedAs('Forms card');

  static alertsCard = PageElement.located(
    By.xpath("//*[contains(text(), 'Alerts, Frame & Windows')]"),
  ).describedAs('Alerts, Frame & Windows card');

  static widgetsCard = PageElement.located(
    By.xpath('Widgets'),
  ).describedAs('Widgets card');

  static interactionsCard = PageElement.located(
    By.xpath('Interactions'),
  ).describedAs('Interactions card');

  static bookStoreCard = PageElement.located(
    By.xpath('Book Store Application'),
  ).describedAs('Book Store Application card');
}
