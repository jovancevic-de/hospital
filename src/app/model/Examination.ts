import {Doctor} from './Doctor'
import {Patient} from './Patient'

export class Examination {
     id: number;
	
	 doctor: Doctor;
	
	 patient: Patient;
	
	 examinationDate: Date;

	constructor(obj?: any) {
		this.id = obj && obj.id || null;
		this.doctor = obj && obj.doctor || null;
		this.patient = obj && obj.patient || null;
		this.examinationDate = obj && obj.examinationDate || null;
	  }
}