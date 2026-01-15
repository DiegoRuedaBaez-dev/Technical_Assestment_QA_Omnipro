import { Task } from '@serenity-js/core';
import { Click, Enter } from '@serenity-js/web';
import { FormsPage } from '../../ui/FormsPage';

export class CompletePracticeForm {
  static withMandatoryFields = (
    firstName: string,
    lastName: string,
    email: string,
    mobile: string,
  ) =>
    Task.where(
      '#actor completes the Practice Form with mandatory data',
      Click.on(FormsPage.practiceFormOption),
      Enter.theValue(firstName).into(FormsPage.firstNameInput),
      Enter.theValue(lastName).into(FormsPage.lastNameInput),
      Enter.theValue(email).into(FormsPage.emailInput),
      Click.on(FormsPage.genderMaleRadio),
      Enter.theValue(mobile).into(FormsPage.mobileInput),
      Click.on(FormsPage.submitButton),
    );
}
