import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SkiporbitAdditionalServicesComponent } from './skiporbit-additional-services.component';

describe('SkiporbitAdditionalServicesComponent', () => {
  let component: SkiporbitAdditionalServicesComponent;
  let fixture: ComponentFixture<SkiporbitAdditionalServicesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SkiporbitAdditionalServicesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SkiporbitAdditionalServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
