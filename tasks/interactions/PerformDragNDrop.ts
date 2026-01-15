import { Task } from '@serenity-js/core';
import { Click } from '@serenity-js/web';
import { DragAndDrop } from '../../interactions/DragandDrop';
import { InteractionsPage } from '../../ui/InteractionsPage';

export class PerformDragAndDrop {

  static execute = () =>
    Task.where(
      '#actor performs drag and drop interaction',
      Click.on(InteractionsPage.droppableOption),
      DragAndDrop.draggableToTarget(),
    );
}
