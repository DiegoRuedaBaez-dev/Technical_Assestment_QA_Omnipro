import { Task } from '@serenity-js/core';
import { Click, By, PageElement } from '@serenity-js/web';

export class OpenSideMenuOption {

  static called(name: string) {
    return Task.where(
      `#actor opens side menu option ${ name }`,
      Click.on(
        PageElement.located(
          By.xpath(`//span[normalize-space(.)='${ name }']`)
        )
      ),
    );
  }
}
