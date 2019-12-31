import { Component, OnInit, AfterViewInit } from '@angular/core';
import { User } from '../../common/models/user';
import { CommonService } from '../../common/services/common.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Pair } from '../../common/models/pair';
import { Toast } from '../../common/models/toast';
import { NgxSpinnerService } from 'ngx-spinner';
import { FormGroup, FormBuilder, Validators, FormControl, FormGroupDirective, NgForm } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';


export class MyErrorStateMatcher implements ErrorStateMatcher {
  updateClicked = false;
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const invalidCtrl = !!(control && control.invalid && control.parent.dirty);
    const invalidParent = !!(control && control.dirty && control.parent && control.parent.invalid && control.parent.dirty);
    return this.updateClicked && (invalidCtrl || invalidParent);
  }
}

@Component({
  selector: 'app-userprofile',
  templateUrl: './userprofile.component.html',
  styleUrls: ['./userprofile.component.css']
})
export class UserprofileComponent implements OnInit, AfterViewInit {
  user: User;
  isNewUser = false;
  toast: Toast;
  frmUserProfile: FormGroup;
  matcher = new MyErrorStateMatcher();
  departments: Pair[] = [];

  titles: any[] = [{ id: 'Mr.', value: 'Mr.' },
  { id: 'Mrs.', value: 'Mrs.' },
  { id: 'Ms.', value: 'Ms.' },
  { id: 'Miss.', value: 'Miss.' }];

  constructor(private serv: CommonService, private router: Router
    , private activatedRoute: ActivatedRoute, private spinner: NgxSpinnerService,
    private formBuilder: FormBuilder) {
    this.user = new User();
    this.toast = new Toast();
    this.frmUserProfile = this.formBuilder.group(
      {
        Title: ['Mr.'],
        FullName: ['', Validators.compose([Validators.required, this.noWhitespaceValidator])],
        Email: ['', Validators.compose([Validators.required, Validators.email])],
        DisplayName: ['', Validators.compose([Validators.required, this.noWhitespaceValidator])],
        UserName: ['', Validators.compose([Validators.required, this.noWhitespaceValidator])],
        UserLevel: [1],
        Branch: [''],
        Password: [''],
        ConfirmPassword: [''],
        DepartmentId: [1]
      },
      {
        validator: this.checkPasswords
      }
    );
    this.activatedRoute
      .params
      .subscribe(params => {
        this.user.Id = Number.isNaN(params.id) ? 0 : Number(params.id);
        if (this.user.Id !== 0) {
          this.isNewUser = false;
          this.loadUser(this.user.Id);
        } else {
          this.isNewUser = true;
        }
      });
  }

  ngOnInit() {
  }

  checkPasswords(group: FormGroup) {
    const pass = group.controls.Password.value;
    const confirmPass = group.controls.ConfirmPassword.value;
    group.controls.ConfirmPassword.setErrors(pass === confirmPass ? null : { notSame: true });
    return pass === confirmPass ? null : { notSame: true };
  }

  noWhitespaceValidator(control: FormControl) {
    const isWhitespace = (control.value || '').trim().length === 0;
    const isValid = !isWhitespace;
    return isValid ? null : { whitespace: true };
  }

  ngAfterViewInit() {

  }

  loadUser(id: number): void {
    if (id != undefined && id != 0) {
      this.spinner.show();
      this.serv.httpGetData(1002, id)
        .subscribe((data) => {
          this.user = data;
          this.spinner.hide();
        },
          (error) => {
            this.spinner.hide();
            this.toast.Danger({ message: error });
          });
    }
  }

  updateUser(): void {
    this.matcher.updateClicked = true;
    if (!this.frmUserProfile.invalid) {
      this.spinner.show();
      this.serv.httpPost(this.user, 1002, this.user.Id)
        .subscribe((data) => {
          this.spinner.hide();
          this.toast.Success({ message: 'Successfully updated' });
          setTimeout(() => {
            // tslint:disable-next-line: no-string-literal
            this.router.navigateByUrl('/user/1002/' + data['id']);
            this.router.routeReuseStrategy.shouldReuseRoute = () => {
              return false;
            };
          }, 0);
        },
          (error) => {
            this.spinner.hide();
            this.toast.Danger({ message: error });
          });
    }
  }

  newUser(): void {
    this.router.navigateByUrl('/user/1002/0');
    this.router.routeReuseStrategy.shouldReuseRoute = () => {
      return false;
    };
  }

  back(): void {
    this.router.navigateByUrl('/user/1002');
  }
}

