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
  examinationUrl: string = "http://localhost:8080";
  constructor(private httpClient: HttpClient) { }

  public getExaminationPage(idDoctor:number, page: number | null = null) : Observable<Page<Examination>> {
    var options = {params: {}};
    if(page !== null) {
      options["params"]["page"] = ""+(page-1);
    }
    
    return this.httpClient.get<Page<Examination>>(this.examinationUrl + "/api/doctors/" + idDoctor + "/examinations", options)
  }

}
