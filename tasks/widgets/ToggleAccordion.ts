import { Task } from '@serenity-js/core';
import { Click } from '@serenity-js/web';
import { WidgetsPage } from '../../ui/WidgetsPage';

export class ToggleAccordion {

  static openSectionOne() {
    return Task.where(
      '#actor opens accordion section one',
      Click.on(WidgetsPage.sectionOneHeader),
    );
  }

  static openSectionTwo() {
    return Task.where(
      '#actor opens accordion section two',
      Click.on(WidgetsPage.sectionTwoHeader),
    );
  }

  static openSectionThree() {
    return Task.where(
      '#actor opens accordion section three',
      Click.on(WidgetsPage.sectionThreeHeader),
    );
  }
}
