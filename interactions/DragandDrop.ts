import { Interaction } from '@serenity-js/core';
import { BrowseTheWebWithPlaywright } from '@serenity-js/playwright';

export class DragAndDrop {

  static draggableToTarget = () =>
    Interaction.where(
      '#actor drags element to drop area',
      async actor => {

        // ✅ En tu versión esto YA es Playwright.Page
        const page = await BrowseTheWebWithPlaywright
          .as(actor)
          .currentPage();

        await page.locator('#draggable').dragTo(
          page.locator('#droppable'),
        );
      },
    );
}
