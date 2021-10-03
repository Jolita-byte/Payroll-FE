import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
/*import {HttpClient} from '@angular/common/http';*/

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {
  private getEmployeesUrl = "http://localhost:8080/employees";

  constructor(private http: HttpClient) { }

  getEmployees() {
    return this.http.get(this.getEmployeesUrl);
  }
}
