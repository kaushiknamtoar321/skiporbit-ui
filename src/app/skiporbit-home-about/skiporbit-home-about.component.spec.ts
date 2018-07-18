import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SkiporbitHomeAboutComponent } from './skiporbit-home-about.component';

describe('SkiporbitHomeAboutComponent', () => {
  let component: SkiporbitHomeAboutComponent;
  let fixture: ComponentFixture<SkiporbitHomeAboutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SkiporbitHomeAboutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SkiporbitHomeAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
