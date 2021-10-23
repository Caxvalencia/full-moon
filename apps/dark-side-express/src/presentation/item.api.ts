import * as express from 'express';

import { ItemInteractor } from '@full-moon/dark-side/core';

import { injectionResolver } from '../utils/injection-resolver.util';
import { ItemDetailController } from './controllers/item-detail.controller';
import { ItemSearchController } from './controllers/item-search.controller';

export const ItemApi = () => {
  const router = express.Router();
  const itemInteractor: ItemInteractor = injectionResolver(ItemInteractor);

  router.get('/:id', ItemDetailController(itemInteractor));
  router.get('/', ItemSearchController(itemInteractor));

  return router;
};
