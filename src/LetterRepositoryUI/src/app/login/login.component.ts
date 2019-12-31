﻿import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { AuthenticationService } from '../common/services/authentication.service';
import { Toast } from '../common/models/toast';
import { NgxSpinnerService } from 'ngx-spinner';


@Component({ templateUrl: 'login.component.html', styleUrls: ['login.component.css'] })
export class LoginComponent implements OnInit {
    loginForm: FormGroup;
    submitted = false;
    returnUrl: string;
    tosat: Toast;
    constructor(
        private formBuilder: FormBuilder,
        private route: ActivatedRoute,
        private router: Router,
        private authenticationService: AuthenticationService,
        private spinner: NgxSpinnerService) {
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
            .subscribe(
                data => {
                    const userObj: any = data;
                    if (userObj) {
                        localStorage.setItem('currentUser', JSON.stringify(userObj));
                        window.addEventListener('storage',
                            event => {
                                if (!document.hasFocus() && event.key === 'currentUser') {
                                    window.location.pathname = '/';
                                }
                            }, false);
                    }
                    this.spinner.hide();
                    this.router.navigate([this.returnUrl]);
                },
                error => {
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
}
