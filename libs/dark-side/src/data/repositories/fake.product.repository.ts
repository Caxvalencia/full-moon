import { ProductEntity, ProductRepository } from '@full-moon/dark-side/core';

import { ProductMapper } from '../mappers/product.mapper';

export class FakeProductRepository implements ProductRepository {
  public async search(): Promise<ProductEntity[]> {
    const response = [
      {
        id: 'MLA901089177',
        title: 'Pantalón Jogger Elastizado Tela Gabardina ',
        seller: {
          id: 111111111,
        },
        price: 2130,
        prices: {
          prices: [
            {
              amount: 2130,
              currency_id: 'ARS',
            },
          ],
        },
        currency_id: 'ARS',
        sold_quantity: 5000,
        condition: 'new',
        thumbnail:
          'http://http2.mlstatic.com/D_857806-MLA47776537755_102021-O.jpg',
        shipping: {
          free_shipping: false,
        },
        category_id: 'MLA109282',
      },
      {
        id: 'MLA801067364',
        title: 'Pantalones Hombre Cargo Gabardina Bolsillos Casuales Jogger',
        seller: {
          id: 222222222,
        },
        price: 2499,
        prices: {
          prices: [
            {
              amount: 2499,
              currency_id: 'ARS',
            },
            {
              amount: 2115.08,
              currency_id: 'ARS',
            },
          ],
        },
        currency_id: 'ARS',
        sold_quantity: 5000,
        condition: 'new',
        thumbnail:
          'http://http2.mlstatic.com/D_683534-MLA31478230215_072019-O.jpg',
        shipping: {
          free_shipping: false,
        },
        category_id: 'MLA109282',
      },
      {
        id: 'MLA886598947',
        title: 'Pantalón De Trabajo Clásico Pampero B/carpintero T. 38 Al 60',
        seller: {
          id: 333333333,
        },
        price: 2137.5,
        prices: {
          prices: [
            {
              amount: 2250,
              currency_id: 'ARS',
            },
            {
              amount: 2137.5,
              currency_id: 'ARS',
            },
          ],
        },
        currency_id: 'ARS',
        sold_quantity: 250,
        condition: 'new',
        thumbnail:
          'http://http2.mlstatic.com/D_749300-MLA43999181866_112020-O.jpg',
        shipping: {
          free_shipping: false,
        },
        category_id: 'MLA417961',
      },
      {
        id: 'MLA886598947',
        title: 'Pantalones Cargo Hombre Gabardina Bolsillos Jogger Jogging',
        seller: {
          id: 444444444,
        },
        price: 2950,
        prices: {
          prices: [
            {
              amount: 2950,
              currency_id: 'ARS',
            },
            {
              amount: 3200,
              currency_id: 'ARS',
            },
            {
              amount: 2802.5,
              currency_id: 'ARS',
            },
          ],
        },
        currency_id: 'ARS',
        sold_quantity: 5000,
        condition: 'new',
        thumbnail:
          'http://http2.mlstatic.com/D_961005-MLA42528532158_072020-O.jpg',
        shipping: {
          free_shipping: false,
        },
        category_id: 'MLA109282',
      },
    ];

    return ProductMapper.fromList(response);
  }

  public async detail(): Promise<ProductEntity> {
    const data = {
      id: 'MLA901089177',
      title: 'Pantalón Jogger Elastizado Tela Gabardina',
      seller_id: 153042319,
      category_id: 'MLA109282',
      price: 2130,
      currency_id: 'ARS',
      sold_quantity: 8412,
      condition: 'new',
      thumbnail:
        'http://http2.mlstatic.com/D_857806-MLA47776537755_102021-I.jpg',
      pictures: [
        {
          id: '762451-MLA47939555562_102021',
          url: 'http://http2.mlstatic.com/D_762451-MLA47939555562_102021-O.jpg',
          secure_url:
            'https://http2.mlstatic.com/D_762451-MLA47939555562_102021-O.jpg',
          size: '434x500',
          max_size: '720x829',
          quality: '',
        },
      ],
      secure_thumbnail:
        'https://http2.mlstatic.com/D_857806-MLA47776537755_102021-I.jpg',
      shipping: {
        free_shipping: false,
      },
    };

    return ProductMapper.from(data);
  }
}
