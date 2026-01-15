import { Task } from '@serenity-js/core';
import { Click } from '@serenity-js/web';
import { HomePage } from '../../ui/HomePage';

export class OpenSection {
  static called = (name: string) =>
    Task.where(
      `#actor opens the ${name} section`,
      Click.on(HomePage.cardCalled(name)),
    );
}
