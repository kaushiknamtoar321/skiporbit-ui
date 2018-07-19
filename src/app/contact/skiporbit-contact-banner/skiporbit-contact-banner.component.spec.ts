import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SkiporbitContactBannerComponent } from './skiporbit-contact-banner.component';

describe('SkiporbitContactBannerComponent', () => {
  let component: SkiporbitContactBannerComponent;
  let fixture: ComponentFixture<SkiporbitContactBannerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SkiporbitContactBannerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SkiporbitContactBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
