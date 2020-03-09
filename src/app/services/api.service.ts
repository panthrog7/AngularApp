import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IEmployeeResult } from '../Entities/IEmployeeResult';
import { IEmployee } from '../Entities/IEmployee';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClient: HttpClient) { }

  getEmployees() {
    return this.httpClient.get<IEmployeeResult>('http://localhost:3000/db');
  }

  getEmployees1(id: number): Observable<IEmployee> {
    return this.httpClient.get<IEmployee>(`http://localhost:3000/employees/${id}`);
  }

  saveEmployee(employee: IEmployee): Observable<IEmployee> {

    return this.httpClient.post<IEmployee>('http://localhost:3000/employees', employee, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    });


  }

  updateEmployee(employee: IEmployee): Promise<void> {

    return this.httpClient.put<void>(`http://localhost:3000/employees/${employee.id}`, employee, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }).toPromise().then(response => {
      console.log(response);
    });

  }

  deleteEmployee(id: number): Observable<void> {

    return this.httpClient.delete<void>(`http://localhost:3000/employees/${id}`);
  }

}
