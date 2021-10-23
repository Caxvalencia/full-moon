# Searcher Component

Render box for searching and button for activating search.

---

## Usage

`html`

```html
<full-moon-searcher
  placeholder="Nunca dejes de buscar"
  buttonAriaLabel="Buscar"
></full-moon-searcher>
```

## Properties

| placeholder |                          |
| ----------- | ------------------------ |
| Description | Placeholder of input box |
| Attribute   | placeholder              |
| Type        | `string`                 |

| buttonAriaLabel |                                           |
| --------------- | ----------------------------------------- |
| Description     | Aria label accesibility for button search |
| Attribute       | buttonAriaLabel                           |
| Type            | `string`                                  |

## Events

| Name       | Description                               |
| ---------- | ----------------------------------------- |
| `onSearch` | Emitted when the user taps on the button. |
