import { By, PageElement } from '@serenity-js/web';

export class SideMenu {

  static optionCalled = (name: string) =>
    PageElement.located(
      By.xpath(`//span[normalize-space()="${name}"]`),
    ).describedAs(`${name} side menu option`);
}
