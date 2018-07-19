import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SkiporbitPackagesComponent } from './skiporbit-packages.component';

describe('SkiporbitPackagesComponent', () => {
  let component: SkiporbitPackagesComponent;
  let fixture: ComponentFixture<SkiporbitPackagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SkiporbitPackagesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SkiporbitPackagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
