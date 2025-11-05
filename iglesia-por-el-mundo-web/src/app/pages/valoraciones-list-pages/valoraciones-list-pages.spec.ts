import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValoracionesListPages } from './valoraciones-list-pages';

describe('ValoracionesListPages', () => {
  let component: ValoracionesListPages;
  let fixture: ComponentFixture<ValoracionesListPages>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ValoracionesListPages]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ValoracionesListPages);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
