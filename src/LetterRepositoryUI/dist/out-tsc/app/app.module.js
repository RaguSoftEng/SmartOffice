import * as tslib_1 from "tslib";
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxSpinnerModule } from 'ngx-spinner';
import { HttpClientModule } from '@angular/common/http';
import { ComponentsModule } from './components/components.module';
import { RouterModule } from '@angular/router';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { AuthenticationComponent } from './layouts/authentication/authentication.component';
import { AuthenticationModule } from './layouts/authentication/authentication.module';
import { AuthenticationService } from './common/services/authentication.service';
import { AuthGuard } from './common/services/auth.guard.service';
let AppModule = class AppModule {
};
AppModule = tslib_1.__decorate([
    NgModule({
        declarations: [
            AppComponent,
            AdminLayoutComponent,
            AuthenticationComponent
        ],
        imports: [
            BrowserModule,
            AppRoutingModule,
            BrowserAnimationsModule,
            FormsModule,
            ReactiveFormsModule,
            NgxSpinnerModule,
            HttpClientModule,
            ComponentsModule,
            RouterModule,
            AppRoutingModule,
            AuthenticationModule
        ],
        providers: [AuthenticationService, AuthGuard],
        bootstrap: [AppComponent]
    })
], AppModule);
export { AppModule };
//# sourceMappingURL=app.module.js.map