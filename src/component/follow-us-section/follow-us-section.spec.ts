import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FollowUsSection } from './follow-us-section';

describe('FollowUsSection', () => {
  let component: FollowUsSection;
  let fixture: ComponentFixture<FollowUsSection>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FollowUsSection]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FollowUsSection);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
