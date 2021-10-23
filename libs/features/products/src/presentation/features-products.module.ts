import { CommonModule, CurrencyPipe } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { FeaturesProductsRoutingModule } from './features-products-routing.module';

@NgModule({
  imports: [CommonModule, HttpClientModule, FeaturesProductsRoutingModule],
  providers: [CurrencyPipe],
  exports: [],
})
export class FeaturesProductsModule {}
