import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SkiporbitHeaderComponent } from './skiporbit-header.component';

describe('SkiporbitHeaderComponent', () => {
  let component: SkiporbitHeaderComponent;
  let fixture: ComponentFixture<SkiporbitHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SkiporbitHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SkiporbitHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
