import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SkiporbitContactAreaComponent } from './skiporbit-contact-area.component';

describe('SkiporbitContactAreaComponent', () => {
  let component: SkiporbitContactAreaComponent;
  let fixture: ComponentFixture<SkiporbitContactAreaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SkiporbitContactAreaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SkiporbitContactAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
