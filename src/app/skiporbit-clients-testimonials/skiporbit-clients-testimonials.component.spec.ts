import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SkiporbitClientsTestimonialsComponent } from './skiporbit-clients-testimonials.component';

describe('SkiporbitClientsTestimonialsComponent', () => {
  let component: SkiporbitClientsTestimonialsComponent;
  let fixture: ComponentFixture<SkiporbitClientsTestimonialsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SkiporbitClientsTestimonialsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SkiporbitClientsTestimonialsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
