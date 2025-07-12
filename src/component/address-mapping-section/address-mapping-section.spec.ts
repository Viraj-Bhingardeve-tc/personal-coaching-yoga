import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddressMappingSection } from './address-mapping-section';

describe('AddressMappingSection', () => {
  let component: AddressMappingSection;
  let fixture: ComponentFixture<AddressMappingSection>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddressMappingSection]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddressMappingSection);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
