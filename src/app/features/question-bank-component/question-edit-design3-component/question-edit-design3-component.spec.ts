import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionEditDesign3Component } from './question-edit-design3-component';

describe('QuestionEditDesign3Component', () => {
  let component: QuestionEditDesign3Component;
  let fixture: ComponentFixture<QuestionEditDesign3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QuestionEditDesign3Component],
    }).compileComponents();

    fixture = TestBed.createComponent(QuestionEditDesign3Component);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
