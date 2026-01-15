import { Task } from '@serenity-js/core';
import { Click } from '@serenity-js/web';
import { SideMenu } from '../../ui/SideMenu';

export class OpenSideMenuOption {

  static called = (name: string) =>
    Task.where(
      `#actor opens ${name} from side menu`,
      Click.on(SideMenu.optionCalled(name)),
    );
}
