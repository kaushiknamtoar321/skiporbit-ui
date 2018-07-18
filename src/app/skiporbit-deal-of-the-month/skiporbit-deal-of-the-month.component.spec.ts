import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SkiporbitDealOfTheMonthComponent } from './skiporbit-deal-of-the-month.component';

describe('SkiporbitDealOfTheMonthComponent', () => {
  let component: SkiporbitDealOfTheMonthComponent;
  let fixture: ComponentFixture<SkiporbitDealOfTheMonthComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SkiporbitDealOfTheMonthComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SkiporbitDealOfTheMonthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
