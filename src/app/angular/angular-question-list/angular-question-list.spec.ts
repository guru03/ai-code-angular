import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularQuestionList } from './angular-question-list';

describe('AngularQuestionList', () => {
  let component: AngularQuestionList;
  let fixture: ComponentFixture<AngularQuestionList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AngularQuestionList]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AngularQuestionList);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
