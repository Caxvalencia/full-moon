import { Request, Response } from 'express';

import { ItemInteractor } from '@full-moon/dark-side/core';

export function ItemDetailController(itemInteractor: ItemInteractor) {
  return async (request: Request, response: Response) => {
    const data = await itemInteractor.detail(
      encodeURIComponent(request.params.id)
    );

    response.json(data);
  };
}
