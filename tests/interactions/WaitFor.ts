import { Interaction } from '@serenity-js/core';

export class WaitFor {
  static milliseconds = (duration: number) =>
    Interaction.where(
      `#actor waits for ${duration} milliseconds`,
      async () => {
        await new Promise(resolve => setTimeout(resolve, duration));
      },
    );
}
