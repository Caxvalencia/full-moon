import { Request, Response } from 'express';

import { ProductRepository } from '@full-moon/dark-side/core';

export function ItemDetailController(productRepository: ProductRepository) {
  return async (request: Request, response: Response) => {
    const data = await productRepository.detail(request.params.id);

    response.json(data);
  };
}
