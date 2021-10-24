import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FeaturesProductsModule } from '@full-moon/features/products/presentation';
import { UiAngularModule } from '@full-moon/ui/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePage } from './pages/home/home.page';

@NgModule({
  declarations: [AppComponent, HomePage],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UiAngularModule,
    FeaturesProductsModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
