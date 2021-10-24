import { Request, Response } from 'express';

import { ItemInteractor } from '@full-moon/dark-side/core';

export function ItemSearchController(itemInteractor: ItemInteractor) {
  return async (request: Request, response: Response) => {
    if (!request.query.q) {
      response.status(400).json({ message: 'Missing query string' });

      return;
    }

    const data = await itemInteractor.search(
      encodeURIComponent(request.query.q as string)
    );

    response.json(data);
  };
}
