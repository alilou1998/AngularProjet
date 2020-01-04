import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseUrl = 'http://localhost:7070/users';


  constructor(private http: HttpClient) { }

  getUser(matricule: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${matricule}`);
  }

  // tslint:disable-next-line: ban-types
  createUser(user: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}/add`, user);
  }

  deleteUser(matricule: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/cancel/${matricule}`, { responseType: 'text' });
  }

  // tslint:disable-next-line: ban-types
  updateUser(matricule: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/update/${matricule}`, value);
  }

  getUsersList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }
}
