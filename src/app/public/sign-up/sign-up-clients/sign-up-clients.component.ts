import { Component, OnInit } from '@angular/core';
import { Client } from "../../../clients/model/client";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {DialogClientsComponent} from "../dialog-clients/dialog-clients.component";
import {MatDialog} from "@angular/material/dialog";

@Component({
  selector: 'app-sign-up-clients',
  templateUrl: './sign-up-clients.component.html',
  styleUrls: ['./sign-up-clients.component.css']
})
export class SignUpClientsComponent implements OnInit {

  client: Client;
  id = 0;

  registerForm: FormGroup = this.formBuilder.group({
    name: ['', {validators: [Validators.required], updateOn: 'submit'}],
    lastName: ['', {validators: [Validators.required], updateOn: 'submit'}],
    email: ['', {validators: [Validators.required, Validators.email], updateOn: 'submit'}],
    password: ['', {validators: [Validators.required, Validators.minLength(8)], updateOn: 'submit'}]
  });


  constructor(private formBuilder: FormBuilder, private dialog: MatDialog) {
    this.client = {id: this.id += 1} as Client;
  }

  ngOnInit(): void {
  }


  equalClient(): void {
    this.client.name = this.registerForm.value.name;
    this.client.lastName = this.registerForm.value.lastName;
    this.client.email = this.registerForm.value.email;
    this.client.password = this.registerForm.value.password;
  }

  submitForm(): void {
    if (this.registerForm.valid) {
      this.equalClient();
      this.dialog.open(DialogClientsComponent);
    }
  }

}
