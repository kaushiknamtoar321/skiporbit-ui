import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SkiporbitRecentBlogPostComponent } from './skiporbit-recent-blog-post.component';

describe('SkiporbitRecentBlogPostComponent', () => {
  let component: SkiporbitRecentBlogPostComponent;
  let fixture: ComponentFixture<SkiporbitRecentBlogPostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SkiporbitRecentBlogPostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SkiporbitRecentBlogPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
