# E2E Testing with Playwright

A comprehensive end-to-end testing project using Playwright for modern web applications.

## 🚀 Quick Start

### Prerequisites

- Node.js
- npm or yarn package manager

### Installation

1. Clone the repository
```bash
git clone https://github.com/tainn03/playwright.git
cd playwright
```

2. Install dependencies
```bash
npm install
```

3. Install Playwright browsers
```bash
npx playwright install
```

## 📁 Project Structure

```
e2e/
├── .github/
│   ├── agents/               # Playwright AI agents
│   │   ├── playwright-test-generator.agent.md
│   │   ├── playwright-test-healer.agent.md
│   │   └── playwright-test-planner.agent.md
│   └── workflows/            # CI/CD workflows
├── .vscode/                  # VS Code configuration
├── tests/                    # Test files
│   ├── example.spec.ts
│   ├── realestate.spec.ts
│   └── seed.spec.ts
├── playwright.config.ts      # Playwright configuration
├── package.json
├── package-lock.json
├── .gitignore
└── README.md
```

## 🧪 Running Tests

### Basic Test Execution

```bash
# Run all tests
npx playwright test

# Run tests in headed mode (visible browser)
npx playwright test --headed

# Run tests for a specific browser
npx playwright test --project=chromium

# Run a specific test file
npx playwright test tests/example.spec.ts
```

### Advanced Test Options

```bash
# Run tests in debug mode
npx playwright test --debug

# Run tests in UI mode (interactive)
npx playwright test --ui

# Run tests with specific grep pattern
npx playwright test --grep "login"

# Run failed tests only
npx playwright test --last-failed
```

## 📊 Test Reports

### View HTML Report
```bash
npx playwright show-report
```

The HTML report provides:
- Test execution summary
- Screenshots and videos of failures
- Detailed test traces
- Performance metrics

## 🔧 Configuration

The project uses `playwright.config.ts` for configuration. Key settings include:

- **Test Directory**: `./tests`
- **Timeout**: 30 seconds per test
- **Retries**: 2 retries on CI, 0 locally
- **Browsers**: Chromium, Firefox, WebKit
- **Base URL**: Configurable for different environments

## 📝 Writing Tests

### Basic Test Structure

```typescript
import { test, expect } from '@playwright/test';

test('example test', async ({ page }) => {
  await page.goto('/');
  await page.getByRole('button', { name: 'Get started' }).click();
  await expect(page.getByText('Welcome')).toBeVisible();
});
```

### Best Practices

1. **Use role-based locators** for better accessibility
2. **Add descriptive test names** that explain the scenario
3. **Use page object models** for complex applications
4. **Implement proper waits** using `expect()` assertions
5. **Take screenshots** on failures for debugging

## 🔍 Code Generation

Generate tests by recording your interactions:

```bash
# Start codegen for a specific URL
npx playwright codegen https://example.com

# Generate tests with specific browser
npx playwright codegen --browser=firefox https://example.com
```

## 🐛 Debugging

### Debug Mode
```bash
npx playwright test --debug
```

### Trace Viewer
```bash
npx playwright show-trace trace.zip
```

### Screenshots and Videos

The project is configured to capture:
- Screenshots on failure
- Videos for failed tests
- Full traces on first retry

### Getting Help

- [Playwright Documentation](https://playwright.dev/)
- [GitHub Issues](https://github.com/microsoft/playwright/issues)
- [Discord Community](https://discord.gg/playwright)
