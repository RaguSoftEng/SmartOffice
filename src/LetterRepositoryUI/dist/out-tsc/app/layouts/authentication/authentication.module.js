import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthenticationRoutes } from './authentication.routing';
import { LoginComponent } from '../../login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from 'app/materialodule';
import { NgxSpinnerModule } from 'ngx-spinner';
let AuthenticationModule = class AuthenticationModule {
};
AuthenticationModule = tslib_1.__decorate([
    NgModule({
        imports: [
            CommonModule,
            ReactiveFormsModule,
            AuthenticationRoutes,
            MaterialModule,
            NgxSpinnerModule
        ],
        declarations: [LoginComponent]
    })
], AuthenticationModule);
export { AuthenticationModule };
//# sourceMappingURL=authentication.module.js.map