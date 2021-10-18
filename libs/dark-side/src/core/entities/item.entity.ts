import { ItemPriceEntity } from './item-price.entity';

export interface ItemEntity {
  id: string;
  title: string;
  picture: string;
  condition: string;
  isFreeShipping: boolean;
  soldQuantity?: number;
  description?: string;
  price: ItemPriceEntity;
}
