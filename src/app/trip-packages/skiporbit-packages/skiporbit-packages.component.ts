import { Component, OnInit } from '@angular/core';
import { PageTitle } from '../../mapper/title';
import { Title } from '../../../../node_modules/@angular/platform-browser';

@Component({
  selector: 'app-skiporbit-packages',
  templateUrl: './skiporbit-packages.component.html',
  styleUrls: ['./skiporbit-packages.component.css']
})
export class SkiporbitPackagesComponent implements OnInit {

  pageTitle : PageTitle = {
    name : "SkipOrbit™ - Select packages from our budget packages, travel around the world with best price.",
  };
  constructor(
    private title : Title,
  ) { }

  ngOnInit() {
    this.title.setTitle(this.pageTitle.name);
  }

}
