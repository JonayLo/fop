import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectedBeachPage } from './selected-beach.page';

describe('SelectedBeachPage', () => {
  let component: SelectedBeachPage;
  let fixture: ComponentFixture<SelectedBeachPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectedBeachPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectedBeachPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
