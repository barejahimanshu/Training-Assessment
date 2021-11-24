import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentSubjectComponent } from './parent-subject.component';

describe('ParentSubjectComponent', () => {
  let component: ParentSubjectComponent;
  let fixture: ComponentFixture<ParentSubjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParentSubjectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ParentSubjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
