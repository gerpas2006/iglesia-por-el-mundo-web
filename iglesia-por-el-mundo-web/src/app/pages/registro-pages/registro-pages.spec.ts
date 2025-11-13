import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroPages } from './registro-pages';

describe('RegistroPages', () => {
  let component: RegistroPages;
  let fixture: ComponentFixture<RegistroPages>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegistroPages]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistroPages);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
