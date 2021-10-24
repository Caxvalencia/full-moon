import { ProductEntity } from '@full-moon/features/products/core';

export class ListViewModel {
  public products: ProductEntity[] = [];
  public categories: string[] = [];
}
