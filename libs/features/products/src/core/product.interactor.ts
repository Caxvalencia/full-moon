import { ProductRepository } from './repositories/product.repository';
import { SearchProductUseCase } from './use-cases/search-product.use-case';

export class ProductInteractor {
  public searchProductUseCase: SearchProductUseCase;

  constructor(private repository: ProductRepository) {
    this.searchProductUseCase = new SearchProductUseCase(this.repository);
  }

  public search(query: string) {
    return this.searchProductUseCase.execute(query);
  }
}
