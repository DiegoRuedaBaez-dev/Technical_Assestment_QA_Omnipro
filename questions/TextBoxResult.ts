import { Question } from '@serenity-js/core';
import { Text } from '@serenity-js/web';
import { ElementsPage } from '../ui/ElementsPage';

export class TextBoxResult {
  static name = () =>
    Question.about('displayed name result', actor =>
      Text.of(ElementsPage.nameOutput).answeredBy(actor),
    );

  static email = () =>
    Question.about('displayed email result', actor =>
      Text.of(ElementsPage.emailOutput).answeredBy(actor),
    );
}
