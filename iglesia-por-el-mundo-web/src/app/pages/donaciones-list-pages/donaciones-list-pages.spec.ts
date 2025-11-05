import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DonacionesListPages } from './donaciones-list-pages';

describe('DonacionesListPages', () => {
  let component: DonacionesListPages;
  let fixture: ComponentFixture<DonacionesListPages>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DonacionesListPages]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DonacionesListPages);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
