import { test } from '@playwright/test';
import { createActor } from './support/actor';

import { NavigateToHome } from '../tasks/navigation/NavigateToHome';
import { OpenSection } from '../tasks/navigation/OpenSection';
import { FillTextBoxForm } from '../tasks/elements/FillTextBoxForm';

test('Case 1 - Navigate to DemoQA home page', async ({ browser }) => {
  const user = createActor(browser);

  await user.attemptsTo(
    NavigateToHome.page(),
  );
});

test('Case 2 - Elements Text Box form', async ({ browser }) => {
  const user = createActor(browser);

  await user.attemptsTo(
    NavigateToHome.page(),
    OpenSection.called('Elements'),
    FillTextBoxForm.with('John Doe', 'john.doe@test.com'),
  );
});

test.afterEach(async ({ context }) => {
  await context.close();
});
