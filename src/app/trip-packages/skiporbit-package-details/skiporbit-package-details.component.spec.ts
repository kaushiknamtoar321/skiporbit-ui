import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SkiporbitPackageDetailsComponent } from './skiporbit-package-details.component';

describe('SkiporbitPackageDetailsComponent', () => {
  let component: SkiporbitPackageDetailsComponent;
  let fixture: ComponentFixture<SkiporbitPackageDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SkiporbitPackageDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SkiporbitPackageDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
