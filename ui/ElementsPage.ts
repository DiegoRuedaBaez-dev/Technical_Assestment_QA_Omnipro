import { By, PageElement } from '@serenity-js/web';

export class ElementsPage {

  /**
   * Left menu options
   */
  static textBoxOption = PageElement.located(
    By.xpath("//span[normalize-space()='Text Box']"),
  ).describedAs('Text Box menu option');

  /**
   * Text Box form fields
   */
  static fullNameInput = PageElement.located(
    By.id('userName'),
  ).describedAs('Full Name input');

  static emailInput = PageElement.located(
    By.id('userEmail'),
  ).describedAs('Email input');

  static submitButton = PageElement.located(
    By.id('submit'),
  ).describedAs('Submit button');

  /**
   * Output section
   */
  static nameOutput = PageElement.located(
    By.id('name'),
  ).describedAs('Name output');

  static emailOutput = PageElement.located(
    By.id('email'),
  ).describedAs('Email output');
}
