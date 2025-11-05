import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CitasListPages } from './citas-list-pages';

describe('CitasListPages', () => {
  let component: CitasListPages;
  let fixture: ComponentFixture<CitasListPages>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CitasListPages]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CitasListPages);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
