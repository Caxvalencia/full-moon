import { ItemInteractor, ProductRepository } from '@full-moon/dark-side/core';
import { FakeProductRepository } from '@full-moon/dark-side/data';

import { injectionResolver, register } from './utils/injection-resolver.util';

export function registerProviders() {
  register(ProductRepository, new FakeProductRepository());

  register(
    ItemInteractor,
    new ItemInteractor(injectionResolver(ProductRepository))
  );
}
