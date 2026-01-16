# Technical Assessment QA Omnipro
# CX Quality Assurance Engineer – Automation Assessment

## Project Overview

This repository contains the automated test solution developed as part of the **CX Quality Assurance Engineer Technical Assessment** for **Omni.pro**.

The objective of this project is to demonstrate the ability to **design, implement, and structure modern automated tests** using **Playwright**, **TypeScript**, and **Serenity/JS**, applying the **Screenplay Pattern** correctly and consistently.

The automation validates multiple functional flows of the **DemoQA** application, following the scenarios and expected results defined in the assessment document.

---

## Tech Stack

- Node.js
- TypeScript
- Playwright
- Serenity/JS
- Screenplay Design Pattern
- npm

---

## Design Pattern

This project follows the **Screenplay Pattern**, where:

- **Actors** represent users interacting with the system
- **Tasks** describe high-level business actions
- **Interactions** define low-level UI actions
- **Questions** validate application state and outcomes
- **Abilities** define what an actor can do (e.g., BrowseTheWeb)

This pattern improves:
- Readability
- Maintainability
- Scalability
- Reusability

---

## Application Under Test

**DemoQA**  
https://demoqa.com/

---

## Automated Test Scenarios

### Case 1: Navigate to Home Page
- Validate that the home page loads correctly
- Verify visibility of the main sections:
  - Elements
  - Forms
  - Alerts, Frame & Windows
  - Widgets
  - Interactions
  - Book Store Application

### Case 2: Elements – Text Box
- Navigate to Elements section
- Complete Text Box form with valid data
- Submit the form
- Validate displayed output data

### Case 3: Forms – Practice Form
- Navigate to Forms section
- Complete all mandatory fields
- Submit the form
- Validate confirmation modal/message

### Case 4: Alerts, Frame & Windows
- Trigger and accept browser alerts
- Open and validate new windows or tabs

### Case 5: Widgets – Accordion
- Expand and collapse accordion panels
- Validate displayed content

### Case 6: Interactions – Drag and Drop
- Drag element to target area
- Validate successful drop action (text or color change)

### Case 7: Book Store Application – Search
- Search for a book term (e.g., "Git")
- Validate search results contain related titles

---

## Project Structure

```text
Technical_Assestment_QA_Omnipro-main/
│
├── src/
│   ├── actors/
│   ├── tasks/
│   ├── interactions/
│   ├── questions/
│   ├── abilities/
│   └── features/
│
├── playwright.config.ts
├── tsconfig.json
├── package.json
├── package-lock.json
└── README.md
