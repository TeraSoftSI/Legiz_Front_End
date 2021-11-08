import { Component, OnInit } from '@angular/core';
import {Lawyer} from "../../../lawyers/model/lawyer";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-sign-up-lawyers',
  templateUrl: './sign-up-lawyers.component.html',
  styleUrls: ['./sign-up-lawyers.component.css']
})
export class SignUpLawyersComponent implements OnInit {
  lawyer: Lawyer;
  //FORM 1
  firstFormGroup: FormGroup = this.formBuilder.group({
    name: ['', {validators: [Validators.required], updateOn: 'submit'}],
    lastName: ['', {validators: [Validators.required], updateOn: 'submit'}],
    email: ['', {validators: [Validators.required, Validators.email], updateOn: 'submit'}],
    address: ['', {validators: [Validators.required], updateOn: 'submit'}],
    phone: ['', {validators: [Validators.required], updateOn: 'submit'}],
    university: ['', {validators: [Validators.required], updateOn: 'submit'}],
    specialization: ['', {validators: [Validators.required], updateOn: 'submit'}],
    priceLegalAdvice: ['', {validators: [Validators.required], updateOn: 'submit'}],
    priceLegalCustomContract: ['', {validators: [Validators.required], updateOn: 'submit'}],
    password: ['',{validators: [Validators.required, Validators.min(8)],updateOn: 'submit'}]
  });

  //FORM 2
  secondFormGroup: FormGroup = this.formBuilder.group({
    cardNumber: ['', {validators: [Validators.required,Validators.pattern('^(?:\\d{15,16}|\\d{4}(?:(?:\\s+\\d{4}){3}|\\s+\\d{6}\\s\\d{5}))$')], updateOn: 'submit'}],
    date: ['', {validators: [Validators.required], updateOn: 'submit'}],
    code: ['', {validators: [Validators.required], updateOn: 'submit'}]
  });

  constructor(private formBuilder: FormBuilder, private root:Router) {
    this.lawyer = {} as Lawyer;
  }

  ngOnInit(): void {
  }

  equalLawyer(): void {
    this.lawyer.name = this.firstFormGroup.value.name;
    this.lawyer.lastName = this.firstFormGroup.value.lastName;
    this.lawyer.email = this.firstFormGroup.value.email;
    this.lawyer.address = this.firstFormGroup.value.address;
    this.lawyer.phone = this.firstFormGroup.value.phone;
    this.lawyer.university = this.firstFormGroup.value.university;
    this.lawyer.specialization = this.firstFormGroup.value.specialization;
    this.lawyer.priceLegalAdvice = this.firstFormGroup.value.priceLegalAdvice;
    this.lawyer.priceCustomContract = this.firstFormGroup.value.priceCustomContract;
    this.lawyer.password = this.firstFormGroup.value.password;
  }

  goLogin(): void {
    console.log(this.lawyer);
    this.root.navigate(['log-in']);
  }

  submitForm(): void {
    if (this.firstFormGroup.valid) {
      this.equalLawyer();

    }
  }

}
