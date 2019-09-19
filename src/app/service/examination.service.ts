import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Examination} from '../model/Examination';
import {Page} from '../model/Page';
import { Observable } from 'rxjs';
import { Doctor } from '../model/Doctor';

@Injectable({
  providedIn: 'root'
})
export class ExaminationService {
  examinationUrl: string = "api/doctors/";
  constructor(private httpClient: HttpClient) { }

  public getExaminationPage(i:number, page: number | null = null) : Observable<Page<Examination>> {
    var options = {params: {}};
    if(page !== null) {
      options["params"]["page"] = ""+(page-1);
    }
    this.examinationUrl = this.examinationUrl + i + "/examinations";
    return this.httpClient.get<Page<Examination>>(this.examinationUrl, options)
  }

}
