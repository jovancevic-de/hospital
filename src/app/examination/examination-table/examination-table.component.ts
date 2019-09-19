import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Examination } from '../../model/Examination';
import { Action } from '../../model/Action';


@Component({
  selector: 'hsp-examination-table',
  templateUrl: './examination-table.component.html',
  styleUrls: ['./examination-table.component.css']
})
export class ExaminationTableComponent implements OnInit {

  @Input("items")
  items: Examination[] = [];

  @Input("showActions")
  showActions: boolean = false;

  @Output("onAction")
  private onAction: EventEmitter<Action<Examination>> = new EventEmitter<Action<Examination>>();

  

  constructor() {
    
   }

  ngOnInit() {

  }

  delete(item: Examination) {
    this.onAction.emit({type: "delete", data: item});
  }

  update(item: Examination) {
    this.onAction.emit({type: "update", data: item});
  }
}


