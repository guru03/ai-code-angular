import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionEditDesignComponent } from './question-edit-design-component';

describe('QuestionEditDesignComponent', () => {
  let component: QuestionEditDesignComponent;
  let fixture: ComponentFixture<QuestionEditDesignComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QuestionEditDesignComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(QuestionEditDesignComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
