import * as tslib_1 from "tslib";
var MatselectComponent_1;
import { Component, ViewChild, Input, Output, EventEmitter, forwardRef } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ReplaySubject, Subject } from 'rxjs';
import { takeUntil, take } from 'rxjs/operators';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { Toast } from 'app/common/models/toast';
const customValueProvider = {
    provide: NG_VALUE_ACCESSOR,
    // tslint:disable-next-line: no-use-before-declare
    useExisting: forwardRef(() => MatselectComponent),
    multi: true
};
let MatselectComponent = MatselectComponent_1 = class MatselectComponent {
    constructor(serv) {
        this.serv = serv;
        // protected options: any[] = [{ Id: 1, Value: 'option1' }, { Id: 2, Value: 'option2' }, { Id: 3, Value: 'option3' }];
        this.frmctrlMatselect = new FormControl();
        this.frmCtrlFilterCtrl = new FormControl();
        this.filteredoptions = new ReplaySubject(1);
        this.listId = 0;
        this.isaParameter = false;
        this.DefaultOption = false;
        this.defaultOn = false;
        this.hideDefaultAfterSelect = true;
        this.default = '-------- None --------';
        this.SelectedValueChanged = new EventEmitter();
        this.onDestroy = new Subject();
        this.toast = new Toast();
    }
    ngOnInit() {
        if (this.listId > 0) {
            this.getListValues(this.listId, this.isaParameter);
        }
        else {
            this.frmctrlMatselect.setValue((this.InitValue) ? this.InitValue.toString() : this.options[0]);
            this.filteredoptions.next(this.options.slice());
        }
        this.frmCtrlFilterCtrl.valueChanges
            .pipe(takeUntil(this.onDestroy))
            .subscribe(() => {
            this.filterOptions();
        });
    }
    ngAfterViewInit() {
        // this.setInitialValue();
    }
    getListValues(listId, isaParameter) {
        this.serv.httpGetListValue(listId, isaParameter)
            .subscribe((data) => {
            this.options = data;
            if (this.defaultOn) {
                this.options.push({ Id: 0, Value: this.default });
            }
            this.frmctrlMatselect.setValue((this.InitValue) ? this.InitValue.toString() : (this.defaultOn) ? 0 : this.options[0]);
            this.filteredoptions.next(this.options.slice());
        }, (error) => {
            this.toast.Danger({ message: error });
        });
    }
    ngOnDestroy() {
        this.onDestroy.next();
        this.onDestroy.complete();
    }
    setInitialValue() {
        this.filteredoptions
            .pipe(take(1), takeUntil(this.onDestroy))
            .subscribe(() => {
            this.selectId.compareWith = (a, b) => a && b && a.Id === b.Id;
        });
    }
    filterOptions() {
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
        this.filteredoptions.next(this.options.filter(option => option.Value.toLowerCase().indexOf(search) > -1 && option.Id != 0));
    }
    OnValueChanged() {
        if (this.hideDefaultAfterSelect) {
            let opt = this.options.filter(o => o.Id == 0);
            if (opt != null && opt.length > 0) {
                this.options = this.options.filter(o => o.Id != 0);
                this.filteredoptions.next(this.options.slice());
            }
        }
        this.SelectedValueChanged.emit(this.frmctrlMatselect.value);
    }
    get value() { return this.frmctrlMatselect.value; }
    set value(v) {
        if (v !== this.frmctrlMatselect.value) {
            this.frmctrlMatselect.setValue(v);
        }
    }
    writeValue(obj) {
        if (obj) {
            this.frmctrlMatselect.setValue(obj);
        }
    }
    registerOnChange(fn) {
    }
    registerOnTouched(fn) {
    }
    setDisabledState(isDisabled) {
    }
};
tslib_1.__decorate([
    Input()
], MatselectComponent.prototype, "options", void 0);
tslib_1.__decorate([
    Input()
], MatselectComponent.prototype, "listId", void 0);
tslib_1.__decorate([
    Input()
], MatselectComponent.prototype, "isaParameter", void 0);
tslib_1.__decorate([
    Input()
], MatselectComponent.prototype, "placeholder", void 0);
tslib_1.__decorate([
    Input()
], MatselectComponent.prototype, "InitValue", void 0);
tslib_1.__decorate([
    Input()
], MatselectComponent.prototype, "DefaultOption", void 0);
tslib_1.__decorate([
    Input()
], MatselectComponent.prototype, "defaultOn", void 0);
tslib_1.__decorate([
    Input()
], MatselectComponent.prototype, "hideDefaultAfterSelect", void 0);
tslib_1.__decorate([
    Input()
], MatselectComponent.prototype, "default", void 0);
tslib_1.__decorate([
    Output()
], MatselectComponent.prototype, "SelectedValueChanged", void 0);
tslib_1.__decorate([
    ViewChild('selectId', { static: false })
], MatselectComponent.prototype, "selectId", void 0);
MatselectComponent = MatselectComponent_1 = tslib_1.__decorate([
    Component({
        selector: 'app-matselect',
        templateUrl: './matselect.component.html',
        styleUrls: ['./matselect.component.css'],
        providers: [{
                provide: NG_VALUE_ACCESSOR,
                useExisting: forwardRef(() => MatselectComponent_1),
                multi: true
            }]
    })
], MatselectComponent);
export { MatselectComponent };
//# sourceMappingURL=matselect.component.js.map