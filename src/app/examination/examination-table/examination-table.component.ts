import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Examination } from '../../model/Examination';
import { Action } from '../../model/Action';
import { Doctor } from 'src/app/model/Doctor';


@Component({
  selector: 'hsp-examination-table',
  templateUrl: './examination-table.component.html',
  styleUrls: ['./examination-table.component.css']
})
export class ExaminationTableComponent implements OnInit {

   

  @Input("items")
  items: Examination[] = [];

  @Input("showActions")
  ShowActions: boolean = true;

  @Output("onAction")
  private onAction: EventEmitter<Action<Examination>> = new EventEmitter<Action<Examination>>();

  @Output() emiter: EventEmitter<Doctor>

  private currentDoctor: Doctor;

  
  constructor() {
    this.emiter = new EventEmitter();
    
   }

  ngOnInit() {
    
  }

  delete(item: Examination) {
    this.onAction.emit({type: "delete", data: item});
  }

  edit(item: Examination) {
    this.onAction.emit({type: "update", data: item});
  }

  // onSort(criteria: string) {
	// 	// tslint:disable-next-line:indent
	// 	// tslint:disable-next-line:indent
	// 	// tslint:disable-next-line:indent
	// 	if (this.params.$orderby === criteria) {
	// 		// tslint:disable-next-line:indent
	// 		if (this.params.$orderby.includes('desc')) {
	// 			this.params.$orderby = criteria;
	// 		} else {
	// 			this.params.$orderby = criteria + ' desc';
	// 		}
	// 	} else {
	// 		this.params.$orderby = criteria;
  //   }
	// 	this.refreshUsers();
  // }
}


