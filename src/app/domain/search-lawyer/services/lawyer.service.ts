import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class LawyerService {

  basePath="http://localhost:3000/lawyer";


  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get(`${this.basePath}`);
  }

  getBySpecialtyAndDistrict(specialty: any, district: any) {
    return this.http.get(`${this.basePath}?specialty=${specialty}&district=${district}`);
  }
}
