import { Question } from '@serenity-js/core';
import { isVisible } from '@serenity-js/web';
import { Ensure } from '@serenity-js/assertions';
import { HomePage } from '../ui/HomePage';

export class MainMenuVisible {
  static sections = () =>
    Question.about('main menu sections visibility', actor =>
      actor.attemptsTo(
        Ensure.that(HomePage.elementsCard, isVisible()),
        Ensure.that(HomePage.formsCard, isVisible()),
        Ensure.that(HomePage.alertsCard, isVisible()),
        Ensure.that(HomePage.widgetsCard, isVisible()),
        Ensure.that(HomePage.interactionsCard, isVisible()),
        Ensure.that(HomePage.bookStoreCard, isVisible()),
      ),
    );
}
