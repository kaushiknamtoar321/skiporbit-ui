import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SkiporbitTodaysHotDealComponent } from './skiporbit-todays-hot-deal.component';

describe('SkiporbitTodaysHotDealComponent', () => {
  let component: SkiporbitTodaysHotDealComponent;
  let fixture: ComponentFixture<SkiporbitTodaysHotDealComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SkiporbitTodaysHotDealComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SkiporbitTodaysHotDealComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
