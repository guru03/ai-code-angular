import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionEditDesign2Component } from './question-edit-design2-component';

describe('QuestionEditDesign2Component', () => {
  let component: QuestionEditDesign2Component;
  let fixture: ComponentFixture<QuestionEditDesign2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QuestionEditDesign2Component],
    }).compileComponents();

    fixture = TestBed.createComponent(QuestionEditDesign2Component);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
