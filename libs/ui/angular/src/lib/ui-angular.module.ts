import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { FullMoonComponentsModule } from './components/full-moon-components.module';

@NgModule({
  imports: [CommonModule, FullMoonComponentsModule],
  exports: [FullMoonComponentsModule],
})
export class UiAngularModule {}
