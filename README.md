# Technical Assessment QA Omnipro
**CX Quality Assurance Engineer**

## Overview

This project contains an automated test suite developed as part of a technical assessment for a **CX Quality Assurance Engineer** role.  
The objective of the solution is to design and implement a **modern, maintainable, and scalable UI automation framework** that validates key functional flows of the **DemoQA** web application.

The automation is built using **Playwright**, **TypeScript**, and **Serenity/JS**, applying the **Screenplay Pattern** to model user behavior in a clear, reusable, and expressive manner.

## Technology Stack

- **Playwright** – Browser automation and execution engine  
- **TypeScript** – Strongly typed language for safer and more maintainable code  
- **Serenity/JS** – Test orchestration framework and Screenplay Pattern implementation  
- **Node.js / npm** – Dependency management and execution  

## Serenity/JS and Screenplay Pattern

This project uses **Serenity/JS** as the core framework to implement the **Screenplay Pattern**, which focuses on *what the user does* rather than *how the automation is implemented*.

### Key Screenplay Concepts Applied

- **Actors**  
  Represent users interacting with the system.

- **Abilities**  
  Define what an actor can do (e.g. `BrowseTheWeb` using Playwright).

- **Tasks**  
  High-level business actions that an actor performs (e.g. completing a form, searching for a book).

- **Interactions**  
  Low-level, reusable UI actions (clicking, entering text, dragging elements).

- **Questions**  
  Assertions that query the state of the application and validate outcomes.

- **UI Maps**  
  Centralized definitions of page elements and locators, without embedded logic.

This approach ensures:
- Clear separation of concerns
- High readability of test scenarios
- Reusability of actions and validations
- Easier maintenance as the application grows

## Project Structure

```text
src
├── abilities        # Actor abilities (e.g. BrowseTheWeb)
├── ui               # Page elements and locators (UI Maps)
├── tasks            # Business actions grouped by feature
├── interactions     # Atomic and reusable UI interactions
├── questions        # Assertions and state validations
└── tests            # Test scenarios (spec files)