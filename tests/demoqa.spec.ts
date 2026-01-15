import { expect, test } from '@playwright/test';
import { Ensure, equals, isTrue } from '@serenity-js/assertions';

import { createActor } from './support/actor';

import { NavigateToHome } from '../tasks/navigation/NavigateToHome';
import { OpenSection } from '../tasks/navigation/OpenSection';
import { OpenSideMenuOption } from '../tasks/navigation/OpenSideMenuOption';

import { FillTextBoxForm } from '../tasks/elements/FillTextBoxForm';
import { TextBoxResult } from '../questions/TextBoxResult';

import { CompletePracticeForm } from '../tasks/forms/CompletePracticeForm';
import { FormSubmissionConfirmed } from '../questions/FormSubmissionConfirmed';

import { ToggleAccordion } from '../tasks/widgets/ToggleAccordion';
import { WidgetsPage } from '../ui/WidgetsPage';

import { PerformDragAndDrop } from '../tasks/interactions/PerformDragNDrop';
import { InteractionsPage } from '../ui/InteractionsPage';
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
 * Elements – Text Box form submission
 */
test('Case 2 - Elements Text Box form', async ({ browser }) => {
  const user = createActor(browser);

  await user.attemptsTo(
    NavigateToHome.page(),
    OpenSection.called('Elements'),

    FillTextBoxForm.with('John Doe', 'john.doe@test.com'),

    Ensure.that(
      TextBoxResult.name(),
      equals('Name:John Doe'),
    ),
    Ensure.that(
      TextBoxResult.email(),
      equals('Email:john.doe@test.com'),
    ),
  );
});

/**
 * Case 3
 * Forms – Practice Form submission
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
  );
});

test('Case 4 - Alerts section (visual demo)', async ({ page }) => {

  page.on('dialog', async dialog => {
    console.log(`Alert shown: ${dialog.message()}`);

    await new Promise(res => setTimeout(res, 3000));

    await dialog.accept();
  });

  await page.goto('https://demoqa.com');

  await page.locator('h5:has-text("Alerts, Frame & Windows")').click();
  await page.locator('.element-list span:has-text("Alerts")').click();

  await page.locator('#alertButton').click();
  await page.locator('#timerAlertButton').click();
  await page.locator('#confirmButton').click();
  await page.locator('#promtButton').click();
});


/**
 * Case 5
 * Widgets – Accordion expands and collapses
 */
test('Case 5 - Widgets Accordion expands and collapses', async ({ browser }) => {
  const user = createActor(browser);

  await user.attemptsTo(
    NavigateToHome.page(),
    OpenSection.called('Widgets'),
    OpenSideMenuOption.called('Accordian'),

    Ensure.that(
      WidgetsPage.sectionOneContent.isVisible(),
      isTrue(),
    ),

    ToggleAccordion.openSectionTwo(),
    Ensure.that(
      WidgetsPage.sectionTwoContent.isVisible(),
      isTrue(),
    ),

    ToggleAccordion.openSectionThree(),
    Ensure.that(
      WidgetsPage.sectionThreeContent.isVisible(),
      isTrue(),
    ),
  );
});

test('Case 6 - Interactions Drag and Drop works correctly', async ({ page }) => {

  await page.goto('https://demoqa.com');

  await page.locator('h5:has-text("Interactions")').click();
  await page.locator('.element-list span:has-text("Droppable")').click();

  const source = page.locator('#draggable');
  const target = page
    .getByRole('tabpanel', { name: 'Simple' })
    .locator('#droppable');

  await source.dragTo(target);

  await expect(target).toHaveText('Dropped!');
});


/**
 * Cleanup
 * Ensures browser context is closed after each test
 */
test.afterEach(async ({ context }) => {
  await context.close();
});
