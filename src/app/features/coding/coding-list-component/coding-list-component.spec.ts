import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CodingListComponent } from './coding-list-component';

describe('CodingListComponent', () => {
  let component: CodingListComponent;
  let fixture: ComponentFixture<CodingListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CodingListComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CodingListComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
