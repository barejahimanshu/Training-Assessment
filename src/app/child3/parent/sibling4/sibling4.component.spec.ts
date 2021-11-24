import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Sibling4Component } from './sibling4.component';

describe('Sibling4Component', () => {
  let component: Sibling4Component;
  let fixture: ComponentFixture<Sibling4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Sibling4Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Sibling4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
