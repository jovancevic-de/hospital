import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExaminationSetComponent } from './examination-set.component';

describe('ExaminationSetComponent', () => {
  let component: ExaminationSetComponent;
  let fixture: ComponentFixture<ExaminationSetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExaminationSetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExaminationSetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
