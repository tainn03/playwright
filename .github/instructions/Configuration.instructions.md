---
applyTo: "playwright.config.ts"
---

# Playwright Configuration Guideline

The `playwright.config.ts` file is where you can configure Playwright's behavior.

## Basic Configuration

A basic configuration file looks like this:

```typescript
import { defineConfig } from "@playwright/test";

export default defineConfig({
  // The directory where your tests are located
  testDir: "./tests",

  // The maximum time one test can run for.
  timeout: 30 * 1000,

  // The maximum time expect() should wait for the condition to be met.
  expect: {
    timeout: 5000,
  },

  // Run tests in files in parallel
  fullyParallel: true,

  // Fail the build on CI if you accidentally left test.only in the source code.
  forbidOnly: !!process.env.CI,

  // Retry on CI only
  retries: process.env.CI ? 2 : 0,

  // Opt out of parallel tests on CI.
  workers: process.env.CI ? 1 : undefined,

  // Reporter to use. See https://playwright.dev/docs/test-reporters
  reporter: "html",

  // Shared settings for all the projects below.
  use: {
    // Base URL to use in actions like `await page.goto('/')`.
    baseURL: "http://localhost:3000",

    // Collect trace when retrying the failed test.
    trace: "on-first-retry",
  },

  // Configure projects for major browsers
  projects: [
    {
      name: "chromium",
      use: {
        browserName: "chromium",
      },
    },
    {
      name: "firefox",
      use: {
        browserName: "firefox",
      },
    },
    {
      name: "webkit",
      use: {
        browserName: "webkit",
      },
    },
  ],
});
```

## Projects

You can configure different "projects" to run your tests in different environments. For example, you can have separate projects for desktop and mobile browsers.

```typescript
// ...
  projects: [
    // "Desktop" tests
    {
      name: 'chromium',
      use: {
        browserName: 'chromium',
        viewport: { width: 1280, height: 720 },
      },
    },
    // "Mobile" tests
    {
      name: 'Mobile Chrome',
      use: {
        browserName: 'chromium',
        ...devices['Pixel 5'],
      },
    },
  ],
// ...
```

To run tests for a specific project, use the `--project` flag:

```bash
npx playwright test --project="Mobile Chrome"
```

## Web Server

If your application is a web server, you can have Playwright start it for you.

```typescript
// ...
  // Run your local dev server before starting the tests
  webServer: {
    command: 'npm run start',
    port: 3000,
    reuseExistingServer: !process.env.CI,
  },
// ...
```
