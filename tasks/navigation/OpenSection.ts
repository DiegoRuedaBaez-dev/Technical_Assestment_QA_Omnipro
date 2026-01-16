import { Task } from '@serenity-js/core';
import { Click, By, PageElement } from '@serenity-js/web';

export class OpenSection {

  static called(name: string) {
    return Task.where(
      `#actor opens ${ name } section`,
      Click.on(
        PageElement.located(
          By.xpath(`//h5[normalize-space(.)='${ name }']`)
        )
      ),
    );
  }
}
