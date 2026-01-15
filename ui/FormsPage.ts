import { By, PageElement } from '@serenity-js/web';

export class FormsPage {
  static practiceFormOption = PageElement.located(
    By.cssContainingText('.text', 'Practice Form'),
  ).describedAs('Practice Form menu option');

  static firstNameInput = PageElement.located(
    By.id('firstName'),
  ).describedAs('First Name input');

  static lastNameInput = PageElement.located(
    By.id('lastName'),
  ).describedAs('Last Name input');

  static emailInput = PageElement.located(
    By.id('userEmail'),
  ).describedAs('Email input');

  static genderMaleRadio = PageElement.located(
    By.css('label[for="gender-radio-1"]'),
  ).describedAs('Male gender radio');

  static mobileInput = PageElement.located(
    By.id('userNumber'),
  ).describedAs('Mobile Number input');

  static submitButton = PageElement.located(
    By.id('submit'),
  ).describedAs('Submit form button');
}
