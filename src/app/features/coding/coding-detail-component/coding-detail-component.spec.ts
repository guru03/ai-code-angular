import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CodingDetailComponent } from './coding-detail-component';

describe('CodingDetailComponent', () => {
  let component: CodingDetailComponent;
  let fixture: ComponentFixture<CodingDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CodingDetailComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CodingDetailComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
