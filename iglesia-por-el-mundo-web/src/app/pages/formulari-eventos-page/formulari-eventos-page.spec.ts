import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormulariEventosPage } from './formulari-eventos-page';

describe('FormulariEventosPage', () => {
  let component: FormulariEventosPage;
  let fixture: ComponentFixture<FormulariEventosPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormulariEventosPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormulariEventosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
