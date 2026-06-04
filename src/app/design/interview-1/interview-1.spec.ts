import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Interview1 } from './interview-1';

describe('Interview1', () => {
  let component: Interview1;
  let fixture: ComponentFixture<Interview1>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Interview1]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Interview1);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
