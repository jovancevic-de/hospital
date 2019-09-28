import { Component, OnInit, ViewChild } from '@angular/core';
import { Examination } from '../../model/examination';
import { ExaminationService } from '../../service/examination.service';
import { ExaminationSetComponent } from '../examination-set/examination-set.component';
import { Action } from '../../model/action';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'hsp-examination-editor',
  templateUrl: './examination-editor.component.html',
  styleUrls: ['./examination-editor.component.css']
})
export class ExaminationEditorComponent implements OnInit {

  @ViewChild(ExaminationSetComponent, { static: false })
  private examinationSet: ExaminationSetComponent;
  private isDoctorSelected: boolean = false;
  public idDoctor: number = 0;

  private date = new Date("01-10-2019 08:00");
  selectedItem: Examination = { id: null, doctor: { id: null, firstName: "", lastName: "" }, patient: { id: null, firstName: "", lastName: "" }, examinationDate: this.date };

  constructor(private examinationService: ExaminationService, private activatedRoute: ActivatedRoute) {
    this.activatedRoute.queryParams.subscribe(p => this.idDoctor = this.activatedRoute.snapshot.params.idDoctor);
    if (this.idDoctor) {
      this.isDoctorSelected = true;
    }
  }

  ngOnInit() {
    // this.activatedRoute.params.subscribe(routeParams => {
    //   this.examinationSet.refreshTable(routeParams.idDoctor)
    // });
  }



  handleActions(action: Action<Examination>) {
    if (action.type == "delete") {
      this.deleteItem(action.data);
    } else if (action.type == "update") {
      this.editItem(action.data);
    }
  }

  saveItem(item: Examination) {
    this.examinationService.saveExamination(item).subscribe(() => {
      this.examinationSet.refreshTable(this.examinationSet.idDoctor, this.examinationSet.page);
    });
  }

  editItem(item: Examination) {
    this.selectedItem = Object.assign({}, item);
  }

  deleteItem(item: Examination) {
    this.examinationService.deleteExamination(item.id).subscribe(() => {
      this.examinationSet.refreshTable(this.examinationSet.idDoctor, this.examinationSet.page);
    });
  }

}
