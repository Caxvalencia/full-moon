import { CommonModule, CurrencyPipe } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ProductInteractor, ProductRepository } from '@full-moon/features/products/core';
import { HttpProductRepository } from '@full-moon/features/products/data';
import { UiAngularModule } from '@full-moon/ui/angular';

import { FeaturesProductsRoutingModule } from './features-products-routing.module';
import { DetailPage } from './pages/detail/detail.page';
import { ListPage } from './pages/list/list.page';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    UiAngularModule,
    FeaturesProductsRoutingModule,
  ],
  declarations: [ListPage, DetailPage],
  providers: [
    CurrencyPipe,
    {
      provide: ProductRepository,
      useClass: HttpProductRepository,
    },
    {
      provide: ProductInteractor,
      deps: [ProductRepository],
      useClass: ProductInteractor,
    },
  ],
  exports: [],
})
export class FeaturesProductsModule {}
