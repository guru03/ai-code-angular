import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CodingDesignComponent } from './coding-design-component';

describe('CodingDesignComponent', () => {
  let component: CodingDesignComponent;
  let fixture: ComponentFixture<CodingDesignComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CodingDesignComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CodingDesignComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
