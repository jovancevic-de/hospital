import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExaminationTableComponent } from './examination-table.component';

describe('ExaminationTableComponent', () => {
  let component: ExaminationTableComponent;
  let fixture: ComponentFixture<ExaminationTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExaminationTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExaminationTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
