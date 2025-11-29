---
applyTo: "**"
---

# Playwright Commands Guideline

Playwright comes with a command-line interface (CLI) to help you manage your tests.

## `npx playwright test`

Runs your tests.

```bash
# Run all tests
npx playwright test

# Run a specific test file
npx playwright test tests/my-test.spec.ts

# Run tests in headed mode
npx playwright test --headed

# Run tests for a specific project
npx playwright test --project="Mobile Chrome"
```

### All `test` command options

| Option                          | Description                                               |
| ------------------------------- | --------------------------------------------------------- |
| `test-filter`                   | Only run tests matching this regular expression.          |
| `--headed`                      | Run tests in headed browsers.                             |
| `-g, --grep <grep>`             | Only run tests matching this regular expression.          |
| `--project <project-name...>`   | Only run tests from the specified list of projects.       |
| `--ui`                          | Run tests in interactive UI mode.                         |
| `-j, --workers <workers>`       | Number of concurrent workers.                             |
| `--debug`                       | Run tests with Playwright Inspector.                      |
| `-c, --config <file>`           | Configuration file.                                       |
| `--fail-on-flaky-tests`         | Fail if any test is flagged as flaky.                     |
| `--forbid-only`                 | Fail if `test.only` is called.                            |
| `--fully-parallel`              | Run all tests in parallel.                                |
| `--global-timeout <timeout>`    | Maximum time this test suite can run in milliseconds.     |
| `--grep-invert <grep>`          | Only run tests that do not match this regular expression. |
| `--ignore-snapshots`            | Ignore screenshot and snapshot expectations.              |
| `--last-failed`                 | Only re-run the failures.                                 |
| `--list`                        | Collect all the tests and report them, but do not run.    |
| `--max-failures <N>, -x`        | Stop after the first N failures.                          |
| `--no-deps`                     | Do not run project dependencies.                          |
| `--output <dir>`                | Folder for output artifacts.                              |
| `--only-changed [ref]`          | Only run test files that have been changed.               |
| `--pass-with-no-tests`          | Makes test run succeed even if no tests were found.       |
| `--quiet`                       | Suppress stdio.                                           |
| `--repeat-each <N>`             | Run each test N times.                                    |
| `--reporter <reporter>`         | Reporter to use.                                          |
| `--retries <retries>`           | Maximum retry count for flaky tests.                      |
| `--shard <shard>`               | Shard tests and execute only the selected shard.          |
| `--test-list <file>`            | Path to a file containing a list of tests to run.         |
| `--test-list-invert <file>`     | Path to a file containing a list of tests to skip.        |
| `--timeout <timeout>`           | Specify test timeout threshold in milliseconds.           |
| `--trace <mode>`                | Force tracing mode.                                       |
| `--tsconfig <path>`             | Path to a single tsconfig.                                |
| `--ui-host <host>`              | Host to serve UI on.                                      |
| `--ui-port <port>`              | Port to serve UI on.                                      |
| `-u, --update-snapshots [mode]` | Update snapshots with actual results.                     |
| `--update-source-method [mode]` | Update snapshots with actual results.                     |

## `npx playwright codegen`

Starts the Playwright Inspector, which allows you to record user actions and generate test code.

```bash
# Start codegen for a specific URL
npx playwright codegen https://example.com
```

### All `codegen` command options

| Option                       | Description                                                |
| ---------------------------- | ---------------------------------------------------------- |
| `-b, --browser <name>`       | Browser to use: chromium, firefox, or webkit.              |
| `-o, --output <file>`        | Output file for the generated script.                      |
| `--target <language>`        | Language to use: javascript, playwright-test, python, etc. |
| `--test-id-attribute <attr>` | Attribute to use for test IDs.                             |

## `npx playwright show-report`

Shows the HTML report of the last test run.

```bash
npx playwright show-report
```

## `npx playwright install`

Installs the browsers needed by Playwright.

```bash
# Install all browsers
npx playwright install

# Install a specific browser
npx playwright install chromium
```

## `npx playwright open`

Opens a browser window with a blank page. This is useful for debugging.

```bash
npx playwright open https://example.com
```

## `npx playwright screenshot`

Takes a screenshot of a web page.

```bash
# Take a screenshot of a page
npx playwright screenshot --device="iPhone 11" https://example.com my-screenshot.png
```

## `npx playwright pdf`

Saves a web page as a PDF.

```bash
npx playwright pdf https://example.com my-document.pdf
```
