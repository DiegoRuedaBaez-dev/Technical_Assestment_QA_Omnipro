import { Task } from '@serenity-js/core';
import { Navigate } from '@serenity-js/web';

export class NavigateToHome {

  static page() {
    return Task.where(
      '#actor navigates to DemoQA home',
      Navigate.to('https://demoqa.com'),
    );
  }
}
