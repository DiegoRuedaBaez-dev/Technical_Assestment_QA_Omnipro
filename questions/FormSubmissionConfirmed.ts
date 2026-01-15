import { Question } from '@serenity-js/core';
import { By, PageElement } from '@serenity-js/web';

export class FormSubmissionConfirmed {
  static modalIsVisible = () =>
    Question.about('Practice Form submission confirmation', actor =>
      PageElement.located(
        By.id('example-modal-sizes-title-lg'),
      ).isVisible().answeredBy(actor),
    );
}
