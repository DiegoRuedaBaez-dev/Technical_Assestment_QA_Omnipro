import { Task } from '@serenity-js/core';
import { Click } from '@serenity-js/web';
import { AlertsPage } from '../../ui/AlertsPage';

export class TriggerAlerts {

  static simple = () =>
    Task.where(
      '#actor triggers simple alert',
      Click.on(AlertsPage.simpleAlertButton),
    );

  static delayed = () =>
    Task.where(
      '#actor triggers delayed alert',
      Click.on(AlertsPage.delayedAlertButton),
    );

  static confirm = () =>
    Task.where(
      '#actor triggers confirm alert',
      Click.on(AlertsPage.confirmAlertButton),
    );

  static prompt = () =>
    Task.where(
      '#actor triggers prompt alert',
      Click.on(AlertsPage.promptAlertButton),
    );
}
