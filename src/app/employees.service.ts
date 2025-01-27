import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EmployeesService {
  baseUrl: string = 'https://6572df5d192318b7db412dfe.mockapi.io/employees';
  constructor(private _httpClient: HttpClient) {}

  getEmployees(): Observable<any> {
    return this._httpClient.get(this.baseUrl);
  }

  getPaginatedEmployees(limit: number, page: number): Observable<any> {
    return this._httpClient.get(
      this.baseUrl + '?limit=' + limit + '&page=' + page
    );
  }

  deleteEmployee(id: number): Observable<any> {
    return this._httpClient.delete(this.baseUrl + '/' + id);
  }

  getEmployee(id: any): Observable<any> {
    return this._httpClient.get(this.baseUrl + '/' + id);
  }

  getFilteredEmployee(term: string): Observable<any> {
    return this._httpClient.get( this.baseUrl+"?filter="+ term);
    
  }
}
