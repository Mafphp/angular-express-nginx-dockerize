import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  // Define API
  apiURL = 'http://localhost:5000/api';
  // Http Options
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }  
  constructor(private http: HttpClient) { }

    // HttpClient API get() method => Fetch employees list
  getUsers(): Observable<any> {
    console.log('getUsers');
    return this.http.get<any>(this.apiURL + '/users')
  }
}
