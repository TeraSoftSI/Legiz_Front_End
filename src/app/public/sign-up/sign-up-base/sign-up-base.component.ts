import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sign-up-base',
  templateUrl: './sign-up-base.component.html',
  styleUrls: ['./sign-up-base.component.css']
})
export class SignUpBaseComponent implements OnInit {

  visible: boolean = true;

  constructor() {
  }

  ngOnInit(): void {
  }

  isVisible(): void {
    this.visible= false;
  }

}
