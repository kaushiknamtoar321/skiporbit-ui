import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SkiporbitContactComponent } from './skiporbit-contact.component';

describe('SkiporbitContactComponent', () => {
  let component: SkiporbitContactComponent;
  let fixture: ComponentFixture<SkiporbitContactComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SkiporbitContactComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SkiporbitContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
