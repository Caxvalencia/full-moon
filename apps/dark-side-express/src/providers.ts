import { ProductRepository } from '@full-moon/dark-side/core';
import { FakeProductRepository } from '@full-moon/dark-side/data';

import { register } from './utils/injection-resolver.util';

export function registerProviders() {
  register(ProductRepository, new FakeProductRepository());
}
