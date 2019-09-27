import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Examination} from '../model/Examination';
import {Page} from '../model/Page';
import { Observable } from 'rxjs';
import {map} from 'rxjs/operators'
import { Doctor } from '../model/Doctor';
import { Patient } from '../model/Patient';

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

  public getOneExamination(idExamination: number) : Observable<Examination>{
    return this.httpClient.get<Examination>(this.examinationUrl + '/api/examinations/' + idExamination);
  }

  // get(id :number) :Observable<Pizza>{
	// 	return this.http.get(baseUrl + "/" + id).pipe( map(
	// 		data => { return new Pizza(data) }
	// 	));
	// }

	saveExamination(newExamination :Examination) :Observable<Examination>{
		return this.httpClient.post<Examination>(this.examinationUrl + "/api/examinations/", newExamination);
	}

	updateExamination(editedExamination :Examination) :Observable<Examination>{
		return this.httpClient.put<Examination>(this.examinationUrl + "/api/examinations/" + editedExamination.id, editedExamination);
	}

	deleteExamination(idExamination :number) :Observable<Examination> {
		return this.httpClient.delete<Examination>(this.examinationUrl + "/api/deleteExamination/" + idExamination);
  }
  
  getPatients():  Observable<Patient[]> {
    return this.httpClient.get<Patient[]>(this.examinationUrl + "/api/patients/" );
    
  }

  getDoctors(): Observable<Doctor[]> {
    return this.httpClient.get<Doctor[]>(this.examinationUrl + "/api/doctors/" );
  }
}
