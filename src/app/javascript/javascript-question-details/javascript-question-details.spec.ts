import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JavascriptQuestionDetails } from './javascript-question-details';

describe('JavascriptQuestionDetails', () => {
  let component: JavascriptQuestionDetails;
  let fixture: ComponentFixture<JavascriptQuestionDetails>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JavascriptQuestionDetails],
    }).compileComponents();

    fixture = TestBed.createComponent(JavascriptQuestionDetails);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
