import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SkiporbitPopularDestinationsPackageComponent } from './skiporbit-popular-destinations.component';

describe('SkiporbitPopularDestinationsPackageComponent', () => {
  let component: SkiporbitPopularDestinationsPackageComponent;
  let fixture: ComponentFixture<SkiporbitPopularDestinationsPackageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SkiporbitPopularDestinationsPackageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SkiporbitPopularDestinationsPackageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
