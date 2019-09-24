import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ExaminationService } from '../../service/examination.service';
import { Action } from '../../model/Action';
import { Examination } from '../..//model/Examination';
import { Page } from '../../model/page';
import { ActivatedRoute} from '@angular/router';
import { Doctor } from 'src/app/model/Doctor';

@Component({
  selector: 'hsp-examination-set',
  templateUrl: './examination-set.component.html',
  styleUrls: ['./examination-set.component.css']
})
export class ExaminationSetComponent implements OnInit {

  @Input("showActions")
  showActions: boolean = true;

   @Output("onAction")
   private onAction: EventEmitter<Action<Examination>> = new EventEmitter<Action<Examination>>();

  examinationPage: Page<Examination> = {currentPage: 0, itemsPerPage: 0, totalItems: 0, items: []}
  public page: number = 1;
  private isDoctorSelected: boolean = false;
  public idDoctor: number = 0;
  private mW: string;
  private currentDoctor: Doctor;
  
  constructor(private activatedRoute: ActivatedRoute, private examinationService: ExaminationService) { 
    this.activatedRoute.queryParams.subscribe(p => this.idDoctor = this.activatedRoute.snapshot.params.idDoctor);
    if (this.idDoctor) {
      this.isDoctorSelected = true;
      
    } 
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(routeParams => {
      this.refreshTable(routeParams.idDoctor);
      //this.currentDoctor = this.examinationPage.items[0].doctor;
      // console.log("current Doctor :" + this.currentDoctor);

      //this.emiter.emit(this.currentDoctor)
    });  
    if (this.isDoctorSelected) {
      //this.refreshTable(this.idDoctor);
    } else {
      this.mW = "Welcome. Select doctor."
    }
    
  }

  ngOnChanges(){

  }
  
  public setPage(page: number) {
    this.page = page;
    this.refreshTable(this.idDoctor);
  }

  public refreshTable(idDoctor: number=1, page: number=1) {
    if (idDoctor) {
      this.examinationService.getExaminationPage(idDoctor, this.page).subscribe(examinationPage => {
        examinationPage.currentPage += 1;
        this.examinationPage = examinationPage;
      })
    }
  }

  action(action: Action<Examination>) {
    this.onAction.emit(action);
  }
  // public onDoctor(doctor: Doctor){
  //   this.currentDoctor = doctor;
  //   console.log("currentDoctor :" + this.currentDoctor)
  //   this.refreshTable(this.idDoctor, this.page);
  // }

}
