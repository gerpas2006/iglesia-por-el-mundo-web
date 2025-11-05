import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OracionesListPages } from './oraciones-list-pages';

describe('OracionesListPages', () => {
  let component: OracionesListPages;
  let fixture: ComponentFixture<OracionesListPages>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OracionesListPages]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OracionesListPages);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
