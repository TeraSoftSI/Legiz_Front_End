import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { Layer } from "../../model/layer";
import { LayersService } from "../../services/layers.service";
import { MatTableDataSource } from "@angular/material/table";
import { NgForm } from "@angular/forms";
import { MatPaginator } from "@angular/material/paginator";
import * as _ from 'lodash';
import { MatSort } from "@angular/material/sort";

@Component({
  selector: 'app-layers',
  templateUrl: './layers.component.html',
  styleUrls: ['./layers.component.css']
})
export class LayersComponent implements OnInit, AfterViewInit {
  layerData: Layer;
  dataSource: MatTableDataSource<any>;
  displayedColumns: string[] = ['id', "name", "surname", "email", "birthday", "phone", "tuition", "specialty", "actions"];

  @ViewChild('layerForm', {static: false})
  layerForm!: NgForm;

  @ViewChild(MatPaginator, {static: true})
  paginator!: MatPaginator;

  @ViewChild(MatSort)
  sort!: MatSort;

  isEditMode = false;

  constructor(private layersServices: LayersService) {
    this.layerData = {} as Layer;
    this.dataSource = new MatTableDataSource<any>();
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

  ngOnInit(): void {
    this.dataSource.paginator = this.paginator;
    this.getAllLayers();
  }

  getAllLayers() {
    this.layersServices.getAll().subscribe((response: any) => {
      this.dataSource.data = response;
    });
  }

  editItem(element: Layer) {
    this.layerData = _.cloneDeep(element);
    this.isEditMode = true;
  }

  cancelEdit() {
    this.isEditMode = false;
    this.layerForm.resetForm();
  }

  deleteItem(id: number) {
    this.layersServices.delete(id).subscribe((response: any) => {
      this.dataSource.data = this.dataSource.data.filter((o: Layer) => {
        return o.id !== id? o : false;
      });
    });
    console.log(this.dataSource.data);
  }

  addLayer() {
    this.layersServices.create(this.layerData).subscribe((response: any) => {
      this.dataSource.data.push( {...response});
      this.dataSource.data = this.dataSource.data.map((o: any) => { return o; });
    });
  }

  updateLayer() {
    this.layersServices.update(this.layerData.id, this.layerData).subscribe((response: any) =>{
      this.dataSource.data = this.dataSource.data.map((o: Layer) => {
        if (o.id === response.id) {
          o = response;
        }
        return o;
      });
    });
  }

  onSubmit() {
    if (this.layerForm.form.valid) {
      if (this.isEditMode) {
        this.updateLayer();
      } else {
        this.addLayer();
      }
      this.cancelEdit();
    } else {
      console.log('Invalid data');
    }
  }
}
