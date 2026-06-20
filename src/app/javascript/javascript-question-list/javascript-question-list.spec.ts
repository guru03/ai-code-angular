import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JavascriptQuestionList } from './javascript-question-list';

describe('JavascriptQuestionList', () => {
  let component: JavascriptQuestionList;
  let fixture: ComponentFixture<JavascriptQuestionList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JavascriptQuestionList],
    }).compileComponents();

    fixture = TestBed.createComponent(JavascriptQuestionList);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
