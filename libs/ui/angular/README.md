# UI - Angular

This library provides components for building user interfaces using Angular.

## Running unit tests

Run `nx test ui-angular` to execute the unit tests via [Jest](https://jestjs.io).

## Usege

```typscript
import { UiAngularModule } from '@full-moon/ui/angular';
```

import module:

```typescript
@NgModule({
  imports: [
    // ....
    UiAngularModule,
    // ....
  ],
  // ....
});

```

---

## Components

- [Breadcrumb](./src/lib/components/breadcrumb/breadcrumb.component.md)
- [Searcher](./src/lib/components/searcher/searcher.component.md)
- [Button](./src/lib/components/button/button.component.md)

## Organisms

- [header](./src/lib/organisms/header)
