import { By, PageElement } from '@serenity-js/web';

export class AlertsPage {

  static simpleAlertButton = PageElement.located(
    By.id('alertButton'),
  ).describedAs('Simple alert button');

  static delayedAlertButton = PageElement.located(
    By.id('timerAlertButton'),
  ).describedAs('Delayed alert button');

  static confirmAlertButton = PageElement.located(
    By.id('confirmButton'),
  ).describedAs('Confirm alert button');

  static promptAlertButton = PageElement.located(
    By.id('promtButton'),
  ).describedAs('Prompt alert button');

  static confirmResult = PageElement.located(
    By.id('confirmResult'),
  ).describedAs('Confirm alert result text');

  static promptResult = PageElement.located(
    By.id('promptResult'),
  ).describedAs('Prompt alert result text');
}
