import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SkiporbitHeaderComponent } from './skiporbit-header/skiporbit-header.component';
import { SkiporbitPopularDestinationsComponent } from './skiporbit-popular-destinations/skiporbit-popular-destinations.component';
import { SkiporbitDealOfTheMonthComponent } from './skiporbit-deal-of-the-month/skiporbit-deal-of-the-month.component';
import { SkiporbitAdditionalServicesComponent } from './skiporbit-additional-services/skiporbit-additional-services.component';
import { SkiporbitClientsTestimonialsComponent } from './skiporbit-clients-testimonials/skiporbit-clients-testimonials.component';
import { SkiporbitHomeAboutComponent } from './skiporbit-home-about/skiporbit-home-about.component';
import { SkiporbitRecentBlogPostComponent } from './skiporbit-recent-blog-post/skiporbit-recent-blog-post.component';
import { SkiporbitFooterComponent } from './skiporbit-footer/skiporbit-footer.component';

@NgModule({
  declarations: [
    AppComponent,
    SkiporbitHeaderComponent,
    SkiporbitPopularDestinationsComponent,
    SkiporbitDealOfTheMonthComponent,
    SkiporbitAdditionalServicesComponent,
    SkiporbitClientsTestimonialsComponent,
    SkiporbitHomeAboutComponent,
    SkiporbitRecentBlogPostComponent,
    SkiporbitFooterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
