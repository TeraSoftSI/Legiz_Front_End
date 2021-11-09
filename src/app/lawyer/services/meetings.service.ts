import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from "@angular/common/http";
import {Observable, throwError} from "rxjs";
import {Meeting} from "../model/meeting";
import {catchError, retry} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class MeetingsService {
  // Meeting Endpoint
  basePath = 'http://localhost:3000/api/v1/meetings';

  httpOptions ={
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    })
  }
  constructor(private http: HttpClient) { }

  //Error handling
  handleError(error:HttpErrorResponse) {
    if (error.error instanceof ErrorEvent){
      //Default Error handling
      console.log(`An error ocurred: ${error.error.message}`);
    } else {
      console.error(
        `Backend returned code ${error.status}, body was: ${error.error}`
      );
    }
    // Return Observable with Error Message to Client
    return throwError('Something happened with request, please try again later');
  }

  // Create Meeting
  create(item: any): Observable<Meeting> {
    return this.http.post<Meeting>(this.basePath, JSON.stringify(item),this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError));
  }

  //Get by ID
  getById(id: any): Observable<Meeting> {
    return this.http.get<Meeting>(`${this.basePath}/${id}`,this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError));
  }

  // Get All Meetings
  getAll(): Observable<Meeting>{
    return this.http.get<Meeting>(this.basePath,this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError));
  }

  // Update Students
  update(id: any, item: any): Observable<Meeting>{
    return this.http.patch<Meeting>(`${this.basePath}/${id}`, JSON.stringify(item),this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError));
  }

  // Delete Meeting
  delete(id: any) {
    return this.http.delete(`${this.basePath}/${id}`, this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError));
  }

}
