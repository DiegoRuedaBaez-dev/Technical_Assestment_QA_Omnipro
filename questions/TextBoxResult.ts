import { Question } from '@serenity-js/core';
import { Ensure, includes } from '@serenity-js/assertions';
import { Text } from '@serenity-js/web';
import { ElementsPage } from '../ui/ElementsPage';

export class TextBoxResult {
  static shows = (fullName: string, email: string) =>
    Question.about('submitted Text Box data', actor =>
      actor.attemptsTo(
        Ensure.that(Text.of(ElementsPage.nameOutput), includes(fullName)),
        Ensure.that(Text.of(ElementsPage.emailOutput), includes(email)),
      ),
    );
}
