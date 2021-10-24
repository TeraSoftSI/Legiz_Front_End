import { Component, OnInit } from '@angular/core';
import {LawyerService} from "../services/lawyer.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-card-form-lawyer',
  templateUrl: './card-form-lawyer.component.html',
  styleUrls: ['./card-form-lawyer.component.css']
})
export class CardFormLawyerComponent implements OnInit {
  lawyers: Array<any> = [];

  //FORM
  formGroup: FormGroup = this.formBuilder.group({
    specialty: ['', {validators: [Validators.required], updateOn: 'submit'}],
    district: ['', {validators: [Validators.required], updateOn: 'submit'}],
  });

  constructor(private serviceLawyer: LawyerService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.getAllLawyers();
  }

  getAllLawyers() {
    this.serviceLawyer.getAll().subscribe((data:any) => {
      this.lawyers = data;
    })
  }

  getLawyerBySpecialtyAndDistrict(specialty: any, district: any) {
    this.serviceLawyer.getBySpecialtyAndDistrict(specialty,district).subscribe((data:any) => {
      this.lawyers = data;
      console.log(this.lawyers);
    })
  }

  submitForm() {
    if (this.formGroup.valid) {
      this.lawyers = [];
      this.getLawyerBySpecialtyAndDistrict(this.formGroup.value.specialty,this.formGroup.value.district);
    }
  }

}
