import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {MatDialog} from "@angular/material/dialog";
import {DialogClientComponent} from "../dialog-client/dialog-client.component";
import {Client} from "../model/client";

@Component({
  selector: 'app-form-client',
  templateUrl: './form-client.component.html',
  styleUrls: ['./form-client.component.css']
})
export class FormClientComponent implements OnInit {
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

  iqualClient(): void {
    this.client.name = this.registerForm.value.name;
    this.client.lastName = this.registerForm.value.lastName;
    this.client.email = this.registerForm.value.email;
    this.client.password = this.registerForm.value.password;
  }

  submitForm(): void {
    if (this.registerForm.valid) {
      this.iqualClient();
      this.dialog.open(DialogClientComponent);
    }
  }
}
