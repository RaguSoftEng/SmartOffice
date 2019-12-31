import * as tslib_1 from "tslib";
import { Component, ViewChild, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ReplaySubject, Subject } from 'rxjs';
import { takeUntil, take } from 'rxjs/operators';
let MatselectComponent = class MatselectComponent {
    constructor() {
        // protected options: any[] = [{ Id: 1, Value: 'option1' }, { Id: 2, Value: 'option2' }, { Id: 3, Value: 'option3' }];
        this.frmctrlMatselect = new FormControl();
        this.frmCtrlFilterCtrl = new FormControl();
        this.filteredoptions = new ReplaySubject(1);
        this.elementName = 'test';
        this.onDestroy = new Subject();
    }
    ngOnInit() {
        this.frmctrlMatselect.setValue(this.options[10]);
        this.filteredoptions.next(this.options.slice());
        this.frmCtrlFilterCtrl.valueChanges
            .pipe(takeUntil(this.onDestroy))
            .subscribe(() => {
            this.filterBanks();
        });
    }
    ngAfterViewInit() {
        this.setInitialValue();
    }
    ngOnDestroy() {
        this.onDestroy.next();
        this.onDestroy.complete();
    }
    setInitialValue() {
        this.filteredoptions
            .pipe(take(1), takeUntil(this.onDestroy))
            .subscribe(() => {
            this.selectId.compareWith = (a, b) => a && b && a.id === b.id;
        });
    }
    filterBanks() {
        if (!this.options) {
            return;
        }
        let search = this.frmCtrlFilterCtrl.value;
        if (!search) {
            this.filteredoptions.next(this.options.slice());
            return;
        }
        else {
            search = search.toLowerCase();
        }
        this.filteredoptions.next(this.options.filter(option => option.Value.toLowerCase().indexOf(search) > -1));
    }
};
tslib_1.__decorate([
    Input()
], MatselectComponent.prototype, "options", void 0);
tslib_1.__decorate([
    Input()
], MatselectComponent.prototype, "elementName", void 0);
tslib_1.__decorate([
    ViewChild('selectId', { static: false })
], MatselectComponent.prototype, "selectId", void 0);
MatselectComponent = tslib_1.__decorate([
    Component({
        selector: 'app-matselect',
        templateUrl: './matselect.component.html',
        styleUrls: ['./matselect.component.css']
    })
], MatselectComponent);
export { MatselectComponent };
//# sourceMappingURL=matselect.component.js.map