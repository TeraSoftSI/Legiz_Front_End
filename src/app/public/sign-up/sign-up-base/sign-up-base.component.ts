import { Component, OnInit } from '@angular/core';
import {root} from "rxjs/internal-compatibility";
import {Router} from "@angular/router";

@Component({
  selector: 'app-sign-up-base',
  templateUrl: './sign-up-base.component.html',
  styleUrls: ['./sign-up-base.component.css']
})
export class SignUpBaseComponent implements OnInit {

  visible: boolean = true;

  constructor(private root: Router) {
  }

  ngOnInit(): void {
  }

  isVisible(): void {
    this.visible= false;
  }

}

