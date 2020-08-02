import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MemberInfoPage } from './member-info.page';

describe('MemberInfoPage', () => {
  let component: MemberInfoPage;
  let fixture: ComponentFixture<MemberInfoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MemberInfoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MemberInfoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
