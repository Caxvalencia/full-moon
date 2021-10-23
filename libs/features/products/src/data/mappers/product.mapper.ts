import { ProductEntity as ProductResponseEntity } from '@full-moon/dark-side/core';
import { ProductEntity } from '@full-moon/features/products/core';

export class ProductMapper {
  public static from(product: ProductResponseEntity): ProductEntity {
    return {
      author: product.author,
      categories: product.categories,
      image: product.item.picture,
      ...product.item,
    };
  }

  public static fromList(products: ProductResponseEntity[]): ProductEntity[] {
    return products.map((product) => this.from(product));
  }
}
