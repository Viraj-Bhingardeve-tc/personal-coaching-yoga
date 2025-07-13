import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroCtaSection } from './hero-cta-section';

describe('HeroCtaSection', () => {
  let component: HeroCtaSection;
  let fixture: ComponentFixture<HeroCtaSection>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeroCtaSection]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeroCtaSection);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
