import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionBankEditComponent } from './question-bank-edit-component';

describe('QuestionBankEditComponent', () => {
  let component: QuestionBankEditComponent;
  let fixture: ComponentFixture<QuestionBankEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QuestionBankEditComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(QuestionBankEditComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
