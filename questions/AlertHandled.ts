import { Question } from '@serenity-js/core';
import { Text } from '@serenity-js/web';
import { AlertsPage } from '../ui/AlertsPage';

export class AlertHandled {

  static confirmResult = () =>
    Question.about('confirm alert result', actor =>
      Text.of(AlertsPage.confirmResult).answeredBy(actor),
    );

  static promptResult = () =>
    Question.about('prompt alert result', actor =>
      Text.of(AlertsPage.promptResult).answeredBy(actor),
    );
}
