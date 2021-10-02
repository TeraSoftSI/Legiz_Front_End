import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { Case } from "../../model/case";
import { CasesService } from "../../services/cases.service";
import { MatTableDataSource } from "@angular/material/table";
import { NgForm } from "@angular/forms";
import { MatPaginator } from "@angular/material/paginator";
import * as _ from 'lodash';
import { MatSort } from "@angular/material/sort";

@Component({
  selector: 'app-cases',
  templateUrl: './cases.component.html',
  styleUrls: ['./cases.component.css']
})
export class CasesComponent implements OnInit, AfterViewInit {
  caseData: Case;
  dataSource: MatTableDataSource<any>;
  displayedColumns: string[] = ['id', "name", "type", "description", "actions"];

  @ViewChild('caseForm', {static: false})
  caseForm!: NgForm;

  @ViewChild(MatPaginator, {static: true})
  paginator!: MatPaginator;

  @ViewChild(MatSort)
  sort!: MatSort;

  isEditMode = false;

  constructor(private casesServices: CasesService) {
    this.caseData = {} as Case;
    this.dataSource = new MatTableDataSource<any>();
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

  ngOnInit(): void {
    this.dataSource.paginator = this.paginator;
    this.getAllCases();
  }

  getAllCases() {
    this.casesServices.getAll().subscribe((response: any) => {
      this.dataSource.data = response;
    });
  }

  editItem(element: Case) {
    this.caseData = _.cloneDeep(element);
    this.isEditMode = true;
  }

  cancelEdit() {
    this.isEditMode = false;
    this.caseForm.resetForm();
  }

  deleteItem(id: number) {
    this.casesServices.delete(id).subscribe((response: any) => {
      this.dataSource.data = this.dataSource.data.filter((o: Case) => {
        return o.id !== id? o : false;
      });
    });
    console.log(this.dataSource.data);
  }

  addCase() {
    this.casesServices.create(this.caseData).subscribe((response: any) => {
      this.dataSource.data.push( {...response});
      this.dataSource.data = this.dataSource.data.map((o: any) => { return o; });
    });
  }

  updateCase() {
    this.casesServices.update(this.caseData.id, this.caseData).subscribe((response: any) =>{
      this.dataSource.data = this.dataSource.data.map((o: Case) => {
        if (o.id === response.id) {
          o = response;
        }
        return o;
      });
    });
  }

  onSubmit() {
    if (this.caseForm.form.valid) {
      if (this.isEditMode) {
        this.updateCase();
      } else {
        this.addCase();
      }
      this.cancelEdit();
    } else {
      console.log('Invalid data');
    }
  }
}
