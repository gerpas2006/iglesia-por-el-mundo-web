import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventosListPages } from './eventos-list-pages';

describe('EventosListPages', () => {
  let component: EventosListPages;
  let fixture: ComponentFixture<EventosListPages>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EventosListPages]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EventosListPages);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
