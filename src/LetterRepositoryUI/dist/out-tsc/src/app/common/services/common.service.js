import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
import { throwError } from 'rxjs';
let CommonService = class CommonService {
    constructor(httpClient, router) {
        this.httpClient = httpClient;
        this.router = router;
        this.baseUrl = environment.baseUrl;
    }
    getController(formId) {
        const forms = [{
                formid: 1001,
                control: 'Department'
            }, {
                formid: 1002,
                control: 'User'
            }
        ];
        const frm = forms.filter(a => a.formid === parseInt(formId, 10));
        return frm[0].control;
    }
    httpCllaUrl(url) {
        this.getToken();
        const httpOptions = {
            headers: new HttpHeaders({
                Authorization: 'Bearer ' + this.UserToken,
                'Content-Type': 'application/json',
            })
        };
        return this.httpClient
            .get(this.baseUrl + url, httpOptions).pipe(map(res => res), catchError(this.handleError));
    }
    httpGetData(formId, id) {
        this.getToken();
        const httpOptions = {
            headers: new HttpHeaders({
                Authorization: 'Bearer ' + this.UserToken,
                'Content-Type': 'application/json',
            })
        };
        const Controller = this.getController(formId);
        return this.httpClient
            .get(this.baseUrl + Controller + '/' + id, httpOptions)
            .pipe(map(res => res), catchError(this.handleError));
    }
    httpGetPairValues(id, filter = '') {
        this.getToken();
        const httpOptions = {
            headers: new HttpHeaders({
                Authorization: 'Bearer ' + this.UserToken,
                'Content-Type': 'application/json',
            })
        };
        if (filter === '') {
            return this.httpClient
                .get(this.baseUrl + 'Common/GetPairValue?id=' + id, httpOptions).pipe(map(res => res), catchError(this.handleError));
        }
        else {
            return this.httpClient
                .get(this.baseUrl + 'Common/GetPairValue?id=' + id + '&filter=' + filter, httpOptions).pipe(map(res => res), catchError(this.handleError));
        }
    }
    httpGetList({ formId, start, limit, filter }) {
        this.getToken();
        const httpOptions = {
            headers: new HttpHeaders({
                Authorization: 'Bearer ' + this.UserToken,
                'Content-Type': 'application/json',
            })
        };
        const Controller = this.getController(formId);
        const url = this.baseUrl + Controller + '/' + start
            + '/' + limit + '/' + filter;
        return this.httpClient
            .get(url, httpOptions).pipe(map(res => res), catchError(this.handleError));
    }
    httpPost(Obj, formId, id) {
        this.getToken();
        const httpOptions = {
            headers: new HttpHeaders({
                Authorization: 'Bearer ' + this.UserToken,
                'Content-Type': 'application/json',
            })
        };
        const Controller = this.getController(formId);
        if (id === 0) {
            return this.httpClient.post(this.baseUrl + Controller, JSON.stringify(Obj), httpOptions)
                .pipe(map(res => res), catchError(this.handleError));
        }
        else {
            return this.httpClient.put(this.baseUrl + Controller + '/put/' + id, JSON.stringify(Obj), httpOptions)
                .pipe(map(res => res), catchError(this.handleError));
        }
    }
    handleError(error) {
        let errorMessage = '';
        if (error.status == 401) {
            errorMessage = 'Unauthorized Access...!';
            localStorage.removeItem('currentUser');
        }
        if (error.error instanceof ErrorEvent) {
            errorMessage = error.error.message;
        }
        else {
            errorMessage = error.error.ExceptionMessage;
            console.log('Error Code: ' + error.status + '<br/>Message: ' + error.error.ExceptionMessage);
        }
        // new Toast().Danger(errorMessage);
        return throwError(errorMessage);
    }
    getToken() {
        if (localStorage.getItem('currentUser')) {
            const userObj = JSON.parse(localStorage.getItem('currentUser'));
            this.UserToken = userObj.token;
        }
        else {
            this.router.navigateByUrl('/login');
            return false;
        }
    }
};
CommonService = tslib_1.__decorate([
    Injectable({
        providedIn: 'root'
    })
], CommonService);
export { CommonService };
//# sourceMappingURL=common.service.js.map