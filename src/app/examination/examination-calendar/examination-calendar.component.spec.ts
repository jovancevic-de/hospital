import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExaminationCalendarComponent } from './examination-calendar.component';

describe('ExaminationCalendarComponent', () => {
  let component: ExaminationCalendarComponent;
  let fixture: ComponentFixture<ExaminationCalendarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExaminationCalendarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExaminationCalendarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
