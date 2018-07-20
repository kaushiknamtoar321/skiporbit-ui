import { Component, OnInit } from '@angular/core';
import { Title } from '../../../node_modules/@angular/platform-browser';
import { PageTitle } from '../mapper/title';

@Component({
  selector: 'app-skiporbit-home',
  templateUrl: './skiporbit-home.component.html',
  styleUrls: ['./skiporbit-home.component.css']
})
export class SkiporbitHomeComponent implements OnInit {

  pageTitle : PageTitle = {
    name : "SkipOrbit™ - India's leading travel website, Visit popular destinations",
  };
  constructor(
    private title : Title,
  ) { }

  ngOnInit() {
    this.title.setTitle(this.pageTitle.name);
  }

}
