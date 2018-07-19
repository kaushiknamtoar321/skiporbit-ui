import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SkiporbitHomeComponent } from './skiporbit-home.component';

describe('SkiporbitHomeComponent', () => {
  let component: SkiporbitHomeComponent;
  let fixture: ComponentFixture<SkiporbitHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SkiporbitHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SkiporbitHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
