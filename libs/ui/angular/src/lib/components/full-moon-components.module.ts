import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SearcherComponent } from './searcher/searcher.component';

const DECLARATIONS = [SearcherComponent];

@NgModule({
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  declarations: DECLARATIONS,
  exports: DECLARATIONS,
})
export class FullMoonComponentsModule {}
