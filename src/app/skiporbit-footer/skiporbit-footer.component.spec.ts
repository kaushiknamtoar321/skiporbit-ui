import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SkiporbitFooterComponent } from './skiporbit-footer.component';

describe('SkiporbitFooterComponent', () => {
  let component: SkiporbitFooterComponent;
  let fixture: ComponentFixture<SkiporbitFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SkiporbitFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SkiporbitFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
