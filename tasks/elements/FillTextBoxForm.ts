import { Task, Wait } from '@serenity-js/core';
import { Click, Enter, isVisible } from '@serenity-js/web';
import { ElementsPage } from '../../ui/ElementsPage';

export class FillTextBoxForm {
  static with = (fullName: string, email: string) =>
    Task.where(
      '#actor fills and submits the Text Box form',

      Click.on(ElementsPage.textBoxOption),

      Wait.until(ElementsPage.fullNameInput, isVisible()),

      Enter.theValue(fullName).into(ElementsPage.fullNameInput),
      Enter.theValue(email).into(ElementsPage.emailInput),

      Click.on(ElementsPage.submitButton),
    );
}
