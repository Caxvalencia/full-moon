import { ProductEntity } from '@full-moon/features/products/core';

export class ListViewModel {
  public products: ProductEntity[] = [];

  public categories = [
    'Electronica, Audio y Video',
    'iPod',
    'Apple',
    'Apple iPod touch',
    '32GB',
  ];
}
