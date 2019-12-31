import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Visitor } from '../../common/models/visitor';
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
let VisitorsdiaryComponent = class VisitorsdiaryComponent {
    constructor(serv, router, activatedRoute, spinner, formBuilder) {
        this.serv = serv;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.spinner = spinner;
        this.formBuilder = formBuilder;
        this.isNewVisitor = false;
        this.matcher = new MyErrorStateMatcher();
        this.visitor = new Visitor();
        this.toast = new Toast();
        this.frmVisitor = this.formBuilder.group({
            Title: ['Mr.'],
            FullName: ['', Validators.compose([Validators.required, this.noWhitespaceValidator])],
            NicNo: [''],
            ContactNo: [''],
            Address: [''],
            Purpose: [''],
            DepartmentId: [1],
            VisitDate: [{ value: new Date(), disabled: true }],
            IsWorkDone: [false],
            Progress: [{ value: 'Pending', disabled: true }],
            VisitorToken: [{ value: 'AUTO GENERATED', disabled: true }]
        });
        this.activatedRoute
            .params
            .subscribe(params => {
            this.visitor.Id = Number.isNaN(params.id) ? 0 : Number(params.id);
            if (this.visitor.Id !== 0) {
                this.isNewVisitor = false;
                this.loadVisitor(this.visitor.Id);
            }
            else {
                this.isNewVisitor = true;
            }
        });
    }
    ngOnInit() {
    }
    noWhitespaceValidator(control) {
        const isWhitespace = (control.value || '').trim().length === 0;
        const isValid = !isWhitespace;
        return isValid ? null : { whitespace: true };
    }
    loadVisitor(id) {
        if (id != undefined && id != 0) {
            this.spinner.show();
            this.serv.httpGetData(1004, id)
                .subscribe((data) => {
                this.visitor = data;
                this.spinner.hide();
            }, (error) => {
                this.spinner.hide();
                this.toast.Danger({ message: error });
            });
        }
    }
    updateVisitor() {
        this.matcher.updateClicked = true;
        if (!this.frmVisitor.invalid) {
            this.spinner.show();
            this.serv.httpPost(this.visitor, 1004, this.visitor.Id)
                .subscribe((data) => {
                this.spinner.hide();
                this.toast.Success({ message: 'Successfully updated' });
                setTimeout(() => {
                    // tslint:disable-next-line: no-string-literal
                    this.router.navigateByUrl('/visitorsdiary/1004/' + data['id']);
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
    newVisitor() {
        this.router.navigateByUrl('/visitorsdiary/1004/0');
        this.router.routeReuseStrategy.shouldReuseRoute = () => {
            return false;
        };
    }
    back() {
        this.router.navigateByUrl('/visitorsdiary/1004');
    }
};
VisitorsdiaryComponent = tslib_1.__decorate([
    Component({
        selector: 'app-visitorsdiary',
        templateUrl: './visitorsdiary.component.html',
        styleUrls: ['./visitorsdiary.component.css']
    })
], VisitorsdiaryComponent);
export { VisitorsdiaryComponent };
//# sourceMappingURL=visitorsdiary.component.js.map