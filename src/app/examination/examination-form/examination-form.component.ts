import { Component, OnInit } from '@angular/core';
import { UseExistingWebDriver } from 'protractor/built/driverProviders';
import { Examination } from '../../model/examination';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { ExaminationService } from '../../service/examination.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Doctor } from '../../model/Doctor';
import { Input, Output,EventEmitter } from '@angular/core';
//import { VALID, INVALID } from '@angular/forms/src/model';
import { RxFormGroup, RxFormBuilder, FormGroupExtension, RxwebValidators } from '@rxweb/reactive-form-validators';
import { Patient } from 'src/app/model/Patient';

@Component({
  selector: 'hsp-examination-form',
  templateUrl: './examination-form.component.html',
  styleUrls: ['./examination-form.component.css']
})
export class ExaminationFormComponent implements OnInit {

  private date = new Date ("01-10-2019 08:00");
  @Input("item")
  item: Examination = {id: null, doctor: {id: null, firstName:"", lastName:"" }, patient: {id: null, firstName:"", lastName:"" }, examinationDate: this.date};

  @Output("onSave")
  onSave: EventEmitter<Examination> = new EventEmitter<Examination>();
  
 
  examination: Examination = new Examination();
  examinationForm: FormGroup;
  patients: Patient[];
  doctors: Doctor[];


  constructor(private examinationService: ExaminationService, private fb: FormBuilder,
    private router: Router, private activatedRoute: ActivatedRoute) {
    this.createForm();
    //this.SetForm(this.dat);

  }


  ngOnInit() {

    this.examinationService.getPatients().subscribe(
      data => this.patients = data
    );

    this.examinationService.getDoctors().subscribe(
      data => this.doctors = data
    );

    

    // this.createForm();
  }

  ngOnChanges(){
    const id: number = this.item.id;

    if (id) {
      this.examinationService.getOneExamination(id).subscribe(examination => {
        this.examination = examination;
        // let doctorName: string = examination.doctor.firstName + examination.doctor.lastName;
        // let patientName: string = examination.patient.firstName + examination.patient.lastName;
        // let examinationDateSet: Date = examination.examinationDate;
        this.examinationForm.patchValue(this.examination);
      });
    } 
    
  }

  createForm() {
    this.examinationForm = this.fb.group({
      doctor: '',
      patient: '',
      examinationDate: ''
    });
  }

  onSubmit() {
    const submittedExamination: any = this.examinationForm.value;
    this.onSave.emit(submittedExamination);
    this.createForm();
    }
}
