import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyCleaningEventsPage } from './my-cleaning-events.page';

describe('MyCleaningEventsPage', () => {
  let component: MyCleaningEventsPage;
  let fixture: ComponentFixture<MyCleaningEventsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyCleaningEventsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyCleaningEventsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
