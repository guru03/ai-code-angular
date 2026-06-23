import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CodingDesign2Component } from './coding-design2-component';

describe('CodingDesign2Component', () => {
  let component: CodingDesign2Component;
  let fixture: ComponentFixture<CodingDesign2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CodingDesign2Component],
    }).compileComponents();

    fixture = TestBed.createComponent(CodingDesign2Component);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
