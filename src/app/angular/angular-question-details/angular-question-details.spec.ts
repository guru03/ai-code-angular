import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularQuestionDetails } from './angular-question-details';

describe('AngularQuestionDetails', () => {
  let component: AngularQuestionDetails;
  let fixture: ComponentFixture<AngularQuestionDetails>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AngularQuestionDetails]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AngularQuestionDetails);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
