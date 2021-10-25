import { ProductEntity } from '@full-moon/features/products/core';

export class DetailViewModel {
  public product: ProductEntity | null = null;
  public isLoading = false;
}
