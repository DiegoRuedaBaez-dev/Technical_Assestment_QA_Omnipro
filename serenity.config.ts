import { configure } from '@serenity-js/core';

configure({
  crew: [
    '@serenity-js/console-reporter',
    ['@serenity-js/serenity-bdd', {
      outputDirectory: 'target/site/serenity',
    }],
  ],
});
