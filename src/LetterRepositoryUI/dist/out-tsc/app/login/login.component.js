import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { Toast } from '../common/models/toast';
let LoginComponent = class LoginComponent {
    constructor(formBuilder, route, router, authenticationService, spinner) {
        this.formBuilder = formBuilder;
        this.route = route;
        this.router = router;
        this.authenticationService = authenticationService;
        this.spinner = spinner;
        this.submitted = false;
        this.tosat = new Toast();
    }
    ngOnInit() {
        this.loginForm = this.formBuilder.group({
            Username: ['', Validators.required],
            Password: ['', Validators.required],
            isRememberMe: [0]
        });
        if (localStorage.getItem('currentUser') != null) {
            this.authenticationService.logout();
        }
        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || 'dashboard';
    }
    // convenience getter for easy access to form fields
    get f() { return this.loginForm.controls; }
    enterkeyEvent(event) {
        if (event.keyCode == 13) {
            this.onSubmit();
        }
    }
    onSubmit() {
        // stop here if form is invalid
        if (this.loginForm.invalid) {
            return;
        }
        this.submitted = true;
        this.spinner.show();
        this.authenticationService.login(this.loginForm.value)
            .pipe(first())
            .subscribe(data => {
            const userObj = data;
            if (userObj) {
                localStorage.setItem('currentUser', JSON.stringify(userObj));
                window.addEventListener('storage', event => {
                    if (!document.hasFocus() && event.key === 'currentUser') {
                        window.location.pathname = '/';
                    }
                }, false);
            }
            this.spinner.hide();
            this.router.navigate([this.returnUrl]);
        }, error => {
            this.submitted = false;
            this.spinner.hide();
            this.tosat.Danger({
                message: error, placement: {
                    from: 'top',
                    align: 'center'
                }
            });
        });
    }
};
LoginComponent = tslib_1.__decorate([
    Component({ templateUrl: 'login.component.html', styleUrls: ['login.component.css'] })
], LoginComponent);
export { LoginComponent };
//# sourceMappingURL=login.component.js.map