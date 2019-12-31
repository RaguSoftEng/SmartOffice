﻿import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
import { Observable, throwError } from 'rxjs';
@Injectable()
export class AuthenticationService {
  baseUrl = environment.baseUrl;
  constructor(private http: HttpClient, ) { }
  login(Obj: any) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      })
    };
    return this.http.get(this.baseUrl + 'Authentication/authenticate?UserName=' + Obj.Username + '&Password=' + Obj.Password, httpOptions)
      .pipe(
        map(res => {
          return res;
        }),
        catchError(this.handleError)
      );
  }

  logout(): Observable<any> {
    const userObj: any = JSON.parse(localStorage.getItem('currentUser'));
    const baseUrl = environment.baseUrl + 'Authentication/Logout?token=' + userObj.token;
    return this.http.get(baseUrl).pipe(
      map(res => {
        return res;
      }),
      catchError(this.handleError)
    );
  }

  handleError(error) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = error.error.ExceptionMessage;
      console.log('Error Code: ' + error.status + '<br/>Message: ' + error.error.ExceptionMessage);
    }
    return throwError(errorMessage);
  }
}
