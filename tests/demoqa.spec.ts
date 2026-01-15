import { test } from '@playwright/test';
import { Ensure, equals, isTrue } from '@serenity-js/assertions';
import { WaitFor } from './interactions/WaitFor';
import { createActor } from './support/actor';

// Navigation tasks
import { NavigateToHome } from '../tasks/navigation/NavigateToHome';
import { OpenSection } from '../tasks/navigation/OpenSection';

// Elements
import { FillTextBoxForm } from '../tasks/elements/FillTextBoxForm';
import { TextBoxResult } from '../questions/TextBoxResult';

// Forms
import { CompletePracticeForm } from '../tasks/forms/CompletePracticeForm';
import { FormSubmissionConfirmed } from '../questions/FormSubmissionConfirmed';


/**
 * Case 1
 * Navigate to DemoQA home page
 */
test('Case 1 - Navigate to DemoQA home page', async ({ browser }) => {
  const user = createActor(browser);

  await user.attemptsTo(
    NavigateToHome.page(),
  );
});

/**
 * Case 2
 * Elements - Text Box form submission
 */
test('Case 2 - Elements Text Box form', async ({ browser }) => {
  const user = createActor(browser);

  await user.attemptsTo(
    NavigateToHome.page(),
    OpenSection.called('Elements'),
    FillTextBoxForm.with('John Doe', 'john.doe@test.com'),
  );
});

/**
 * Case 3
 * Forms - Practice Form submission
 */
test('Case 3 - Forms Practice Form submission', async ({ browser }) => {
  const user = createActor(browser);

  await user.attemptsTo(
    NavigateToHome.page(),
    OpenSection.called('Forms'),
    CompletePracticeForm.withMandatoryFields(
      'John',
      'Doe',
      'john.doe@test.com',
      '1234567890',
    ),

    Ensure.that(
      FormSubmissionConfirmed.modalIsVisible(),
      isTrue(),
    ),
    // 👇 Delay visual para revisión humana
    WaitFor.milliseconds(3000),
  );
});

/**
 * Cleanup
 * Ensures browser context is closed after each test
 */
test.afterEach(async ({ context }) => {
  await context.close();
});
