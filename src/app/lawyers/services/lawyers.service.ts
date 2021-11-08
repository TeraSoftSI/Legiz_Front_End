import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { Lawyer } from "../model/lawyer";
import { catchError, retry } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class LawyersService {
  // Lawyer Endpoint
  basePath = 'http://localhost:3000/api/v1/lawyers';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    })
  }
  constructor(private http: HttpClient) { }

  //API Error Handling
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

  // Create Lawyer
  create(item: any): Observable<Lawyer> {
    return this.http.post<Lawyer>(this.basePath, JSON.stringify(item),this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError));
  }

  //Get Lawyer by id
  getById(id: any): Observable<Lawyer> {
    return this.http.get<Lawyer>(`${this.basePath}/${id}`,this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError));
  }

  // Get All Lawyers
  getAll(): Observable<Lawyer>{
    return this.http.get<Lawyer>(this.basePath,this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError));
  }

  getBySpecialization(specialty: any):Observable<Lawyer>{
    return this.http.get<Lawyer>(`${this.basePath}?specialization=${specialty}`, this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError));
  }

  // Update Lawyers
  update(id: any, item: any): Observable<Lawyer>{
    return this.http.patch<Lawyer>(`${this.basePath}/${id}`, JSON.stringify(item),this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError));
  }

  // Delete Lawyers
  delete(id: any) {
    return this.http.delete(`${this.basePath}/${id}`, this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError));
  }
}
