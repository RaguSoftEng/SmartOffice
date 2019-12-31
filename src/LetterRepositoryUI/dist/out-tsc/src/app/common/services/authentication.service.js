import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
import { throwError } from 'rxjs';
let AuthenticationService = class AuthenticationService {
    constructor(http) {
        this.http = http;
        this.baseUrl = environment.baseUrl;
    }
    login(Obj) {
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
            })
        };
        return this.http.post(this.baseUrl + 'Authentication/authenticate', JSON.stringify(Obj), httpOptions)
            .pipe(map(res => {
            return res;
        }), catchError(this.handleError));
    }
    logout() {
        const userObj = JSON.parse(localStorage.getItem('currentUser'));
        const baseUrl = environment.baseUrl + 'Authentication/Logout?token=' + userObj.token;
        return this.http.get(baseUrl).pipe(map(res => {
            return res;
        }), catchError(this.handleError));
    }
    handleError(error) {
        let errorMessage = '';
        if (error.error instanceof ErrorEvent) {
            errorMessage = error.error.message;
        }
        else {
            errorMessage = error.error.ExceptionMessage;
            console.log('Error Code: ' + error.status + '<br/>Message: ' + error.error.ExceptionMessage);
        }
        return throwError(errorMessage);
    }
};
AuthenticationService = tslib_1.__decorate([
    Injectable()
], AuthenticationService);
export { AuthenticationService };
//# sourceMappingURL=authentication.service.js.map