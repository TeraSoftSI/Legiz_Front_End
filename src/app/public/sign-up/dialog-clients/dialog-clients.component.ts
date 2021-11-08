import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-dialog-clients',
  templateUrl: './dialog-clients.component.html',
  styleUrls: ['./dialog-clients.component.css']
})
export class DialogClientsComponent implements OnInit {

  constructor(private root:Router) { }

  ngOnInit(): void {
  }

  goLogin(): void{
    this.root.navigate(['login']);
  }

}
