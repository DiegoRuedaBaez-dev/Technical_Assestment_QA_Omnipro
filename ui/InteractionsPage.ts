import { By, PageElement } from '@serenity-js/web';

export class InteractionsPage {

  static droppableOption = PageElement.located(
    By.cssContainingText('.text', 'Droppable'),
  ).describedAs('Droppable side menu option');

  static draggableItem = PageElement.located(
    By.id('draggable'),
  ).describedAs('Draggable element');

  static dropArea = PageElement.located(
    By.id('droppable'),
  ).describedAs('Drop target area');

  static dropResultText = PageElement.located(
    By.css('#droppable p'),
  ).describedAs('Drop result text');
}
