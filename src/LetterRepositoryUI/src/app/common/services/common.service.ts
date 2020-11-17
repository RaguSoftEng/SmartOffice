import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Toast } from '../../common/models/toast';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
import { throwError } from 'rxjs';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class CommonService {
  baseUrl = environment.baseUrl;
  UserToken: '';

  constructor(private httpClient: HttpClient, private router: Router) {
  }

  getController(formId) {
    const forms = [{
      formid: 1001
      , control: 'Department'
    }, {
      formid: 1002
      , control: 'User'
    },
    {
      formid: 1003
      , control: 'Letter'
    }, {
      formid: 0
      , control: 'Common'
    }, {
      formid: 1004
      , control: 'Visitor'
    },{
      formid: 1005
      , control: 'Visit'
    },{
      formid: 1006
      , control: 'Department/purpose'     
    }
    ];
    const frm = forms.filter(a => a.formid === parseInt(formId, 10));
    if (frm.length > 0) {
      return frm[0].control;
    } else {
      return '';
    }
  }

  httpCllaUrl(url: string): Observable<any> {
    this.getToken();
    const httpOptions = {
      headers: new HttpHeaders({
        Authorization: 'Bearer ' + this.UserToken,
        'Content-Type': 'application/json',
      })
    };
    return this.httpClient
      .get(this.baseUrl + url, httpOptions).pipe(
        map(res => res),
        catchError(this.handleError)
      );
  }

  httpGetData(formId: number, id: number): Observable<any> {
    this.getToken();
    const httpOptions = {
      headers: new HttpHeaders({
        Authorization: 'Bearer ' + this.UserToken,
        'Content-Type': 'application/json',
      })
    };
    const Controller = this.getController(formId);
    if (Controller !== '') {
      return this.httpClient
        .get(this.baseUrl + Controller + '/' + id, httpOptions)
        .pipe(
          map(res => res),
          catchError(this.handleError)
        );
    } else {
      throwError('Page not found...!');
    }
  }

  httpGetListValue(listId: number, isaParameter: boolean): Observable<any> {
    this.getToken();
    const httpOptions = {
      headers: new HttpHeaders({
        Authorization: 'Bearer ' + this.UserToken,
        'Content-Type': 'application/json',
      })
    };
    //const Controller = this.getController(formId);
    return this.httpClient
      .get(this.baseUrl + 'Common/listvalue/' + listId + '/' + isaParameter, httpOptions)
      .pipe(
        map(res => res),
        catchError(this.handleError)
      );
  }

  httpGetPairValues(id: number, filter: string = ''): Observable<any> {
    this.getToken();
    const httpOptions = {
      headers: new HttpHeaders({
        Authorization: 'Bearer ' + this.UserToken,
        'Content-Type': 'application/json',
      })
    };
    if (filter === '') {
      return this.httpClient
        .get(this.baseUrl + 'Common/GetPairValue?id=' + id, httpOptions).pipe(
          map(res => res),
          catchError(this.handleError)
        );
    } else {
      return this.httpClient
        .get(this.baseUrl + 'Common/GetPairValue?id=' + id + '&filter=' + filter, httpOptions).pipe(
          map(res => res),
          catchError(this.handleError)
        );
    }
  }

  httpGetList({ formId, start, limit, filter }): Observable<any> {
    this.getToken();
    const httpOptions = {
      headers: new HttpHeaders({
        Authorization: 'Bearer ' + this.UserToken,
        'Content-Type': 'application/json',
      })
    };
    const Controller = this.getController(formId);
    if (Controller === '') { return throwError('Page not found...!'); }
    const url = this.baseUrl + Controller + '/' + start
      + '/' + limit + '/' + filter;
    return this.httpClient
      .get(url, httpOptions).pipe(
        map(res => res),
        catchError(this.handleError)
      );
  }

  httpPost(Obj: any, formId: number, id: any) {
    this.getToken();
    const httpOptions = {
      headers: new HttpHeaders({
        Authorization: 'Bearer ' + this.UserToken,
        'Content-Type': 'application/json',
      })
    };
    const Controller = this.getController(formId);
    return this.httpClient.post(this.baseUrl + Controller + '/' + id, JSON.stringify(Obj), httpOptions)
      .pipe(
        map(res => res),
        catchError(this.handleError)
      );
  }

  httpPostByUrl(url: string, obj: any = null) {
    this.getToken();
    const httpOptions = {
      headers: new HttpHeaders({
        Authorization: 'Bearer ' + this.UserToken,
        'Content-Type': 'application/json',
      })
    };

    if (obj != null) {
      obj.ObId = undefined;
    }

    const body = (obj == undefined || obj == null) ? null : JSON.stringify(obj);
    return this.httpClient.post(this.baseUrl + url, body, httpOptions)
      .pipe(
        map(res => res),
        catchError(this.handleError)
      );
  }

  handleError(error) {
    if (error == undefined || error == null) {
      localStorage.removeItem('currentUser');
      return throwError('');
    }
    let errorMessage = '';
    if (error.status == 401) {
      errorMessage = 'Unauthorized Access...!';
      localStorage.removeItem('currentUser');
    }
    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = error.error.ExceptionMessage;
      console.log('Error Code: ' + error.status + '<br/>Message: ' + error.error.ExceptionMessage);
    }
    // new Toast().Danger(errorMessage);
    return throwError(errorMessage);
  }

  getToken() {
    if (localStorage.getItem('currentUser')) {
      const userObj: any = JSON.parse(localStorage.getItem('currentUser'));
      this.UserToken = userObj.Token;
    } else {
      this.router.navigateByUrl('/login');
      return false;
    }
  }
}
