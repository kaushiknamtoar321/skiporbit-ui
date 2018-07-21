import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HashLocationStrategy, LocationStrategy} from '@angular/common';


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
import { SkiporbitPackagesComponent } from './trip-packages/skiporbit-packages/skiporbit-packages.component';
import { SkiporbitTodaysHotDealComponent } from './trip-packages/skiporbit-todays-hot-deal/skiporbit-todays-hot-deal.component';
import { SkiporbitPopularDestinationsPackageComponent } from './trip-packages/skiporbit-popular-destinations/skiporbit-popular-destinations.component';
import { SkiporbitContactBannerComponent } from './contact/skiporbit-contact-banner/skiporbit-contact-banner.component';
import { SkiporbitContactAreaComponent } from './contact/skiporbit-contact-area/skiporbit-contact-area.component';
import { SkiporbitContactComponent } from './contact/skiporbit-contact/skiporbit-contact.component';
import { SkiporbitPackageDetailsComponent } from './trip-packages/skiporbit-package-details/skiporbit-package-details.component';

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
    SkiporbitBannerComponent,
    SkiporbitPackagesComponent,
    SkiporbitTodaysHotDealComponent,
    SkiporbitPopularDestinationsPackageComponent,
    SkiporbitContactBannerComponent,
    SkiporbitContactAreaComponent,
    SkiporbitContactComponent,
    SkiporbitPackageDetailsComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }
