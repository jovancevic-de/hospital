import { Component, OnInit } from '@angular/core';
import { UseExistingWebDriver } from 'protractor/built/driverProviders';
import { Examination } from '../../model/examination';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { ExaminationService } from '../../service/examination.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Doctor } from '../../model/doctor';
import { Input } from '@angular/core';
//import { VALID, INVALID } from '@angular/forms/src/model';
import { RxFormGroup, RxFormBuilder, FormGroupExtension, RxwebValidators } from '@rxweb/reactive-form-validators';

@Component({
  selector: 'hsp-examination-edit',
  templateUrl: './examination-edit.component.html',
  styleUrls: ['./examination-edit.component.css']
})
export class ExaminationEditComponent implements OnInit {

  examination: Examination = new Examination();
  examinationForm: FormGroup;



  constructor(private examinationService: ExaminationService, private fb: FormBuilder, 
    private router: Router, private activeRoute: ActivatedRoute) {
    this.createForm();
    //this.SetForm(this.dat);
    
  }
}

ngOnInit() {
}

}
