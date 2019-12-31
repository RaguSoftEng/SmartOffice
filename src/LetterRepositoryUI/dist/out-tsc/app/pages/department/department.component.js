import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Validators } from '@angular/forms';
import { Toast } from 'app/common/models/toast';
import { Department } from 'app/common/models/department';
export class MyErrorStateMatcher {
    constructor() {
        this.updateClicked = false;
    }
    isErrorState(control, form) {
        const invalidCtrl = !!(control && control.invalid);
        const invalidParent = !!(control && control.parent && control.parent.invalid && control.parent.dirty);
        return this.updateClicked && (invalidCtrl || invalidParent);
    }
}
let DepartmentComponent = class DepartmentComponent {
    constructor(serv, router, activatedRoute, formBuilder) {
        this.serv = serv;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.formBuilder = formBuilder;
        this.isNewDepartment = false;
        this.matcher = new MyErrorStateMatcher();
        this.department = new Department();
        this.toast = new Toast();
        this.frmDepartment = this.formBuilder.group({
            Id: [0, Validators.compose([])],
            ParentId: [0, Validators.compose([])],
            Departmentcode: ['', Validators.compose([Validators.required, this.noWhitespaceValidator])],
            DepartmentName: ['', Validators.compose([Validators.required, this.noWhitespaceValidator])],
            ExtendedDescription: ['', Validators.compose([])],
            DepStatus: [1, Validators.compose([])],
        });
        this.activatedRoute
            .params
            .subscribe(params => {
            this.department.Id = Number.isNaN(params['id']) ? 0 : Number(params['id']);
            if (this.department.Id !== 0) {
                this.isNewDepartment = false;
            }
            else {
                this.isNewDepartment = true;
            }
        });
    }
    ngOnInit() {
        if (this.department.Id !== 0) {
            this.loadDepartment(this.department.Id);
        }
    }
    noWhitespaceValidator(control) {
        const isWhitespace = (control.value || '').trim().length === 0;
        const isValid = !isWhitespace;
        return isValid ? null : { whitespace: true };
    }
    loadDepartment(id) {
        if (id !== undefined && id !== 0) {
            this.serv.httpGetData(1001, id)
                .subscribe((data) => {
                this.department = data;
            }, (error) => {
                this.toast.Danger({ message: error });
            });
        }
    }
    updateDepartment() {
        this.matcher.updateClicked = true;
        if (!this.frmDepartment.invalid) {
            this.serv.httpPost(this.department, 1001, this.department.Id)
                .subscribe((data) => {
                this.department.Id = Number(data['id']);
                this.toast.Success({ message: 'Successfully updated' });
                setTimeout(() => {
                    this.router.navigateByUrl('/department/1000/' + this.department.Id);
                    this.router.routeReuseStrategy.shouldReuseRoute = () => {
                        return false;
                    };
                }, 200);
            }, (error) => {
                this.toast.Danger({ message: error });
            });
        }
    }
    newDepartment() {
        this.router.navigateByUrl('/department/1001/0');
        this.router.routeReuseStrategy.shouldReuseRoute = () => {
            return false;
        };
    }
    back() {
        this.router.navigateByUrl('/department/1001');
    }
};
DepartmentComponent = tslib_1.__decorate([
    Component({
        selector: 'app-department',
        templateUrl: './department.component.html',
        styleUrls: ['./department.component.css']
    })
], DepartmentComponent);
export { DepartmentComponent };
//# sourceMappingURL=department.component.js.map