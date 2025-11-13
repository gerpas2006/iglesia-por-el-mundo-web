import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioOracionesPage } from './formulario-oraciones-page';

describe('FormularioOracionesPage', () => {
  let component: FormularioOracionesPage;
  let fixture: ComponentFixture<FormularioOracionesPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormularioOracionesPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormularioOracionesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
