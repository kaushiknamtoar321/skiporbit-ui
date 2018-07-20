import { Component, OnInit } from '@angular/core';
import { PageTitle } from '../../mapper/title';
import { Title } from '../../../../node_modules/@angular/platform-browser';

@Component({
  selector: 'app-skiporbit-contact-banner',
  templateUrl: './skiporbit-contact-banner.component.html',
  styleUrls: ['./skiporbit-contact-banner.component.css']
})
export class SkiporbitContactBannerComponent implements OnInit {

  pageTitle : PageTitle = {
    name : "SkipOrbit™ - Contact us anytime, were are here to support you 24x7.",
  };
  constructor(
    private title : Title,
  ) { }

  ngOnInit() {
    this.title.setTitle(this.pageTitle.name);
  }

}
