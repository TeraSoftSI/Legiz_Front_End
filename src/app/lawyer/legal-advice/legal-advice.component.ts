import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-legal-advice',
  templateUrl: './legal-advice.component.html',
  styleUrls: ['./legal-advice.component.css']
})
export class LegalAdviceComponent implements OnInit {
  @Input() legalAdvices: Array<any> = []
  constructor() { }

  ngOnInit(): void {
  }

}
