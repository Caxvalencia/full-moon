import { Request, Response } from 'express';

import { ProductRepository } from '@full-moon/dark-side/core';

export function ItemSearchController(productRepository: ProductRepository) {
  return async (request: Request, response: Response) => {
    if (!request.query.q) {
      response.status(400).json({ message: 'Missing query string' });

      return;
    }

    const data = await productRepository.search(request.query.q as string);

    response.json(data);
  };
}
