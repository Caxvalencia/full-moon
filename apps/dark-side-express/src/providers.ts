import { ItemInteractor, ProductRepository } from '@full-moon/dark-side/core';

import { environment } from './environments/environment';
import { injectionResolver, register } from './utils/injection-resolver.util';

export function registerProviders() {
  register(
    ProductRepository,
    new environment.providers[ProductRepository.name]()
  );

  register(
    ItemInteractor,
    new ItemInteractor(injectionResolver(ProductRepository))
  );
}
