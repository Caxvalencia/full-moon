import { ItemPriceEntity, ProductEntity } from '@full-moon/dark-side/core';

interface ProductResponse {
  id: string;
  title: string;
  thumbnail: string;
  condition: string;
  sold_quantity: number;
  price: number;
  currency_id: string;
  category_id: string;
  seller_id?: number;

  seller?: {
    id: number;
  };

  pictures?: {
    id: string;
    url: string;
    secure_url: string;
  }[];

  prices?: {
    prices: {
      currency_id: string;
      amount: number;
    }[];
  };

  shipping: {
    free_shipping: boolean;
  };
}

export class ProductMapper {
  public static from(
    product: ProductResponse,
    description = ''
  ): ProductEntity {
    return {
      author: {
        name: '',
        lastname: '',
      },
      item: {
        id: product.id,
        title: product.title,
        thumbnail: product.thumbnail,
        picture: this.getFirstPicture(product.pictures),
        condition: product.condition,
        soldQuantity: product.sold_quantity,
        isFreeShipping: product.shipping?.free_shipping,
        description,

        price: this.getPrice(
          product.prices?.prices,
          product.price,
          product.currency_id
        ),
      },
    };
  }

  public static fromList(products: ProductResponse[]): ProductEntity[] {
    return products.map((product) => this.from(product));
  }

  private static getFirstPicture(pictures: ProductResponse['pictures']) {
    return pictures?.length > 0 ? pictures[0].secure_url : '';
  }

  private static getPrice(
    prices: ProductResponse['prices']['prices'],
    priceToFind: number,
    currencyId: string
  ): ItemPriceEntity {
    const price = prices?.find((price) => price.amount === priceToFind);
    const amount = price?.amount ?? priceToFind;

    return {
      amount,
      currency: price?.currency_id ?? currencyId,
      decimals: this.getDecimals(amount),
    };
  }

  private static getDecimals(amount: number): number {
    return amount.toString().split('.')[1]?.length ?? 0;
  }
}
