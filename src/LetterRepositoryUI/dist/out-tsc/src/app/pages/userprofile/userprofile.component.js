import * as tslib_1 from "tslib";
import { Component, ViewChild } from '@angular/core';
import { User } from '../../common/models/user';
import { Toast } from '../../common/models/toast';
import { Validators } from '@angular/forms';
export class MyErrorStateMatcher {
    constructor() {
        this.updateClicked = false;
    }
    isErrorState(control, form) {
        const invalidCtrl = !!(control && control.invalid && control.parent.dirty);
        const invalidParent = !!(control && control.dirty && control.parent && control.parent.invalid && control.parent.dirty);
        return this.updateClicked && (invalidCtrl || invalidParent);
    }
}
let UserprofileComponent = class UserprofileComponent {
    constructor(serv, router, activatedRoute, spinner, formBuilder) {
        this.serv = serv;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.spinner = spinner;
        this.formBuilder = formBuilder;
        this.isNewUser = false;
        this.matcher = new MyErrorStateMatcher();
        this.options = [{ Id: 1, Value: 'option1' }, { Id: 2, Value: 'option2' }, { Id: 3, Value: 'option3' }];
        this.branchs = [];
        this.titles = [];
        this.userLevels = [];
        this.user = new User();
        this.toast = new Toast();
        this.frmUserProfile = this.formBuilder.group({
            Title: [''],
            FullName: ['', Validators.compose([Validators.required, this.noWhitespaceValidator])],
            Email: ['', Validators.compose([Validators.required, Validators.email])],
            DisplayName: ['', Validators.compose([Validators.required, this.noWhitespaceValidator])],
            UserName: ['', Validators.compose([Validators.required, this.noWhitespaceValidator])],
            UserLevels: [''],
            Branch: [''],
            Password: [''],
            ConfirmPassword: ['']
        }, {
            validator: this.checkPasswords
        });
        this.activatedRoute
            .params
            .subscribe(params => {
            this.user.Id = Number.isNaN(params.id) ? 0 : Number(params.id);
            if (this.user.Id !== 0) {
                this.loadListValues(1);
                this.isNewUser = false;
            }
            else {
                this.isNewUser = true;
            }
        });
    }
    ngOnInit() {
    }
    checkPasswords(group) {
        const pass = group.controls.Password.value;
        const confirmPass = group.controls.ConfirmPassword.value;
        group.controls.ConfirmPassword.setErrors(pass === confirmPass ? null : { notSame: true });
        return pass === confirmPass ? null : { notSame: true };
    }
    noWhitespaceValidator(control) {
        const isWhitespace = (control.value || '').trim().length === 0;
        const isValid = !isWhitespace;
        return isValid ? null : { whitespace: true };
    }
    ngAfterViewInit() {
        if (this.user.Id !== 0) {
            this.loadUser(this.user.Id);
        }
        else {
            this.loadListValues(0);
        }
    }
    loadListValues(mode) {
        this.branchs = [];
        this.userLevels = [];
        this.titles = [];
        this.loadAllTitles(mode);
        this.loadAllUserLevels(mode);
        this.loadAllBranchs(mode);
    }
    loadAllUserLevels(mode) {
        this.serv.httpGetPairValues(4)
            .subscribe((data) => {
            this.userLevels = data;
            if (mode == 0) {
                setTimeout(() => {
                    this.userlevelelect.val(this.userLevels[0].Id.toString());
                }, 0);
            }
        }, (error) => {
            this.toast.Danger({ message: error });
        });
    }
    loadAllTitles(mode) {
        return this.serv.httpGetPairValues(3)
            .subscribe((data) => {
            this.titles = data;
            if (mode == 0) {
                setTimeout(() => {
                    this.titlesSelect.val(this.titles[0].Id.toString());
                }, 0);
            }
        }, (error) => {
            this.toast.Danger({ message: error });
        });
    }
    loadAllBranchs(mode) {
        this.serv.httpGetPairValues(1003)
            .subscribe((data) => {
            this.branchs = data;
            if (mode == 0) {
                setTimeout(() => {
                    this.branchSelect.val(this.branchs[0].Id.toString());
                }, 0);
            }
        }, (error) => {
            this.toast.Danger({ message: error });
        });
    }
    loadUser(id) {
        if (id != undefined && id != 0) {
            this.spinner.show();
            this.serv.httpGetData(1001, id)
                .subscribe((data) => {
                this.user = data;
                this.userlevelelect.val(this.user.UserLevel.toString());
                this.titlesSelect.val(this.user.Title.toString());
                // this.branchSelect.val(this.user.BranchId.toString());
                this.spinner.hide();
            }, (error) => {
                this.spinner.hide();
                this.toast.Danger({ message: error });
            });
        }
    }
    updateUser() {
        this.matcher.updateClicked = true;
        if (!this.frmUserProfile.invalid) {
            this.spinner.show();
            // this.user.BranchId = this.branchSelect.val();
            this.user.Title = this.titlesSelect.val();
            this.user.UserLevel = this.userlevelelect.val();
            this.serv.httpPost(this.user, 1001, this.user.Id)
                .subscribe((data) => {
                this.spinner.hide();
                this.toast.Success({ message: 'Successfully updated' });
                setTimeout(() => {
                    this.router.navigateByUrl('/user/1001/' + data);
                    this.router.routeReuseStrategy.shouldReuseRoute = () => {
                        return false;
                    };
                }, 0);
            }, (error) => {
                this.spinner.hide();
                this.toast.Danger({ message: error });
            });
        }
    }
    newUser() {
        this.router.navigateByUrl('/user/1001/0');
        this.router.routeReuseStrategy.shouldReuseRoute = () => {
            return false;
        };
    }
    back() {
        this.router.navigateByUrl('/user/1001');
    }
};
tslib_1.__decorate([
    ViewChild('branchSelect', { static: false })
], UserprofileComponent.prototype, "branchSelect", void 0);
tslib_1.__decorate([
    ViewChild('titlesSelect', { static: false })
], UserprofileComponent.prototype, "titlesSelect", void 0);
tslib_1.__decorate([
    ViewChild('userlevelelect', { static: false })
], UserprofileComponent.prototype, "userlevelelect", void 0);
UserprofileComponent = tslib_1.__decorate([
    Component({
        selector: 'app-userprofile',
        templateUrl: './userprofile.component.html',
        styleUrls: ['./userprofile.component.css']
    })
], UserprofileComponent);
export { UserprofileComponent };
//# sourceMappingURL=userprofile.component.js.map