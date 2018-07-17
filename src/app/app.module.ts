import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SkiporbitHeaderComponent } from './skiporbit-header/skiporbit-header.component';
import { SkiporbitPopularDestinationsComponent } from './skiporbit-popular-destinations/skiporbit-popular-destinations.component';
import { SkiporbitPricingComponent } from './skiporbit-pricing/skiporbit-pricing.component';

@NgModule({
  declarations: [
    AppComponent,
    SkiporbitHeaderComponent,
    SkiporbitPopularDestinationsComponent,
    SkiporbitPricingComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
