import { Task } from '@serenity-js/core';
import { Click } from '@serenity-js/web';
import { HomePage } from '../../ui/HomePage';

export class OpenSection {

  static called = (name: 'Elements' | 'Forms' | 'Alerts, Frame & Windows' | 'Widgets' | 'Interactions' | 'Book Store Application') =>
    Task.where(
      `#actor opens the ${name} home section`,
      Click.on(HomePage.cardCalled(name)),
    );
}
