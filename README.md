# Playwright TypeScript AI QA

A focused QA automation portfolio project using Playwright and TypeScript for UI and API testing, with a lightweight AI-assisted failure analysis example.

## What this demonstrates

- UI automation with Playwright
- API validation using Playwright request fixtures
- Page Object Model for reusable UI actions
- Positive and negative test scenarios
- Trace, screenshot and HTML reporting for failed tests
- AI-assisted analysis of test failures without coupling test execution to an LLM provider

## Project structure

```text
pages/                 Page Objects
 tests/ui/              UI scenarios
 tests/api/             API scenarios
 ai/                    Test insight utility
 playwright.config.ts   Playwright configuration
```

## Running locally

```bash
npm install
npx playwright install --with-deps chromium
npm test
```

Run only UI or API tests:

```bash
npm run test:ui
npm run test:api
```

## AI-assisted testing

The AI component is intentionally small. It consumes structured test-result information and produces a short failure classification and investigation summary. The design keeps the test framework independent from a specific AI provider, so an approved LLM can be connected later through configuration rather than embedded into the tests.

The goal is to demonstrate a practical AI-assisted QA workflow, not to replace test assertions or hide failures behind AI-generated output.
