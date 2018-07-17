import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SkiporbitPopularDestinationsComponent } from './skiporbit-popular-destinations.component';

describe('SkiporbitPopularDestinationsComponent', () => {
  let component: SkiporbitPopularDestinationsComponent;
  let fixture: ComponentFixture<SkiporbitPopularDestinationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SkiporbitPopularDestinationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SkiporbitPopularDestinationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
