---
applyTo: "**"
---

# Playwright Locating Guideline

These are the recommended built-in locators.

page.getByRole() to locate by explicit and implicit accessibility attributes.
page.getByText() to locate by text content.
page.getByLabel() to locate a form control by associated label's text.
page.getByPlaceholder() to locate an input by placeholder.
page.getByAltText() to locate an element, usually image, by its text alternative.
page.getByTitle() to locate an element by its title attribute.
page.getByTestId() to locate an element based on its data-testid attribute (other attributes can be configured).

# Locating Elements

## Locating by Role

The page.getByRole() locator is the preferred way to locate elements, as it leverages accessibility attributes. It is more resilient to changes in the UI and improves test readability.

### Common Roles

| Role         | HTML Elements Example                   |
| ------------ | --------------------------------------- |
| button       | `<button>`, `<input type="button">`     |
| checkbox     | `<input type="checkbox">`               |
| heading      | `<h1>`, `<h2>`, `<h3>`, etc.            |
| link         | `<a>`, `<area>`                         |
| textbox      | `<input type="text">`, `<textarea>`     |
| list         | `<ul>`, `<ol>`, `<menu>`                |
| listitem     | `<li>`                                  |
| table        | `<table>`                               |
| row          | `<tr>`                                  |
| cell         | `<td>`, `<th>`                          |
| dialog       | `<dialog>`, modal containers            |
| alert        | `<div role="alert">`                    |
| tab          | `<button role="tab">`, `<a role="tab">` |
| menu         | `<ul role="menu">`                      |
| menuitem     | `<li role="menuitem">`                  |
| combobox     | `<input list="datalist-id">`            |
| radio        | `<input type="radio">`                  |
| slider       | `<input type="range">`                  |
| switch       | `<input type="checkbox" role="switch">` |
| link         | `<a>`, `<area>`                         |
| image        | `<img>`, `<svg>`, `<area>`              |
| textbox      | `<input type="text">`, `<textarea>`     |
| form         | `<form>`                                |
| tree         | `<div role="tree">`                     |
| treeitem     | `<div role="treeitem">`                 |
| tooltip      | `<div role="tooltip">`                  |
| banner       | `<header role="banner">`                |
| ------------ | --------------------------------------- |

### Example

```html
<h3>Sign up</h3>
<label> <input type="checkbox" /> Subscribe </label>
<br />
<button>Submit</button>
```

```javascript
await expect(page.getByRole("heading", { name: "Sign up" })).toBeVisible();
await page.getByRole("checkbox", { name: "Subscribe" }).check();
await page.getByRole("button", { name: /submit/i }).click();
```

## Locating by Label

Most form controls usually have dedicated labels that could be conveniently used to interact with the form. In this case, you can locate the control by its associated label using page.getByLabel().

### Example

```html
<label>Password <input type="password" /></label>
<br />
<label for="email">Email</label>
<input id="email" type="email" />
```

```javascript
await page.getByLabel("Password").fill("my-secret-password");
await page.getByLabel("Email").fill("user@example.com");
```

## Locating by Placeholder

Inputs may have a placeholder attribute to hint to the user what value should be entered. You can locate such an input using page.getByPlaceholder().

### Example

```html
<input type="email" placeholder="name@example.com" />
```

```javascript
await page
  .getByPlaceholder("name@example.com")
  .fill("playwright@microsoft.com");
```

## Locating by Text

Find an element by the text it contains. You can match by a substring, exact string, or a regular expression when using page.getByText().

### Example

```html
<span>Welcome, John</span>
```

```javascript
await expect(page.getByText("Welcome, John")).toBeVisible();
// or
await expect(page.getByText("Welcome, John", { exact: true })).toBeVisible();
// or
await expect(page.getByText(/welcome, [A-Za-z]+$/i)).toBeVisible();
// or
await expect(page.getByText("come,")).toBeVisible();
```

### Note

Matching by text always normalizes whitespace, even with exact match. For example, it turns multiple spaces into one, turns line breaks into spaces and ignores leading and trailing whitespace.

## Locating by Alt Text

All images should have an alt attribute that describes the image. You can locate an image based on the text alternative using page.getByAltText().

### Example

```html
<img alt="playwright logo" src="/img/playwright-logo.svg" width="100" />
```

```javascript
await page.getByAltText("playwright logo").click();
```

## Locating by Title

Locate an element with a matching title attribute using page.getByTitle().

### Example

```html
<span title="Issues count">25 issues</span>
```

```javascript
await expect(page.getByTitle("Issues count")).toHaveText("25 issues");
```

## Locating by Test ID

Testing by test ids is the most resilient way of testing as even if your text or role of the attribute changes, the test will still pass. QA's and developers should define explicit test ids and query them with page.getByTestId(). However testing by test ids is not user facing. If the role or text value is important to you then consider using user facing locators such as role and text locators.

### Example

```html
<button data-testid="directions">Itinéraire</button>
```

```javascript
await page.getByTestId("directions").click();
```
