import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularDesign } from './angular-design';

describe('AngularDesign', () => {
  let component: AngularDesign;
  let fixture: ComponentFixture<AngularDesign>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AngularDesign]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AngularDesign);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
