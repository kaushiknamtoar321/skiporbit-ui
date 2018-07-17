import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SkiporbitPricingComponent } from './skiporbit-pricing.component';

describe('SkiporbitPricingComponent', () => {
  let component: SkiporbitPricingComponent;
  let fixture: ComponentFixture<SkiporbitPricingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SkiporbitPricingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SkiporbitPricingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
