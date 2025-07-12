import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntroductorySection } from './introductory-section';

describe('IntroductorySection', () => {
  let component: IntroductorySection;
  let fixture: ComponentFixture<IntroductorySection>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IntroductorySection]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IntroductorySection);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
