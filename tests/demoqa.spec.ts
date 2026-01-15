import { test } from '@playwright/test';
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
import { isVisible } from '@serenity-js/web';
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

test('Case 4 - Alerts section (visual demo)', async ({ browser }) => {
  const context = await browser.newContext();
  const page = await context.newPage();

  // 👁️ Visual dialog handler
  page.on('dialog', async dialog => {
    console.log(`Dialog shown: ${dialog.message()}`);
    await new Promise(res => setTimeout(res, 3000)); // 👁️ ver alerta
    await dialog.dismiss(); // o accept()
  });

  // Navegación directa (demo visual)
  await page.goto('https://demoqa.com');

  // Card principal
  await page.locator('h5:has-text("Alerts, Frame & Windows")').click();

  // Side menu (Alerts)
  await page.locator('span.text:has-text("Alerts")').click();

  // 🔔 Simple Alert
  await page.locator('#alertButton').click();
  await page.waitForTimeout(1000);

  // 🔔 Delayed Alert
  await page.locator('#timerAlertButton').click();
  await page.waitForTimeout(6000);

  // 🔔 Confirm Alert
  await page.locator('#confirmButton').click();
  await page.waitForTimeout(1000);

  // 🔔 Prompt Alert
  await page.locator('#promtButton').click();
  await page.waitForTimeout(1000);

  await context.close();
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

    // Section 1 is expanded by default
    Ensure.that(
      WidgetsPage.sectionOneContent.isVisible(),
      isTrue(),
    ),

    // Open Section 2
    ToggleAccordion.openSectionTwo(),
    Ensure.that(
      WidgetsPage.sectionTwoContent.isVisible(),
      isTrue(),
    ),

    // Open Section 3
    ToggleAccordion.openSectionThree(),
    Ensure.that(
      WidgetsPage.sectionThreeContent.isVisible(),
      isTrue(),
    ),
  );
});



/**
 * Cleanup
 * Ensures browser context is closed after each test
 */
test.afterEach(async ({ context }) => {
  await context.close();
});
