---
applyTo: "**"
---

# Playwright Assertions Guideline

Playwright includes the `expect` function for creating assertions in your tests. It will wait automatically until the expected condition is met.

```javascript
import { test, expect } from "@playwright/test";

test("my test", async ({ page }) => {
  // ...
  await expect(page.getByText("Submit")).toBeVisible();
});
```

## Common Matchers

Here are some of the most common assertions.

| Matcher                            | Description                                                                                 | Example                                                                                                                        |
| ---------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------ |
| `toBeVisible()`                    | Asserts that the element is visible.                                                        | `await expect(page.locator('.submit-button')).toBeVisible();`                                                                  |
| `toBeHidden()`                     | Asserts that the element is not visible.                                                    | `await expect(page.locator('.error-message')).toBeHidden();`                                                                   |
| `toHaveText()`                     | Asserts that the element has the given text content. You can also use a regular expression. | `await expect(page.locator('h1')).toHaveText('Welcome');` <br/> `await expect(page.locator('.status')).toHaveText(/Success/);` |
| `toContainText()`                  | Asserts that the element contains the given text content.                                   | `await expect(page.locator('.toast-message')).toContainText('successfully');`                                                  |
| `toHaveAttribute()`                | Asserts that the element has the given attribute and value.                                 | `await expect(page.locator('input')).toHaveAttribute('type', 'text');`                                                         |
| `toHaveClass()`                    | Asserts that the element has the given class.                                               | `await expect(page.locator('button')).toHaveClass(/btn-primary/);`                                                             |
| `toHaveCount()`                    | Asserts that the locator resolves to the given number of elements.                          | `await expect(page.locator('li')).toHaveCount(3);`                                                                             |
| `toBeChecked()`                    | Asserts that a checkbox or radio button is checked.                                         | `await expect(page.getByLabel('Subscribe')).toBeChecked();`                                                                    |
| `toBeEnabled()` / `toBeDisabled()` | Asserts that an element is enabled or disabled.                                             | `await expect(page.getByRole('button', { name: 'Submit' })).toBeEnabled();`                                                    |
| `toBeEmpty()`                      | Asserts that an element is empty (has no child elements).                                   | `await expect(page.locator('.empty-container')).toBeEmpty();`                                                                  |
| `toHaveValue()`                    | Asserts that an input element has the given value.                                          | `await expect(page.locator('input[name="username"]')).toHaveValue('JohnDoe');`                                                 |

## Negating Matchers

You can negate any matcher using `.not`:

```javascript
await expect(page.locator(".error")).not.toBeVisible();
await expect(page.locator("p")).not.toHaveText("Error");
```
