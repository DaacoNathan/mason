import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrivatemessagesPage } from './privatemessages.page';

describe('PrivatemessagesPage', () => {
  let component: PrivatemessagesPage;
  let fixture: ComponentFixture<PrivatemessagesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrivatemessagesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrivatemessagesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
