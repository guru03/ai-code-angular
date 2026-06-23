import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CodingPracticeComponent } from './coding-practice-component';

describe('CodingPracticeComponent', () => {
  let component: CodingPracticeComponent;
  let fixture: ComponentFixture<CodingPracticeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CodingPracticeComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CodingPracticeComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
