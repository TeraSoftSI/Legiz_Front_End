import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { LawyersService } from "../../services/lawyers.service";

@Component({
  selector: 'app-search-lawyer',
  templateUrl: './search-lawyer.component.html',
  styleUrls: ['./search-lawyer.component.css']
})
export class SearchLawyerComponent implements OnInit {
  @Input() lawyers: Array<any> = [];
  searchMode: any = false;

  //Search From
  formGroup: FormGroup = this.formBuilder.group({
    specialty: ['', {validators: [Validators.required], updateOn: 'submit'}]
  })

  constructor(private serviceLawyer:LawyersService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.getAllLawyers();
  }

  getAllLawyers() {
    this.serviceLawyer.getAll().subscribe((data:any) => {
      this.lawyers = data;
    })
  }

  getLawyerBySpecialization(specialty: any){
    this.serviceLawyer.getBySpecialization(specialty).subscribe((data:any) => {
      this.lawyers = data;
      console.log(this.lawyers);
    })
  }

  submitForm() {
    if (this.formGroup.valid) {
      this.lawyers= [];
      this.getLawyerBySpecialization(this.formGroup.value.specialty);
    }
  }

}
