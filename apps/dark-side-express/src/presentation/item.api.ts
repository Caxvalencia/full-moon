import * as express from 'express';

import { ProductRepository } from '@full-moon/dark-side/core';

import { injectionResolver } from '../utils/injection-resolver.util';
import { ItemDetailController } from './controllers/item-detail.controller';
import { ItemSearchController } from './controllers/item-search.controller';

export const ItemApi = () => {
  const router = express.Router();

  router.get(
    '/:id',
    ItemDetailController(injectionResolver(ProductRepository))
  );

  router.get('/', ItemSearchController(injectionResolver(ProductRepository)));

  return router;
};
