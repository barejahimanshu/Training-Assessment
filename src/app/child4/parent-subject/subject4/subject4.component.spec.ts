import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Subject4Component } from './subject4.component';

describe('Subject4Component', () => {
  let component: Subject4Component;
  let fixture: ComponentFixture<Subject4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Subject4Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Subject4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
