import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthenticationRoutes } from './authentication.routing';
import { LoginComponent } from '../../login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from 'app/materialodule';
import { NgxSpinnerModule } from 'ngx-spinner';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AuthenticationRoutes,
    MaterialModule,
    NgxSpinnerModule
  ],
  declarations: [LoginComponent]
})
export class AuthenticationModule { }
