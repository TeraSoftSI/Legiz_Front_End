import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-dialog-client',
  templateUrl: './dialog-client.component.html',
  styleUrls: ['./dialog-client.component.css']
})
export class DialogClientComponent implements OnInit {

  constructor(private root: Router) { }

  ngOnInit(): void { }

  goLogin(): void {
    this.root.navigate(['log-in']);
  }

}
