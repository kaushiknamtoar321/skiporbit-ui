import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {APP_BASE_HREF} from '@angular/common';


import { AppComponent } from './app.component';
import { SkiporbitHeaderComponent } from './skiporbit-header/skiporbit-header.component';
import { SkiporbitPopularDestinationsComponent } from './skiporbit-popular-destinations/skiporbit-popular-destinations.component';
import { SkiporbitDealOfTheMonthComponent } from './skiporbit-deal-of-the-month/skiporbit-deal-of-the-month.component';
import { SkiporbitAdditionalServicesComponent } from './skiporbit-additional-services/skiporbit-additional-services.component';
import { SkiporbitClientsTestimonialsComponent } from './skiporbit-clients-testimonials/skiporbit-clients-testimonials.component';
import { SkiporbitHomeAboutComponent } from './skiporbit-home-about/skiporbit-home-about.component';
import { SkiporbitRecentBlogPostComponent } from './skiporbit-recent-blog-post/skiporbit-recent-blog-post.component';
import { SkiporbitFooterComponent } from './skiporbit-footer/skiporbit-footer.component';
import { SkiporbitHotdealsComponent } from './trip-packages/skiporbit-hotdeals/skiporbit-hotdeals.component';
import { AppRoutingModule } from './/app-routing.module';
import { SkiporbitHomeComponent } from './skiporbit-home/skiporbit-home.component';
import { SkiporbitBannerComponent } from './skiporbit-banner/skiporbit-banner.component';

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
    SkiporbitFooterComponent,
    SkiporbitHotdealsComponent,
    SkiporbitHomeComponent,
    SkiporbitBannerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [{provide: APP_BASE_HREF, useValue : '/' }],
  bootstrap: [AppComponent]
})
export class AppModule { }
