# Technical Assessment – QA Automation (Omnipro)

## 1. Purpose of This Repository

This repository contains the solution for the **QA Automation Technical Assessment** requested by Omnipro.

The main objective of this assessment is to demonstrate:
- End-to-end UI automation
- Proper test architecture
- Usage of **Playwright + TypeScript + Serenity/JS + Screenplay Pattern**
- Executable, repeatable tests
- Clear documentation and reporting

All requirements described in the assessment document are covered and validated.

---

## 2. Technology Stack (Assessment Requirement)

This project **explicitly implements** the following stack:

- **Playwright** – Browser automation engine
- **TypeScript** – Strong typing and maintainability
- **Serenity/JS** – Test orchestration, Screenplay abstraction, and reporting
- **Screenplay Pattern** – Actor-centric, scalable automation design
- **Node.js / npm** – Dependency and execution runtime

> ✅ This stack fully satisfies the assessment requirement.

---

## 3. Architecture Overview (Screenplay Pattern)

The project follows **Serenity/JS Screenplay Pattern** best practices.

### Core Concepts Used

- **Actors**  
  Defined in `tests/support/actor.ts`.  
  Actors represent real users interacting with the application.

- **Tasks**  
  Encapsulate actions (navigation, form filling, interactions).  
  Located in `tasks/`.

- **Questions**  
  Encapsulate assertions and validations.  
  Located in `questions/`.

- **UI Models**  
  Centralized selectors and page elements.  
  Located in `ui/`.

---

## 4. Project Structure

```
.
├── tests/
│   ├── demoqa.spec.ts
│   └── support/
│       └── actor.ts
│
├── tasks/
├── questions/
├── ui/
├── playwright.config.ts
├── serenity.config.ts
├── package.json
├── README.md
└── .gitignore
```

---

## 5. Automated Test Scenarios

1. Navigate to DemoQA home page  
2. Elements – Text Box form submission  
3. Forms – Practice Form submission  
4. Alerts handling (visual demo)  
5. Widgets – Accordion expands and collapses  
6. Interactions – Drag and Drop  
7. Book Store – Search filtering  

---

## 6. Installation

### Prerequisites
- Node.js v18+
- npm v9+

### Install dependencies
```bash
npm install
```

---

## 7. Test Execution

```bash
npm test
```

---

## 8. Serenity Reporting

Generate Serenity report:
```bash
npx serenity-bdd run
```

Open:
```
target/site/serenity/index.html
```

---

## 9. .gitignore

```
node_modules/
playwright-report/
test-results/
target/
*.log
.env
```

---

## 10. Assessment Deliverables – Compliance

- Automation documentation: ✅  
- Execution documentation: ✅  
- Git repository: ✅  
- Serenity report with evidence: ✅  

---

## 11. Reviewer Quick Start

```bash
git clone <repo>
cd Technical_Assestment_QA_Omnipro
npm install
npm test
npx serenity-bdd run
```

---

## Author

**Diego Rueda**  
QA Automation Engineer