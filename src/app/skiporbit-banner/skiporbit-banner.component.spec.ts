import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SkiporbitBannerComponent } from './skiporbit-banner.component';

describe('SkiporbitBannerComponent', () => {
  let component: SkiporbitBannerComponent;
  let fixture: ComponentFixture<SkiporbitBannerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SkiporbitBannerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SkiporbitBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
