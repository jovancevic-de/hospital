import {Doctor} from './Doctor'
import {Patient} from './Patient'

export class Examination {
    private id: number;
	
	private doctor: Doctor;
	
	private patient: Patient;
	
	private examinationDate: Date;
}