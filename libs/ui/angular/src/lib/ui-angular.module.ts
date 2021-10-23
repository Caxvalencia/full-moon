import { NgModule } from '@angular/core';

import { FullMoonComponentsModule } from './components/full-moon-components.module';

const MODULES = [FullMoonComponentsModule];

@NgModule({
  imports: MODULES,
  exports: MODULES,
})
export class UiAngularModule {}
