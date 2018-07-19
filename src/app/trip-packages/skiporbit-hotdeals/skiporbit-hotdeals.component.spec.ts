import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SkiporbitHotdealsComponent } from './skiporbit-hotdeals.component';

describe('SkiporbitHotdealsComponent', () => {
  let component: SkiporbitHotdealsComponent;
  let fixture: ComponentFixture<SkiporbitHotdealsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SkiporbitHotdealsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SkiporbitHotdealsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
