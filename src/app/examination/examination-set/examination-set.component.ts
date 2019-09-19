import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ExaminationService } from '../../service/examination.service';
import { Action } from '../../model/Action';
import { Examination } from '../..//model/Examination';
import { Page } from '../../model/page';
import { ActivatedRoute} from '@angular/router';

@Component({
  selector: 'hsp-examination-set',
  templateUrl: './examination-set.component.html',
  styleUrls: ['./examination-set.component.css']
})
export class ExaminationSetComponent implements OnInit {

  @Input("showActions")
  showActions: boolean = false;

   @Output("onAction")
   private onAction: EventEmitter<Action<Examination>> = new EventEmitter<Action<Examination>>();

  examinationPage: Page<Examination> = {currentPage: 0, itemsPerPage: 0, totalItems: 0, items: []}
  private page: number = 1;
  private isDoctorSelected: boolean = false;
  private idDoctor: number = 0;
  private mW: string;
  
  constructor(private activatedRoute: ActivatedRoute, private examinationService: ExaminationService) { 
    this.activatedRoute.queryParams.subscribe(p => this.idDoctor = this.activatedRoute.snapshot.params.idDoctor);
    if (this.idDoctor) {
      this.isDoctorSelected = true;
      
    } 
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(routeParams => {
      this.refreshTable(routeParams.idDoctor);
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

  public refreshTable(idDoctor: number, page: number=1) {
    this.examinationService.getExaminationPage(idDoctor, this.page).subscribe(examinationPage => {
      examinationPage.currentPage += 1;
      this.examinationPage = examinationPage;
    })
  }

  // action(action: Action<MenuItem>) {
  //   this.onAction.next(action);
  // }


}
