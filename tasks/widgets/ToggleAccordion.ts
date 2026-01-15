import { Task } from '@serenity-js/core';
import { Click } from '@serenity-js/web';
import { WidgetsPage } from '../../ui/WidgetsPage';

export class ToggleAccordion {

  static openSectionTwo = () =>
    Task.where(
      '#actor opens accordion section two',
      Click.on(WidgetsPage.sectionTwoHeader),
    );

  static openSectionThree = () =>
    Task.where(
      '#actor opens accordion section three',
      Click.on(WidgetsPage.sectionThreeHeader),
    );
}
