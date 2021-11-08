import {Component, Input, OnInit} from '@angular/core';
import {Client} from "../../../clients/model/client";
import {ConsultsService} from "../../services/consults.service";
import {AdvicesService} from "../../services/advices.service";
import {ClientsService} from "../../../clients/services/clients.service";

@Component({
  selector: 'app-advices',
  templateUrl: './advices.component.html',
  styleUrls: ['./advices.component.css']
})
export class AdvicesComponent implements OnInit {
  @Input() consults: Array<any> = [];
  @Input() legalAdvices: Array<any> = [];

  clientData: Client;

  constructor(private consultService: ConsultsService, private  advicesService: AdvicesService,
              private clientService: ClientsService) {
    this.clientData = {} as Client;
  }

  ngOnInit(): void {
    this.getAllConsults();

  }

  getAllConsults(){
    this.consultService.getAll().subscribe((data: any) => {
      this.consults = data;
      this.consults.map(consult => consult.clientName = data.clientName )
    })
  }

  getAllCAdvices(){
    this.advicesService.getAll().subscribe((data: any) => {
      this.legalAdvices = data;
    })
  }

}
