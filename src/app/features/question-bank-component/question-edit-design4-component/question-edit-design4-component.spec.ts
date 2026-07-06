import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionEditDesign4Component } from './question-edit-design4-component';

describe('QuestionEditDesign4Component', () => {
  let component: QuestionEditDesign4Component;
  let fixture: ComponentFixture<QuestionEditDesign4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QuestionEditDesign4Component],
    }).compileComponents();

    fixture = TestBed.createComponent(QuestionEditDesign4Component);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
