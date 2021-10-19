import * as express from 'express';

import { ProductRepository } from '@full-moon/dark-side/core';

import { injectionResolver } from '../utils/injection-resolver.util';
import { ItemDetailController } from './controllers/item-detail.controller';
import { ItemSearchController } from './controllers/item-search.controller';

export const ItemApi = () => {
  const router = express.Router();
  const repository: ProductRepository = injectionResolver(ProductRepository);

  router.get('/:id', ItemDetailController(repository));
  router.get('/', ItemSearchController(repository));

  return router;
};
