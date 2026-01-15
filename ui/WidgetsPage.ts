import { By, PageElement } from '@serenity-js/web';

export class WidgetsPage {

  static accordionOption = PageElement.located(
    By.cssContainingText('.text', 'Accordian'),
  ).describedAs('Accordion side menu option');

  static sectionOneHeader = PageElement.located(
    By.id('section1Heading'),
  ).describedAs('Accordion section 1 header');

  static sectionOneContent = PageElement.located(
    By.id('section1Content'),
  ).describedAs('Accordion section 1 content');

  static sectionTwoHeader = PageElement.located(
    By.id('section2Heading'),
  ).describedAs('Accordion section 2 header');

  static sectionTwoContent = PageElement.located(
    By.id('section2Content'),
  ).describedAs('Accordion section 2 content');

  static sectionThreeHeader = PageElement.located(
    By.id('section3Heading'),
  ).describedAs('Accordion section 3 header');

  static sectionThreeContent = PageElement.located(
    By.id('section3Content'),
  ).describedAs('Accordion section 3 content');
}