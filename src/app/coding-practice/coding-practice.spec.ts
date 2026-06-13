import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CodingPractice } from './coding-practice';

describe('CodingPractice', () => {
  let component: CodingPractice;
  let fixture: ComponentFixture<CodingPractice>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CodingPractice]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CodingPractice);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
