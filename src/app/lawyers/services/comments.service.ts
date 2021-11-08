import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from "@angular/common/http";
import { catchError, retry } from "rxjs/operators";
import { Observable, throwError } from "rxjs";
import { Commentary } from "../model/commentary";

@Injectable({
  providedIn: 'root'
})
export class CommentsService {
  // Comments Endpoint
  basePath = 'http://localhost:3000/api/v1/Comments';

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
      console.log(`An error occurred: ${error.error.message}`);
    } else {
      console.error(
        `Backend returned code ${error.status}, body was: ${error.error}`
      );
    }
    // Return Observable with Error Message to Client
    return throwError('Something happened with request, please try again later');
  }

  // Create Commentary
  create(item: any): Observable<Commentary> {
    return this.http.post<Commentary>(this.basePath, JSON.stringify(item),this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError));
  }

  //Get Commentary by id
  getById(id: any): Observable<Commentary> {
    return this.http.get<Commentary>(`${this.basePath}/${id}`,this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError));
  }

  // Get All Comments
  getAll(): Observable<Commentary>{
    return this.http.get<Commentary>(this.basePath,this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError));
  }

  // Update Comments
  update(id: any, item: any): Observable<Commentary>{
    return this.http.patch<Commentary>(`${this.basePath}/${id}`, JSON.stringify(item),this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError));
  }

  // Delete Comments
  delete(id: any) {
    return this.http.delete(`${this.basePath}/${id}`, this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError));
  }
}
