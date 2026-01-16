import { test, expect } from '@serenity-js/playwright-test';

import { Ensure, equals, isTrue } from '@serenity-js/assertions';

import { createActor } from './support/actor';

// Navigation
import { NavigateToHome } from '../tasks/navigation/NavigateToHome';
import { OpenSection } from '../tasks/navigation/OpenSection';
import { OpenSideMenuOption } from '../tasks/navigation/OpenSideMenuOption';

// Case 2 – Elements
import { FillTextBoxForm } from '../tasks/elements/FillTextBoxForm';
import { TextBoxResult } from '../questions/TextBoxResult';

// Case 3 – Forms
import { CompletePracticeForm } from '../tasks/forms/CompletePracticeForm';
import { FormSubmissionConfirmed } from '../questions/FormSubmissionConfirmed';

// Case 5 – Widgets
import { ToggleAccordion } from '../tasks/widgets/ToggleAccordion';

/**
 * =========================================================
 * CASE 1
 * Navigate to DemoQA home page
 * (Serenity / Screenplay)
 * =========================================================
 */
test('Case 1 - Navigate to DemoQA home page', async ({ browser }) => {
  const user = createActor(browser);

  await user.attemptsTo(
    NavigateToHome.page(),
  );
});

/**
 * =========================================================
 * CASE 2
 * Elements – Text Box form submission
 * (Serenity / Screenplay)
 * =========================================================
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
 * =========================================================
 * CASE 3
 * Forms – Practice Form submission
 * (Serenity / Screenplay)
 * =========================================================
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

/**
 * =========================================================
 * CASE 4
 * Alerts section (visual demo)
 * (Raw Playwright – intentionally not Screenplay)
 * =========================================================
 */
test('Case 4 - Alerts section (visual demo)', async ({ page }) => {

  page.on('dialog', async dialog => {
    console.log(`Alert shown: ${dialog.message()}`);
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
 * =========================================================
 * CASE 5
 * Widgets – Accordion expands and collapses
 * (Serenity / Screenplay)
 * =========================================================
 */
test('Case 5 - Widgets Accordion expands and collapses', async ({ browser }) => {
  const user = createActor(browser);

  await user.attemptsTo(
    NavigateToHome.page(),
    OpenSection.called('Widgets'),
    OpenSideMenuOption.called('Accordian'),

    ToggleAccordion.openSectionOne(),
    ToggleAccordion.openSectionTwo(),
    ToggleAccordion.openSectionThree(),
  );
});

/**
 * =========================================================
 * CASE 6
 * Interactions – Drag and Drop
 * (Raw Playwright – stability-first)
 * =========================================================
 */
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
 * =========================================================
 * CASE 7
 * Book Store Application – Book search
 * (Raw Playwright)
 * =========================================================
 */
test('Case 7 - Book Store search filters results correctly', async ({ page }) => {

  await page.goto('https://demoqa.com');

  await page.locator('h5:has-text("Book Store Application")').click();

  const searchInput = page.locator('#searchBox');
  await searchInput.fill('Git');
  await page.waitForTimeout(1500);

  const titles = page.locator('.rt-tbody .action-buttons span');
  const count = await titles.count();

  expect(count).toBeGreaterThan(0);

  for (let i = 0; i < count; i++) {
    const text = await titles.nth(i).innerText();
    expect(text.toLowerCase()).toContain('git');
  }
});
