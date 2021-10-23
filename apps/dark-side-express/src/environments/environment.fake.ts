import { ProductRepository } from '@full-moon/dark-side/core';
import { FakeProductRepository } from '@full-moon/dark-side/data';

const providers = {
  [ProductRepository.name]: FakeProductRepository,
};

export const environment = {
  production: false,
  providers,
};
