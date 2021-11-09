import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {Meeting} from "../model/meeting";
import {MatTableDataSource} from "@angular/material/table";
import {NgForm} from "@angular/forms";
import {MatPaginator} from "@angular/material/paginator";
import {MeetingsService} from "../services/meetings.service";
import * as _ from 'lodash';

@Component({
  selector: 'app-meeting',
  templateUrl: './meeting.component.html',
  styleUrls: ['./meeting.component.css']
})
export class MeetingComponent implements OnInit, AfterViewInit {
  meetingData: Meeting;
  dataSource: MatTableDataSource<any>;
  displayedColumns: string[] = ['clientId','clientName', 'type', 'date','state', 'actions'];

  @ViewChild('meetingForm',{static: false})
  meetingForm!: NgForm;

  @ViewChild( MatPaginator,{static: true})
  paginator!: MatPaginator;

  isEditMode = false;

  constructor(private meetingService: MeetingsService) {
    this.meetingData = {} as Meeting;
    this.dataSource = new MatTableDataSource<any>();
  }

  ngOnInit(): void {
    this.dataSource.paginator = this.paginator;
    this.getAllMeetings();
  }

  ngAfterViewInit(): void {
  }

  getAllMeetings() {
    this.meetingService.getAll().subscribe((response: any) => {
      this.dataSource.data = response;
    });
  }

  editItem(element: Meeting) {
    this.meetingData = _.cloneDeep(element);
    this.isEditMode = true;
  }

  cancelEdit(){
    this.isEditMode = false;
    this.meetingForm.resetForm();
  }

  deleteItem(id: number) {
    this.meetingService.delete(id).subscribe((response: any) => {
      this.dataSource.data = this.dataSource.data.filter((o: Meeting) => {
        return o.id !== id ? o: false;
      });
    });
    console.log(this.dataSource.data);
  }

  addMeeting() {
    this.meetingService.create(this.meetingService).subscribe((response : any) => {
      this.dataSource.data.push({...response});
      this.dataSource.data = this.dataSource.data.map((o: any) => {return o; })
    });
  }

  updateMeeting() {
    this.meetingService.update(this.meetingData.id, this.meetingData).subscribe((response: any) => {
      this.dataSource.data = this.dataSource.data.map((o: Meeting) => {
        if (o.id === response.id) {
          o = response;
        }
        return o;
      });
      this.cancelEdit();
    });
  }

  onSubmit(){
    if (this.meetingForm.form.valid) {
      if (this.isEditMode) {
        this.updateMeeting();
      } else {
        this.addMeeting();
      }
      this.cancelEdit();
    } else {
      console.log('Invalid data');
    }
  }

}
