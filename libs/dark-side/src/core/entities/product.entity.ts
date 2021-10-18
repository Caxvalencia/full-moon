import { AuthorEntity } from './author.entity';
import { ItemEntity } from './item.entity';

export abstract class ProductEntity {
  author: AuthorEntity;
  item: ItemEntity;
  categories?: string[];
}
