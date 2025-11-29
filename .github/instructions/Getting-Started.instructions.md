---
applyTo: "**"
---

# Playwright Getting Started Guideline

This guide provides instructions for setting up a new Playwright project and running your first test.

## Installation

You can create a new Playwright project from scratch or add Playwright to an existing project.

### New Project

To start a new project, use the `init` command:

```bash
# Run from your project's root directory
npm init playwright@latest
```

This will create the following files:

- `playwright.config.ts` - The main configuration file for Playwright.
- `tests/` - A directory to store your test files.
- `tests-examples/` - A directory with example tests.
- `package.json` - Standard project metadata and dependencies.

### Existing Project

To add Playwright to an existing `npm` project, run the following command:

```bash
npm install --save-dev @playwright/test
```

Then, you can create a `playwright.config.ts` file and a `tests` directory for your tests.

## Writing Your First Test

Create a new file `tests/todo.spec.ts` and add the following code:

```typescript
import { test, expect } from "@playwright/test";

test("should add a todo item", async ({ page }) => {
  await page.goto("https://demo.playwright.dev/todomvc");

  // Add a new todo item
  await page
    .getByPlaceholder("What needs to be done?")
    .fill("Create Playwright instructions");
  await page.keyboard.press("Enter");

  // Verify that the new item has been added
  await expect(page.getByText("Create Playwright instructions")).toBeVisible();
});
```

## Running Tests

To run your tests, use the `test` command:

```bash
npx playwright test
```

By default, tests will run in a headless browser. To see the browser, use the `--headed` flag:

```bash
npx playwright test --headed
```

## Viewing Test Results

After the tests have run, you can view a detailed report:

```bash
npx playwright show-report
```
