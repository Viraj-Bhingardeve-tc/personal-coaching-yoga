import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DownloadBrochure } from './download-brochure';

describe('DownloadBrochure', () => {
  let component: DownloadBrochure;
  let fixture: ComponentFixture<DownloadBrochure>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DownloadBrochure]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DownloadBrochure);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
