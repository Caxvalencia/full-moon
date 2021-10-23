import { ProductRepository } from '@full-moon/dark-side/core';
import { FetchProductRepository } from '@full-moon/dark-side/data';

const providers = {
  [ProductRepository.name]: FetchProductRepository,
};

export const environment = {
  production: true,
  providers,
};
