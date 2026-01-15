import { Task } from '@serenity-js/core';
import { Navigate } from '@serenity-js/web';

export class NavigateToHome {
  static page = () =>
    Task.where(
      '#actor navigates to the DemoQA home page',
      Navigate.to('https://demoqa.com'),
    );
}
