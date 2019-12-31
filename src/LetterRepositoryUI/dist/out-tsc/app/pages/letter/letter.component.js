import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Validators } from '@angular/forms';
import { Toast } from '../../common/models/toast';
import { Letter } from 'app/common/models/letter';
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
let LetterComponent = class LetterComponent {
    constructor(serv, router, activatedRoute, spinner, formBuilder) {
        this.serv = serv;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.spinner = spinner;
        this.formBuilder = formBuilder;
        this.isNewLetter = false;
        this.matcher = new MyErrorStateMatcher();
        this.letterContant = '';
        this.letter = new Letter();
        this.toast = new Toast();
        this.frmLetter = this.formBuilder.group({
            Id: [0, Validators.compose([])],
            LetterCode: [{ value: 'AUTO GENERATED CODE', disabled: true }, Validators.compose([])],
            LetterRefNO: ['', Validators.compose([Validators.required, this.noWhitespaceValidator])],
            LetterCategory: [1, Validators.compose([])],
            DepartmentId: [1, Validators.compose([])],
            ReferenceLetter: ['', Validators.compose([])],
            FromAddress: ['', Validators.compose([Validators.required, this.noWhitespaceValidator])],
            ToAddress: ['', Validators.compose([Validators.required])],
            ToWhom: ['', Validators.compose([Validators.required])],
            SendOrReceive: [1, Validators.compose([])],
            PostType: [1, Validators.compose([])],
            Subject: ['', Validators.compose([])],
            SendOrReceiveDate: [new Date(), Validators.compose([])]
        });
        this.activatedRoute
            .params
            .subscribe(params => {
            this.letter.Id = Number.isNaN(params.id) ? 0 : Number(params.id);
            if (this.letter.Id !== 0) {
                this.isNewLetter = false;
                this.loadLetter(this.letter.Id);
            }
            else {
                this.isNewLetter = true;
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
    loadLetter(id) {
        if (id !== undefined && id !== 0) {
            this.spinner.show();
            this.serv.httpGetData(1003, id)
                .subscribe((data) => {
                this.letter = data;
                this.letterContant = this.letter.LetterContant;
                this.spinner.hide();
            }, (error) => {
                this.spinner.hide();
                this.toast.Danger({ message: error });
            });
        }
    }
    updateLetter() {
        this.matcher.updateClicked = true;
        if (!this.frmLetter.invalid) {
            this.spinner.show();
            this.letter.LetterContant = this.letterContant;
            this.serv.httpPost(this.letter, 1003, this.letter.Id)
                .subscribe((data) => {
                this.spinner.hide();
                this.toast.Success({ message: 'Successfully updated' });
                setTimeout(() => {
                    // tslint:disable-next-line: no-string-literal
                    this.router.navigateByUrl('/letter/1003/' + data['id']);
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
    newLetter() {
        this.router.navigateByUrl('/letter/1003/0');
        this.router.routeReuseStrategy.shouldReuseRoute = () => {
            return false;
        };
    }
    back() {
        this.router.navigateByUrl('/letter/1003');
    }
};
LetterComponent = tslib_1.__decorate([
    Component({
        selector: 'app-letter',
        templateUrl: './letter.component.html',
        styleUrls: ['./letter.component.css']
    })
], LetterComponent);
export { LetterComponent };
//# sourceMappingURL=letter.component.js.map