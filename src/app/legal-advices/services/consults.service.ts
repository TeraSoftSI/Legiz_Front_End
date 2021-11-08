import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { Consult } from "../model/consult";
import { catchError, retry } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class ConsultsService {
  // Consults Endpoint
  basePath = 'http://localhost:3000/api/v1/consults';

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

  // Create Consult
  create(item: any): Observable<Consult> {
    return this.http.post<Consult>(this.basePath, JSON.stringify(item),this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError));
  }

  //Get Consult by id
  getById(id: any): Observable<Consult> {
    return this.http.get<Consult>(`${this.basePath}/${id}`,this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError));
  }

  // Get All Consults
  getAll(): Observable<Consult>{
    return this.http.get<Consult>(this.basePath,this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError));
  }

  // Update Consults
  update(id: any, item: any): Observable<Consult>{
    return this.http.patch<Consult>(`${this.basePath}/${id}`, JSON.stringify(item),this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError));
  }

  // Delete Consults
  delete(id: any) {
    return this.http.delete(`${this.basePath}/${id}`, this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError));
  }
}
