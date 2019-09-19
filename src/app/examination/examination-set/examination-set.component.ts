import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ExaminationService } from '../../service/examination.service';
//import { Action } from '../../model/Action';
import { Examination } from '../..//model/Examination';
import { Page } from '../../model/page';

@Component({
  selector: 'hsp-examination-set',
  templateUrl: './examination-set.component.html',
  styleUrls: ['./examination-set.component.css']
})
export class ExaminationSetComponent implements OnInit {

  // @Input("showActions")
  // showActions: boolean = false;

  // @Output("onAction")
  // private onAction: EventEmitter<Action<MenuItem>> = new EventEmitter<Action<MenuItem>>();

  examinationPage: Page<Examination> = {currentPage: 0, itemsPerPage: 0, totalItems: 0, items: []}
  private page: number = 1;
  
  constructor(private examinationService: ExaminationService) { }

  ngOnInit() {
    this.refreshTable();
  }

  
  public setPage(page: number) {
    this.page = page;
    this.refreshTable();
  }

  public refreshTable(page: number = 1) {
    this.examinationService.getExaminationPage(this.page).subscribe(examinationPage => {
      examinationPage.currentPage += 1;
      this.examinationPage = examinationPage;
    })
  }

  // action(action: Action<MenuItem>) {
  //   this.onAction.next(action);
  // }


}
