import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { Advice } from "../model/advice";
import { catchError, retry } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class AdvicesService {
  // Advices Endpoint
  basePath = 'http://localhost:3000/api/v1/Advices';

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

  // Create Advice
  create(item: any): Observable<Advice> {
    return this.http.post<Advice>(this.basePath, JSON.stringify(item),this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError));
  }

  //Get Advice by id
  getById(id: any): Observable<Advice> {
    return this.http.get<Advice>(`${this.basePath}/${id}`,this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError));
  }

  // Get All Advices
  getAll(): Observable<Advice>{
    return this.http.get<Advice>(this.basePath,this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError));
  }

  // Update Advices
  update(id: any, item: any): Observable<Advice>{
    return this.http.patch<Advice>(`${this.basePath}/${id}`, JSON.stringify(item),this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError));
  }

  // Delete Advices
  delete(id: any) {
    return this.http.delete(`${this.basePath}/${id}`, this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError));
  }
}
