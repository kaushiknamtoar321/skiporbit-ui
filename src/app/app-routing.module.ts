import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SkiporbitHomeComponent } from './skiporbit-home/skiporbit-home.component';
import { SkiporbitPackagesComponent } from './trip-packages/skiporbit-packages/skiporbit-packages.component';
import { SkiporbitContactComponent } from './contact/skiporbit-contact/skiporbit-contact.component';
import { SkiporbitPackageDetailsComponent } from './trip-packages/skiporbit-package-details/skiporbit-package-details.component';


const routes: Routes = [
  { path: '', pathMatch: 'full', component: SkiporbitHomeComponent },
  { path: 'packages', component: SkiporbitPackagesComponent },
  { path: 'contact', component: SkiporbitContactComponent },
  { path: 'package-details', component: SkiporbitPackageDetailsComponent },
];
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}