import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SearcherComponent } from './components/searcher/searcher.component';

@NgModule({
  imports: [CommonModule],
  declarations: [SearcherComponent],
  exports: [SearcherComponent],
})
export class FeaturesProductsModule {}
