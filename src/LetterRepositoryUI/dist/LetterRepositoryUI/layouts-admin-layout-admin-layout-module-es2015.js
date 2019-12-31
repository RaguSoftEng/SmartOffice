(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["layouts-admin-layout-admin-layout-module"],{

/***/ "./node_modules/ngx-mat-select-search/fesm2015/ngx-mat-select-search.js":
/*!******************************************************************************!*\
  !*** ./node_modules/ngx-mat-select-search/fesm2015/ngx-mat-select-search.js ***!
  \******************************************************************************/
/*! exports provided: MatSelectSearchComponent, MatSelectSearchVersion, NgxMatSelectSearchModule, ɵa */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatSelectSearchComponent", function() { return MatSelectSearchComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatSelectSearchVersion", function() { return MatSelectSearchVersion; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgxMatSelectSearchModule", function() { return NgxMatSelectSearchModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵa", function() { return MatSelectSearchClearDirective; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/keycodes */ "./node_modules/@angular/cdk/esm2015/keycodes.js");
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/scrolling */ "./node_modules/@angular/cdk/esm2015/scrolling.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");









/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Directive for providing a custom clear-icon.
 * e.g.
 * <ngx-mat-select-search [formControl]="bankFilterCtrl">
 *   <mat-icon ngxMatSelectSearchClear>delete</mat-icon>
 * </ngx-mat-select-search>
 */
class MatSelectSearchClearDirective {
}
MatSelectSearchClearDirective.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Directive"], args: [{
                selector: '[ngxMatSelectSearchClear]'
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/* tslint:disable:member-ordering component-selector */
/**
 * Component providing an input field for searching MatSelect options.
 *
 * Example usage:
 *
 * interface Bank {
 *  id: string;
 *  name: string;
 * }
 *
 * \@Component({
 *   selector: 'my-app-data-selection',
 *   template: `
 *     <mat-form-field>
 *       <mat-select [formControl]="bankCtrl" placeholder="Bank">
 *         <ngx-mat-select-search [formControl]="bankFilterCtrl"></ngx-mat-select-search>
 *         <mat-option *ngFor="let bank of filteredBanks | async" [value]="bank.id">
 *           {{bank.name}}
 *         </mat-option>
 *       </mat-select>
 *     </mat-form-field>
 *   `
 * })
 * export class DataSelectionComponent implements OnInit, OnDestroy {
 *
 *   // control for the selected bank
 *   public bankCtrl: FormControl = new FormControl();
 *   // control for the MatSelect filter keyword
 *   public bankFilterCtrl: FormControl = new FormControl();
 *
 *   // list of banks
 *   private banks: Bank[] = [{name: 'Bank A', id: 'A'}, {name: 'Bank B', id: 'B'}, {name: 'Bank C', id: 'C'}];
 *   // list of banks filtered by search keyword
 *   public filteredBanks: ReplaySubject<Bank[]> = new ReplaySubject<Bank[]>(1);
 *
 *   // Subject that emits when the component has been destroyed.
 *   private _onDestroy = new Subject<void>();
 *
 *
 *   ngOnInit() {
 *     // load the initial bank list
 *     this.filteredBanks.next(this.banks.slice());
 *     // listen for search field value changes
 *     this.bankFilterCtrl.valueChanges
 *       .pipe(takeUntil(this._onDestroy))
 *       .subscribe(() => {
 *         this.filterBanks();
 *       });
 *   }
 *
 *   ngOnDestroy() {
 *     this._onDestroy.next();
 *     this._onDestroy.complete();
 *   }
 *
 *   private filterBanks() {
 *     if (!this.banks) {
 *       return;
 *     }
 *
 *     // get the search keyword
 *     let search = this.bankFilterCtrl.value;
 *     if (!search) {
 *       this.filteredBanks.next(this.banks.slice());
 *       return;
 *     } else {
 *       search = search.toLowerCase();
 *     }
 *
 *     // filter the banks
 *     this.filteredBanks.next(
 *       this.banks.filter(bank => bank.name.toLowerCase().indexOf(search) > -1)
 *     );
 *   }
 * }
 */
class MatSelectSearchComponent {
    /**
     * @param {?} matSelect
     * @param {?} changeDetectorRef
     * @param {?} _viewportRuler
     * @param {?=} matOption
     */
    constructor(matSelect, changeDetectorRef, _viewportRuler, matOption = null) {
        this.matSelect = matSelect;
        this.changeDetectorRef = changeDetectorRef;
        this._viewportRuler = _viewportRuler;
        this.matOption = matOption;
        /**
         * Label of the search placeholder
         */
        this.placeholderLabel = 'Suche';
        /**
         * Type of the search input field
         */
        this.type = 'text';
        /**
         * Label to be shown when no entries are found. Set to null if no message should be shown.
         */
        this.noEntriesFoundLabel = 'Keine Optionen gefunden';
        /**
         * Whether or not the search field should be cleared after the dropdown menu is closed.
         * Useful for server-side filtering. See [#3](https://github.com/bithost-gmbh/ngx-mat-select-search/issues/3)
         */
        this.clearSearchInput = true;
        /**
         * Whether to show the search-in-progress indicator
         */
        this.searching = false;
        /**
         * Disables initial focusing of the input field
         */
        this.disableInitialFocus = false;
        /**
         * Prevents home / end key being propagated to mat-select,
         * allowing to move the cursor within the search input instead of navigating the options
         */
        this.preventHomeEndKeyPropagation = false;
        /**
         * Disables scrolling to active options when option list changes. Useful for server-side search
         */
        this.disableScrollToActiveOnOptionsChanged = false;
        /**
         * Adds 508 screen reader support for search box
         */
        this.ariaLabel = 'dropdown search';
        /**
         * Whether to show Select All Checkbox (for mat-select[multi=true])
         */
        this.showToggleAllCheckbox = false;
        /**
         * select all checkbox checked state
         */
        this.toggleAllCheckboxChecked = false;
        /**
         * select all checkbox indeterminate state
         */
        this.toggleAllCheckboxIndeterminate = false;
        /**
         * Output emitter to send to parent component with the toggle all boolean
         */
        this.toggleAll = new _angular_core__WEBPACK_IMPORTED_MODULE_5__["EventEmitter"]();
        this.onChange = (_) => { };
        this.onTouched = (_) => { };
        /**
         * Whether the backdrop class has been set
         */
        this.overlayClassSet = false;
        /**
         * Event that emits when the current value changes
         */
        this.change = new _angular_core__WEBPACK_IMPORTED_MODULE_5__["EventEmitter"]();
        /**
         * Subject that emits when the component has been destroyed.
         */
        this._onDestroy = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
    }
    /**
     * @return {?}
     */
    get isInsideMatOption() {
        return !!this.matOption;
    }
    /**
     * Current search value
     * @return {?}
     */
    get value() {
        return this._value;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        // set custom panel class
        /** @type {?} */
        const panelClass = 'mat-select-search-panel';
        if (this.matSelect.panelClass) {
            if (Array.isArray(this.matSelect.panelClass)) {
                ((/** @type {?} */ (this.matSelect.panelClass))).push(panelClass);
            }
            else if (typeof this.matSelect.panelClass === 'string') {
                this.matSelect.panelClass = [this.matSelect.panelClass, panelClass];
            }
            else if (typeof this.matSelect.panelClass === 'object') {
                this.matSelect.panelClass[panelClass] = true;
            }
        }
        else {
            this.matSelect.panelClass = panelClass;
        }
        // set custom mat-option class if the component was placed inside a mat-option
        if (this.matOption) {
            this.matOption.disabled = true;
            this.matOption._getHostElement().classList.add('contains-mat-select-search');
        }
        // when the select dropdown panel is opened or closed
        this.matSelect.openedChange
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["delay"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(this._onDestroy))
            .subscribe((opened) => {
            if (opened) {
                this.updateInputWidth();
                // focus the search field when opening
                if (!this.disableInitialFocus) {
                    this._focus();
                }
            }
            else {
                // clear it when closing
                if (this.clearSearchInput) {
                    this._reset();
                }
            }
        });
        // set the first item active after the options changed
        this.matSelect.openedChange
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(this._onDestroy))
            .subscribe(() => {
            if (this.matSelect._keyManager) {
                this.matSelect._keyManager.change.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(this._onDestroy))
                    .subscribe(() => this.adjustScrollTopToFitActiveOptionIntoView());
            }
            else {
                console.log('_keyManager was not initialized.');
            }
            this._options = this.matSelect.options;
            this._options.changes
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(this._onDestroy))
                .subscribe(() => {
                /** @type {?} */
                const keyManager = this.matSelect._keyManager;
                if (keyManager && this.matSelect.panelOpen) {
                    // avoid "expression has been changed" error
                    setTimeout(() => {
                        // set first item active and input width
                        keyManager.setFirstItemActive();
                        this.updateInputWidth();
                        // set no entries found class on mat option
                        if (this.matOption) {
                            if (this._noEntriesFound()) {
                                this.matOption._getHostElement().classList.add('mat-select-search-no-entries-found');
                            }
                            else {
                                this.matOption._getHostElement().classList.remove('mat-select-search-no-entries-found');
                            }
                        }
                        if (!this.disableScrollToActiveOnOptionsChanged) {
                            this.adjustScrollTopToFitActiveOptionIntoView();
                        }
                    }, 1);
                }
            });
        });
        // detect changes when the input changes
        this.change
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(this._onDestroy))
            .subscribe(() => {
            this.changeDetectorRef.detectChanges();
        });
        // resize the input width when the viewport is resized, i.e. the trigger width could potentially be resized
        this._viewportRuler.change()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(this._onDestroy))
            .subscribe(() => {
            if (this.matSelect.panelOpen) {
                this.updateInputWidth();
            }
        });
        this.initMultipleHandling();
    }
    /**
     * @param {?} state
     * @return {?}
     */
    _emitSelectAllBooleanToParent(state) {
        this.toggleAll.emit(state);
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this._onDestroy.next();
        this._onDestroy.complete();
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        setTimeout(() => {
            this.setOverlayClass();
        });
        // update view when available options change
        this.matSelect.openedChange
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(this._onDestroy)).subscribe(() => {
            this.matSelect.options.changes
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(this._onDestroy))
                .subscribe(() => {
                this.changeDetectorRef.markForCheck();
            });
        });
    }
    /**
     * @return {?}
     */
    _isToggleAllCheckboxVisible() {
        return this.matSelect.multiple && this.showToggleAllCheckbox;
    }
    /**
     * Handles the key down event with MatSelect.
     * Allows e.g. selecting with enter key, navigation with arrow keys, etc.
     * @param {?} event
     * @return {?}
     */
    _handleKeydown(event) {
        // Prevent propagation for all alphanumeric characters in order to avoid selection issues
        if ((event.key && event.key.length === 1) ||
            (event.keyCode >= _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_1__["A"] && event.keyCode <= _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_1__["Z"]) ||
            (event.keyCode >= _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_1__["ZERO"] && event.keyCode <= _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_1__["NINE"]) ||
            (event.keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_1__["SPACE"])
            || (this.preventHomeEndKeyPropagation && (event.keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_1__["HOME"] || event.keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_1__["END"]))) {
            event.stopPropagation();
        }
    }
    /**
     * @param {?} value
     * @return {?}
     */
    writeValue(value) {
        /** @type {?} */
        const valueChanged = value !== this._value;
        if (valueChanged) {
            this._value = value;
            this.change.emit(value);
        }
    }
    /**
     * @param {?} value
     * @return {?}
     */
    onInputChange(value) {
        /** @type {?} */
        const valueChanged = value !== this._value;
        if (valueChanged) {
            this.initMultiSelectedValues();
            this._value = value;
            this.onChange(value);
            this.change.emit(value);
        }
    }
    /**
     * @param {?} value
     * @return {?}
     */
    onBlur(value) {
        this.writeValue(value);
        this.onTouched();
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnChange(fn) {
        this.onChange = fn;
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnTouched(fn) {
        this.onTouched = fn;
    }
    /**
     * Focuses the search input field
     * @return {?}
     */
    _focus() {
        if (!this.searchSelectInput || !this.matSelect.panel) {
            return;
        }
        // save and restore scrollTop of panel, since it will be reset by focus()
        // note: this is hacky
        /** @type {?} */
        const panel = this.matSelect.panel.nativeElement;
        /** @type {?} */
        const scrollTop = panel.scrollTop;
        // focus
        this.searchSelectInput.nativeElement.focus();
        panel.scrollTop = scrollTop;
    }
    /**
     * Resets the current search value
     * @param {?=} focus whether to focus after resetting
     * @return {?}
     */
    _reset(focus) {
        if (!this.searchSelectInput) {
            return;
        }
        this.searchSelectInput.nativeElement.value = '';
        this.onInputChange('');
        if (this.matOption && !focus) {
            // remove no entries found class on mat option
            this.matOption._getHostElement().classList.remove('mat-select-search-no-entries-found');
        }
        if (focus) {
            this._focus();
        }
    }
    /**
     * Sets the overlay class  to correct offsetY
     * so that the selected option is at the position of the select box when opening
     * @private
     * @return {?}
     */
    setOverlayClass() {
        if (this.overlayClassSet) {
            return;
        }
        /** @type {?} */
        const overlayClasses = ['cdk-overlay-pane-select-search'];
        if (!this.matOption) {
            // add offset to panel if component is not placed inside mat-option
            overlayClasses.push('cdk-overlay-pane-select-search-with-offset');
        }
        this.matSelect.overlayDir.attach
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(this._onDestroy))
            .subscribe(() => {
            // note: this is hacky, but currently there is no better way to do this
            /** @type {?} */
            let element = this.searchSelectInput.nativeElement;
            /** @type {?} */
            let overlayElement;
            while (element = element.parentElement) {
                if (element.classList.contains('cdk-overlay-pane')) {
                    overlayElement = element;
                    break;
                }
            }
            if (overlayElement) {
                overlayClasses.forEach(overlayClass => {
                    overlayElement.classList.add(overlayClass);
                });
            }
        });
        this.overlayClassSet = true;
    }
    /**
     * Initializes handling <mat-select [multiple]="true">
     * Note: to improve this code, mat-select should be extended to allow disabling resetting the selection while filtering.
     * @private
     * @return {?}
     */
    initMultipleHandling() {
        // if <mat-select [multiple]="true">
        // store previously selected values and restore them when they are deselected
        // because the option is not available while we are currently filtering
        this.matSelect.valueChange
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(this._onDestroy))
            .subscribe((values) => {
            if (this.matSelect.multiple) {
                /** @type {?} */
                let restoreSelectedValues = false;
                if (this._value && this._value.length
                    && this.previousSelectedValues && Array.isArray(this.previousSelectedValues)) {
                    if (!values || !Array.isArray(values)) {
                        values = [];
                    }
                    /** @type {?} */
                    const optionValues = this.matSelect.options.map(option => option.value);
                    this.previousSelectedValues.forEach(previousValue => {
                        if (values.indexOf(previousValue) === -1 && optionValues.indexOf(previousValue) === -1) {
                            // if a value that was selected before is deselected and not found in the options, it was deselected
                            // due to the filtering, so we restore it.
                            values.push(previousValue);
                            restoreSelectedValues = true;
                        }
                    });
                }
                if (restoreSelectedValues) {
                    this.matSelect._onChange(values);
                }
                this.previousSelectedValues = values;
            }
        });
    }
    /**
     * Scrolls the currently active option into the view if it is not yet visible.
     * @private
     * @return {?}
     */
    adjustScrollTopToFitActiveOptionIntoView() {
        if (this.matSelect.panel && this.matSelect.options.length > 0) {
            /** @type {?} */
            const matOptionHeight = this.getMatOptionHeight();
            /** @type {?} */
            const activeOptionIndex = this.matSelect._keyManager.activeItemIndex || 0;
            /** @type {?} */
            const labelCount = Object(_angular_material__WEBPACK_IMPORTED_MODULE_6__["_countGroupLabelsBeforeOption"])(activeOptionIndex, this.matSelect.options, this.matSelect.optionGroups);
            // If the component is in a MatOption, the activeItemIndex will be offset by one.
            /** @type {?} */
            const indexOfOptionToFitIntoView = (this.matOption ? -1 : 0) + labelCount + activeOptionIndex;
            /** @type {?} */
            const currentScrollTop = this.matSelect.panel.nativeElement.scrollTop;
            /** @type {?} */
            const searchInputHeight = this.innerSelectSearch.nativeElement.offsetHeight;
            /** @type {?} */
            const amountOfVisibleOptions = Math.floor((_angular_material__WEBPACK_IMPORTED_MODULE_6__["SELECT_PANEL_MAX_HEIGHT"] - searchInputHeight) / matOptionHeight);
            /** @type {?} */
            const indexOfFirstVisibleOption = Math.round((currentScrollTop + searchInputHeight) / matOptionHeight) - 1;
            if (indexOfFirstVisibleOption >= indexOfOptionToFitIntoView) {
                this.matSelect.panel.nativeElement.scrollTop = indexOfOptionToFitIntoView * matOptionHeight;
            }
            else if (indexOfFirstVisibleOption + amountOfVisibleOptions <= indexOfOptionToFitIntoView) {
                this.matSelect.panel.nativeElement.scrollTop = (indexOfOptionToFitIntoView + 1) * matOptionHeight - (_angular_material__WEBPACK_IMPORTED_MODULE_6__["SELECT_PANEL_MAX_HEIGHT"] - searchInputHeight);
            }
        }
    }
    /**
     *  Set the width of the innerSelectSearch to fit even custom scrollbars
     *  And support all Operation Systems
     * @return {?}
     */
    updateInputWidth() {
        if (!this.innerSelectSearch || !this.innerSelectSearch.nativeElement) {
            return;
        }
        /** @type {?} */
        let element = this.innerSelectSearch.nativeElement;
        /** @type {?} */
        let panelElement;
        while (element = element.parentElement) {
            if (element.classList.contains('mat-select-panel')) {
                panelElement = element;
                break;
            }
        }
        if (panelElement) {
            this.innerSelectSearch.nativeElement.style.width = panelElement.clientWidth + 'px';
        }
    }
    /**
     * @private
     * @return {?}
     */
    getMatOptionHeight() {
        if (this.matSelect.options.length > 0) {
            return this.matSelect.options.first._getHostElement().getBoundingClientRect().height;
        }
        return 0;
    }
    /**
     *  Initialize this.previousSelectedValues once the first filtering occurs.
     * @return {?}
     */
    initMultiSelectedValues() {
        if (this.matSelect.multiple && !this._value) {
            this.previousSelectedValues = this.matSelect.options
                .filter(option => option.selected)
                .map(option => option.value);
        }
    }
    /**
     * Returns whether the "no entries found" message should be displayed
     * @return {?}
     */
    _noEntriesFound() {
        if (!this._options) {
            return;
        }
        if (this.matOption) {
            return this.noEntriesFoundLabel && this.value && this._options.length === 1;
        }
        else {
            return this.noEntriesFoundLabel && this.value && this._options.length === 0;
        }
    }
}
MatSelectSearchComponent.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Component"], args: [{
                selector: 'ngx-mat-select-search',
                template: "<!-- Placeholder to adjust vertical offset of the mat-option elements -->\n<input matInput class=\"mat-select-search-input mat-select-search-hidden\"/>\n\n<!-- Note: the  mat-datepicker-content mat-tab-header are needed to inherit the material theme colors, see PR #22 -->\n<div\n      #innerSelectSearch\n      class=\"mat-select-search-inner mat-typography mat-datepicker-content mat-tab-header\"\n      [ngClass]=\"{'mat-select-search-inner-multiple': matSelect.multiple, 'mat-select-search-inner-toggle-all': _isToggleAllCheckboxVisible() }\">\n\n  <mat-checkbox *ngIf=\"_isToggleAllCheckboxVisible()\"\n                color=\"primary\"\n                class=\"mat-select-search-toggle-all-checkbox\"\n                [checked]=\"toggleAllCheckboxChecked\"\n                [indeterminate]=\"toggleAllCheckboxIndeterminate\"\n                (change)=\"_emitSelectAllBooleanToParent($event.checked)\"\n  ></mat-checkbox>\n\n  <input matInput\n         class=\"mat-select-search-input\"\n         autocomplete=\"off\"\n         [type]=\"type\"\n         [value]=\"value\"\n         #searchSelectInput\n         (keydown)=\"_handleKeydown($event)\"\n         (input)=\"onInputChange($event.target.value)\"\n         (blur)=\"onBlur($event.target.value)\"\n         [placeholder]=\"placeholderLabel\"\n         [attr.aria-label]=\"ariaLabel\"\n  />\n  <mat-spinner *ngIf=\"searching\"\n          class=\"mat-select-search-spinner\"\n          diameter=\"16\"></mat-spinner>\n\n  <button mat-button\n          *ngIf=\"value && !searching\"\n          mat-icon-button\n          aria-label=\"Clear\"\n          (click)=\"_reset(true)\"\n          class=\"mat-select-search-clear\">\n    <ng-content *ngIf=\"clearIcon; else defaultIcon\" select=\"[ngxMatSelectSearchClear]\"></ng-content>\n    <ng-template #defaultIcon>\n      <mat-icon>close</mat-icon>\n    </ng-template>\n  </button>\n\n  <ng-content select=\".mat-select-search-custom-header-content\"></ng-content>\n\n</div>\n\n<div *ngIf=\"_noEntriesFound()\"\n     class=\"mat-select-search-no-entries-found\">\n  {{noEntriesFoundLabel}}\n</div>\n<!--\nCopyright (c) 2018 Bithost GmbH All Rights Reserved.\n\nUse of this source code is governed by an MIT-style license that can be\nfound in the LICENSE file at https://angular.io/license\n-->\n",
                providers: [
                    {
                        provide: _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NG_VALUE_ACCESSOR"],
                        useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["forwardRef"])(() => MatSelectSearchComponent),
                        multi: true
                    }
                ],
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_5__["ChangeDetectionStrategy"].OnPush,
                styles: [".mat-select-search-hidden{visibility:hidden}.mat-select-search-inner{position:absolute;top:0;width:100%;border-bottom-width:1px;border-bottom-style:solid;z-index:100;font-size:inherit;box-shadow:none;border-radius:0;-webkit-transform:translate3d(0,0,0)}.mat-select-search-inner.mat-select-search-inner-multiple{width:100%}.mat-select-search-inner.mat-select-search-inner-multiple.mat-select-search-inner-toggle-all{display:flex;align-items:center}.mat-select-search-inner .mat-input-element{flex-basis:auto}.mat-select-search-inner .mat-input-element:-ms-input-placeholder{-ms-user-select:text}/deep/ .mat-select-search-panel{-webkit-transform:none!important;transform:none!important;overflow-x:hidden}.mat-select-search-input{padding:16px 36px 16px 16px;box-sizing:border-box}.mat-select-search-no-entries-found{padding:16px}.mat-select-search-clear{position:absolute;right:4px;top:5px}.mat-select-search-spinner{position:absolute;right:16px;top:calc(50% - 8px)}:host.mat-select-search-inside-mat-option .mat-select-search-input{padding-top:0;padding-bottom:0;height:3em;line-height:3em}:host.mat-select-search-inside-mat-option .mat-select-search-clear{top:3px}/deep/ .cdk-overlay-pane-select-search.cdk-overlay-pane-select-search-with-offset{margin-top:-50px}/deep/ .mat-option[aria-disabled=true].contains-mat-select-search{position:static;padding:0}/deep/ .mat-option[aria-disabled=true].contains-mat-select-search .mat-icon{margin-right:0}/deep/ .mat-option[aria-disabled=true].contains-mat-select-search .mat-option-pseudo-checkbox{display:none}/deep/ .mat-option[aria-disabled=true].contains-mat-select-search.mat-select-search-no-entries-found{height:6em}.mat-select-search-toggle-all-checkbox{padding-left:16px;padding-bottom:2px}"]
            }] }
];
/** @nocollapse */
MatSelectSearchComponent.ctorParameters = () => [
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatSelect"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Inject"], args: [_angular_material__WEBPACK_IMPORTED_MODULE_6__["MatSelect"],] }] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["ChangeDetectorRef"] },
    { type: _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_2__["ViewportRuler"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatOption"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Inject"], args: [_angular_material__WEBPACK_IMPORTED_MODULE_6__["MatOption"],] }] }
];
MatSelectSearchComponent.propDecorators = {
    placeholderLabel: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"] }],
    type: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"] }],
    noEntriesFoundLabel: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"] }],
    clearSearchInput: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"] }],
    searching: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"] }],
    disableInitialFocus: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"] }],
    preventHomeEndKeyPropagation: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"] }],
    disableScrollToActiveOnOptionsChanged: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"] }],
    ariaLabel: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"] }],
    showToggleAllCheckbox: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"] }],
    toggleAllCheckboxChecked: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"] }],
    toggleAllCheckboxIndeterminate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"] }],
    toggleAll: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Output"] }],
    searchSelectInput: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["ViewChild"], args: ['searchSelectInput', { read: _angular_core__WEBPACK_IMPORTED_MODULE_5__["ElementRef"] },] }],
    innerSelectSearch: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["ViewChild"], args: ['innerSelectSearch', { read: _angular_core__WEBPACK_IMPORTED_MODULE_5__["ElementRef"] },] }],
    clearIcon: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["ContentChild"], args: [MatSelectSearchClearDirective,] }],
    isInsideMatOption: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["HostBinding"], args: ['class.mat-select-search-inside-mat-option',] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const MatSelectSearchVersion = '1.8.0';
class NgxMatSelectSearchModule {
}
NgxMatSelectSearchModule.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["NgModule"], args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_7__["CommonModule"],
                    _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"],
                    _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatCheckboxModule"],
                    _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatIconModule"],
                    _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatInputModule"],
                    _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatProgressSpinnerModule"]
                ],
                declarations: [
                    MatSelectSearchComponent,
                    MatSelectSearchClearDirective
                ],
                exports: [
                    MatSelectSearchComponent,
                    MatSelectSearchClearDirective
                ]
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */



//# sourceMappingURL=ngx-mat-select-search.js.map

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/commonviewpage/commonviewpage.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/commonviewpage/commonviewpage.component.html ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"byPageSection\">\n  <app-view [formId]=\"formId\" (viewButtonClicked)=\"loadPage()\" [isViewPage]=\"true\" (newButtonClicked)=\"newPage()\">\n  </app-view>\n</section>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/configurations/configurations.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/configurations/configurations.component.html ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container main-content\">\n  <mat-tab-group id=\"tab-group\">\n    <mat-tab label=\"Parameters\">\n      <div class=\"card\" style=\"margin-top: 5px;height: 93%\">\n        <div class=\"card-body\" style=\"padding-top: 0px;height: 100%\">\n          <div class=\"row\" style=\"height: 100%;\">\n            <div class=\"col-md-3\" style=\"border-right: 1px solid #eeeeee;\">\n              <ul class=\"list-group list-group-flush\">\n                <ng-container *ngFor=\"let list of listArray\">\n                  <li class=\"list-group-item\" (click)=\"loadListvalues(list.listId)\">\n                    {{list.description}}\n                    <i class=\"fa fa-arrow-right float-right\"></i>\n                  </li>\n                </ng-container>\n              </ul>\n            </div>\n            <div class=\"col-md-9\" style=\"padding: 0;\">\n              <div class=\"card\" style=\"margin-top: 0;height: 100%\">\n                <div class=\"card-header\" style=\"border-bottom: 1px solid #eeeeee;\">\n                  <h5 class=\"card-title\" style=\"font-weight: bold;\">{{currentList.description}}</h5>\n                </div>\n                <div class=\"card-body\" style=\"height: 100%;\">\n                  <div class=\"row\" style=\"height: 90%\">\n                    <table class=\"table table-hover table-sm fixed_header\">\n                      <thead>\n                        <tr>\n                          <th style=\"width: 6%\">#</th>\n                          <th style=\"font-size: 13px;font-weight: 500;width:70%\">Parameter value</th>\n                          <th style=\"width: 24%\"></th>\n                        </tr>\n                      </thead>\n                      <tbody>\n                        <ng-container *ngFor=\"let listvalue of listvalueArray; let last = last;let i = index;\">\n                          <tr>\n                            <td>{{i+1}}</td>\n                            <td style=\"font-size: 12px;\">\n                              <input [(ngModel)]=\"listvalueArray[i].value\" class=\"form-control\" type=\"text\"\n                                [disabled]=\"!listvalueArray[i].isEdit\" />\n                            </td>\n                            <td style=\"text-align: right\">\n                              <a class=\"btn-a\" *ngIf=\"listvalueArray[i].isEdit\"\n                                (click)=\"updateListValue(listvalueArray[i])\" role=\"button\">\n                                <i class=\"fa fa-save\"></i> Save\n                              </a>\n                              <a class=\"btn-a\" *ngIf=\"!listvalueArray[i].isEdit\"\n                                (click)=\"listvalueArray[i].isEdit = true\" role=\"button\">\n                                <i class=\"fa fa-edit\"></i> Edit\n                              </a>\n                              <a class=\"btn-a\" *ngIf=\"last\" role=\"button\" (click)=\"addNewRow(listvalueArray[i])\">\n                                <i class=\"fa fa-plus fa-lg\"></i> Add\n                              </a>\n                            </td>\n                          </tr>\n                        </ng-container>\n                      </tbody>\n                    </table>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </mat-tab>\n  </mat-tab-group>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/dashboard/dashboard.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/dashboard/dashboard.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container main-content\">\n  <div class=\"row\">\n    <div class=\"col-sm-5 offset-1\" style=\"top:60px;font-size: xx-large;\">\n      Wel come {{CurrentUser.displayName}}\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/department/department.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/department/department.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container main-content\">\n  <mat-tab-group dynamicHeight>\n    <mat-tab label=\"Department\">\n      <div class=\"buttonlist\">\n        <div class=\"row\">\n          <a class=\"btn-a\" *ngIf=\"department.Id != 0 || isNewDepartment\" (click)=\"back()\" style=\"color: #0a0a0a;\"\n            role=\"button\">\n            <i class=\"fa fa-arrow-circle-left fa-lg\"> Back</i>\n          </a>\n          <a class=\"btn-a\" *ngIf=\"!isNewDepartment\" id=\"btnNew\" (click)=\"newDepartment()\" role=\"button\">\n            <i class=\"fa fa-plus fa-lg\"></i> New\n          </a>\n          <a class=\"btn-a\" id=\"btnUpd\" style=\"color: #0a0a0a\" (click)=\"updateDepartment()\" role=\"button\">\n            <i class=\"fa fa-save fa-lg\"></i> Update\n          </a>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-md-11\">\n          <div class=\"card\">\n            <div class=\"card-body\">\n              <fieldset>\n                <form [formGroup]='frmDepartment'>\n                  <div class=\"row\">\n                    <div class=\"col-sm-6\">\n                      <div class=\"row\">\n                        <div class=\"col-md-8\">\n                          <mat-form-field class=\"example-full-width\">\n                            <input matInput placeholder=\"Department code\" formControlName=\"Departmentcode\"\n                              name=\"DepartmentCode\" [(ngModel)]=\"department.DepartmentCode\"\n                              [errorStateMatcher]=\"matcher\" required>\n                          </mat-form-field>\n                        </div>\n                      </div>\n                    </div>\n                    <div class=\"col-sm-6\">\n                      <div class=\"row\">\n                        <div class=\"col-md-12\">\n                          <mat-form-field class=\"example-full-width\">\n                            <input matInput placeholder=\"Department name\" type=\"text\" formControlName=\"DepartmentName\"\n                              name=\"DepartmentName\" [(ngModel)]=\"department.DepartmentName\"\n                              [errorStateMatcher]=\"matcher\" required>\n                          </mat-form-field>\n                        </div>\n                      </div>\n                    </div>\n                  </div>\n                  <div class=\"row\">\n                    <div class=\"col-md-12\">\n                      <mat-form-field class=\"example-full-width\">\n                        <textarea matInput placeholder=\"Extended Description\" formControlName=\"ExtendedDescription\"\n                          name=\"ExtendedDescription\" [(ngModel)]=\"department.ExtendedDescription\"\n                          [errorStateMatcher]=\"matcher\" required rows=\"4\"></textarea>\n                      </mat-form-field>\n                    </div>\n                  </div>\n                </form>\n              </fieldset>\n            </div>\n          </div>\n        </div>\n      </div>\n    </mat-tab>\n  </mat-tab-group>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/letter/letter.component.html":
/*!******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/letter/letter.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container main-content\">\n  <mat-tab-group dynamicHeight>\n    <mat-tab label=\"Letter Summery\">\n      <div class=\"buttonlist\">\n        <div class=\"row\">\n          <a class=\"btn-a\" *ngIf=\"letter.Id != 0 || isNewLetter\" (click)=\"back()\" style=\"color: #0a0a0a;\" role=\"button\">\n            <i class=\"fa fa-arrow-circle-left fa-lg\"> Back</i>\n          </a>\n          <a class=\"btn-a\" *ngIf=\"!isNewLetter\" id=\"btnNew\" (click)=\"newLetter()\" role=\"button\">\n            <i class=\"fa fa-plus fa-lg\"></i> New\n          </a>\n          <a class=\"btn-a\" id=\"btnUpd\" style=\"color: #0a0a0a\" (click)=\"documentEditForm.ngSubmit.emit()\" role=\"button\">\n            <i class=\"fa fa-save fa-lg\"></i> Update\n          </a>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-md-12\">\n          <fieldset>\n            <form [formGroup]='frmLetter' (ngSubmit)=\"updateLetter()\" #documentEditForm=\"ngForm\">\n              <mat-tab-group dynamicHeight>\n                <mat-tab label=\"Summery\">\n                  <div class=\"card\" style=\"margin-top: 10px;\">\n                    <div class=\"card-body\">\n                      <div class=\"row\">\n                        <div class=\"col-md-6\">\n                          <div class=\"row\">\n                            <div class=\"col-md-12\">\n                              <app-matselect [listId]=\"1001\" [isaParameter]=\"false\" [InitValue]=\"letter.DepartmentId\"\n                                placeholder=\"Department\" (SelectedValueChanged)=\"letter.DepartmentId = $event\"\n                                formControlName=\"DepartmentId\" [(ngModel)]=\"letter.DepartmentId\">\n                              </app-matselect>\n                            </div>\n                          </div>\n                          <div class=\"row\">\n                            <div class=\"col-md-12\">\n                              <app-matselect [listId]=\"2\" [isaParameter]=\"true\" [InitValue]=\"letter.LetterCategory\"\n                                placeholder=\"Letter Category\" (SelectedValueChanged)=\"letter.LetterCategory = $event\"\n                                formControlName=\"LetterCategory\" [(ngModel)]=\"letter.LetterCategory\">\n                              </app-matselect>\n                            </div>\n                          </div>\n                          <div class=\"row\">\n                            <div class=\"col-md-12\">\n                              <mat-form-field class=\"example-full-width\">\n                                <input matInput placeholder=\"LetterRefNO\" type=\"text\" name=\"LetterRefNO\"\n                                  formControlName=\"LetterRefNO\" [(ngModel)]=\"letter.LetterRefNO\"\n                                  [errorStateMatcher]=\"matcher\" required>\n                              </mat-form-field>\n                            </div>\n                          </div>\n                          <div class=\"row\">\n                            <div class=\"col-md-12\">\n                              <mat-form-field class=\"example-full-width\">\n                                <input matInput placeholder=\"Letter Code\" type=\"text\" name=\"LetterCode\"\n                                  formControlName=\"LetterCode\" [(ngModel)]=\"letter.LetterCode\">\n                              </mat-form-field>\n                            </div>\n                          </div>\n                          <div class=\"row\">\n                            <div class=\"col-md-12\">\n                              <app-matselect [listId]=\"1003\" [InitValue]=\"letter.ReferenceLetterId\"\n                                placeholder=\"Reference Letter\"\n                                (SelectedValueChanged)=\"letter.ReferenceLetterId = $event\"\n                                formControlName=\"ReferenceLetter\" [(ngModel)]=\"letter.ReferenceLetterId\">\n                              </app-matselect>\n                            </div>\n                          </div>\n                          <div class=\"row\">\n                            <div class=\"col-md-12\">\n                              <mat-form-field class=\"example-full-width\">\n                                <textarea matInput placeholder=\"To Whom\" formControlName=\"ToWhom\" name=\"ToWhom\"\n                                  [(ngModel)]=\"letter.ToWhom\" [errorStateMatcher]=\"matcher\" required></textarea>\n                              </mat-form-field>\n                            </div>\n                          </div>\n                          <div class=\"row\">\n                            <div class=\"col-md-12\">\n                              <mat-form-field class=\"example-full-width\">\n                                <textarea matInput placeholder=\"Subject\" rows=\"5\" formControlName=\"Subject\"\n                                  [(ngModel)]=\"letter.Subject\" name=\"Subject\"></textarea>\n                              </mat-form-field>\n                            </div>\n                          </div>\n                        </div>\n                        <div class=\"col-sm-6\">\n                          <div class=\"row mat-radio-group\">\n                            <div class=\"col-md-12\">\n                              <mat-radio-group formControlName=\"SendOrReceive\" name=\"SendOrReceive\"\n                                [(ngModel)]=\"letter.SendOrReceive\">\n                                <mat-radio-button [checked]=\"letter.SendOrReceive == 1\" style=\"margin-right: 10px;\"\n                                  value=\"1\">Send </mat-radio-button>\n                                <mat-radio-button value=\"2\" [checked]=\"letter.SendOrReceive == 2\">Receive\n                                </mat-radio-button>\n                              </mat-radio-group>\n                            </div>\n                          </div>\n                          <div class=\"row\">\n                            <div class=\"col-md-12\">\n                              <mat-form-field>\n                                <input matInput [matDatepicker]=\"picker\" name=\"SendOrReceiveDate\"\n                                  formControlName=\"SendOrReceiveDate\" [(ngModel)]=\"letter.SendOrReceiveDate\"\n                                  placeholder=\"Send/Receive Date\" [value]=\"letter.SendOrReceiveDate\">\n                                <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\n                                <mat-datepicker touchUi #picker></mat-datepicker>\n                              </mat-form-field>\n                            </div>\n                          </div>\n                          <div class=\"row\">\n                            <div class=\"col-md-12\">\n                              <app-matselect [listId]=\"1\" [isaParameter]=\"true\" [InitValue]=\"letter.PostType\"\n                                placeholder=\"Post type\" (SelectedValueChanged)=\"letter.PostType = $event\"\n                                formControlName=\"PostType\" [(ngModel)]=\"letter.PostType\">\n                              </app-matselect>\n                            </div>\n                          </div>\n                          <div class=\"row\">\n                            <div class=\"col-md-12\">\n                              <mat-form-field class=\"example-full-width\">\n                                <textarea matInput placeholder=\"From Address\" rows=\"5\" formControlName=\"FromAddress\"\n                                  [(ngModel)]=\"letter.FromAddress\" name=\"FromAddress\" [errorStateMatcher]=\"matcher\"\n                                  required></textarea>\n                              </mat-form-field>\n                            </div>\n                          </div>\n                          <div class=\"row\">\n                            <div class=\"col-md-12\">\n                              <mat-form-field class=\"example-full-width\">\n                                <textarea matInput placeholder=\"To Address\" rows=\"5\" formControlName=\"ToAddress\"\n                                  [(ngModel)]=\"letter.ToAddress\" [errorStateMatcher]=\"matcher\" name=\"ToAddress\"\n                                  required></textarea>\n                              </mat-form-field>\n                            </div>\n                          </div>\n                        </div>\n                      </div>\n                    </div>\n                  </div>\n                </mat-tab>\n                <mat-tab label=\"Letter Contant\">\n                  <div class=\"row h-100\">\n                    <div class=\"col-md-12\">\n                      <div class=\"card h-100 mt-0\">\n                        <div class=\"card-header bg-dark\">\n                          <h3 class=\"card-title\" style=\"color: #ffffff\">Letter contant/ Description</h3>\n                        </div>\n                        <div class=\"card-body\" style=\"background-color: rgb(63, 62, 62);\">\n                          <div class=\"row h-75\">\n                            <div class=\"contentEditable\" contentEditable=\"true\" placeholder=\"Enter text here...\"\n                              [innerText]=\"letter.LetterContant\" (input)=\"this.letterContant = $event.target.innerText\">\n                            </div>\n                          </div>\n                        </div>\n                      </div>\n                    </div>\n                  </div>\n                </mat-tab>\n              </mat-tab-group>\n            </form>\n          </fieldset>\n        </div>\n      </div>\n    </mat-tab>\n    <!--mat-tab label=\"Attachments\" [disabled]=\"!isNewLetter\">\n      <div class=\"row\">\n        <div class=\"col-md-12\">\n          <div class=\"card\">\n            <div class=\"card-body\">\n              <div class=\"row\">\n                <div class=\"custom-file\">\n                  <input type=\"file\" class=\"custom-file-input\" id=\"inputGroupFile01\"\n                    aria-describedby=\"inputGroupFileAddon01\">\n                  <label class=\"custom-file-label\" for=\"inputGroupFile01\">Choose file</label>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </mat-tab-->\n    <mat-tab label=\"History\" [disabled]=\"isNewLetter\">\n\n    </mat-tab>\n  </mat-tab-group>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/letterview/letterview.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/letterview/letterview.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"byPageSection\">\n  <div class=\"container-fluid\">\n    <div class=\"row\">\n      <div class=\"container-fluid buttonlist\">\n        <div class=\"row\">\n          <a class=\"btn-a\" (click)=\"newLetter()\" role=\"button\">\n            <i class=\"fa fa-plus fa-lg\"></i> New\n          </a>\n        </div>\n      </div>\n    </div>\n    <div class=\"row\" style=\"margin-top: 20px;\">\n      <div class=\"col-sm-3\">\n        <app-matselect placeholder=\"Department\" [listId]=\"1001\" [(ngModel)]=\"departnemtId\" [InitValue]=\"1\"\n          (SelectedValueChanged)=\"departnemtId = $event\">\n        </app-matselect>\n      </div>\n      <div class=\"col-sm-3\">\n        <mat-form-field>\n          <input matInput [matDatepicker]=\"pickerfrom\" placeholder=\"from\" [(ngModel)]=\"frmDate\">\n          <mat-datepicker-toggle matSuffix [for]=\"pickerfrom\"></mat-datepicker-toggle>\n          <mat-datepicker #pickerfrom></mat-datepicker>\n        </mat-form-field>\n      </div>\n      <div class=\"col-sm-3\">\n        <mat-form-field>\n          <input matInput [matDatepicker]=\"pickerTo\" placeholder=\"To\" [(ngModel)]=\"toDate\">\n          <mat-datepicker-toggle matSuffix [for]=\"pickerTo\"></mat-datepicker-toggle>\n          <mat-datepicker #pickerTo></mat-datepicker>\n        </mat-form-field>\n      </div>\n      <div class=\"col-sm-3\">\n        <a class=\"btn-a\" id=\"btnUpd\" style=\"color: #0a0a0a\" role=\"button\" (click)=\"findData()\">\n          <i class=\"fa fa-search fa-lg\"></i> Find\n        </a>\n      </div>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"container-fluid\">\n      <div class=\"col-md-12\">\n        <div class=\"table-responsive\">\n          <mat-form-field class=\"example-full-width\" style=\"margin-top: 20px;\">\n            <input matInput type=\"text\" (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Filter\">\n          </mat-form-field>\n          <table class=\"table table-hover table-sm fixed_header\" matSort (matSortChange)=\"sortData($event)\">\n            <thead>\n              <tr>\n                <ng-container *ngFor=\"let col of details.Columns\">\n                  <th style=\"font-size: 13px;font-weight: 500;\" *ngIf=\"col.IsVisible\"\n                    mat-sort-header=\"{{col.ColumnName}}\">{{col.DisplayName}}</th>\n                </ng-container>\n                <th></th>\n              </tr>\n            </thead>\n            <tbody>\n              <ng-container *ngFor=\"let rowData of dataSource\">\n                <tr>\n                  <ng-container *ngFor=\"let col of details.Columns\">\n                    <td style=\"font-size: 12px;\" *ngIf=\"col.IsVisible\">{{rowData | Columns:col.ColumnName}}</td>\n                  </ng-container>\n                  <td>\n                    <a class=\"btn-a\" (click)=\"ViewButtonClicked(details.Url,details.FormId,rowData.Id)\" role=\"button\">\n                      <i class=\"fa fa-eye\"></i> View</a>\n                  </td>\n                </tr>\n              </ng-container>\n            </tbody>\n          </table>\n        </div>\n        <div class=\"row pull-right\">\n          <mat-paginator #paginator [pageSize]=\"pageSize\" [pageSizeOptions]=\"[20,50, 100, 500,1000]\"\n            [showFirstLastButtons]=\"true\" [length]=\"totalSize\" [pageIndex]=\"currentPage\" (page)=\"handlePage($event)\">\n          </mat-paginator>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/matselect/matselect.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/matselect/matselect.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-form-field>\n  <mat-select [formControl]=\"frmctrlMatselect\" placeholder=\"{{placeholder}}\" (selectionChange)=\"OnValueChanged()\"\n    #selectId>\n    <mat-option>\n      <ngx-mat-select-search [formControl]=\"frmCtrlFilterCtrl\"></ngx-mat-select-search>\n    </mat-option>\n\n    <mat-option *ngFor=\"let Option of filteredoptions | async\" [value]=\"Option.id\">\n      {{Option.value}}\n    </mat-option>\n  </mat-select>\n</mat-form-field>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/userprofile/userprofile.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/userprofile/userprofile.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container main-content\">\n  <mat-tab-group dynamicHeight>\n    <mat-tab label=\"User\">\n      <div class=\"buttonlist\">\n        <div class=\"row\">\n          <a class=\"btn-a\" *ngIf=\"user.Id != 0 || isNewUser\" (click)=\"back()\" style=\"color: #0a0a0a;\" role=\"button\">\n            <i class=\"fa fa-arrow-circle-left fa-lg\"> Back</i>\n          </a>\n          <a class=\"btn-a\" *ngIf=\"!isNewUser\" id=\"btnNew\" (click)=\"newUser()\" role=\"button\">\n            <i class=\"fa fa-plus fa-lg\"></i> New\n          </a>\n          <a class=\"btn-a\" id=\"btnUpd\" style=\"color: #0a0a0a\" (click)=\"documentEditForm.ngSubmit.emit()\" role=\"button\">\n            <i class=\"fa fa-save fa-lg\"></i> Update\n          </a>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-md-12\">\n          <div class=\"card\">\n            <div class=\"card-body\">\n              <fieldset>\n                <form [formGroup]='frmUserProfile' (ngSubmit)=\"updateUser()\" #documentEditForm=\"ngForm\">\n                  <div class=\"row\">\n                    <div class=\"col-md-6\">\n                      <div class=\"row\">\n                        <div class=\"col-md-3\">\n                          <app-matselect [listId]=\"4\" [isaParameter]=\"true\" [InitValue]=\"user.Title\" placeholder=\"Title\"\n                            [(ngModel)]=\"user.Title\" (SelectedValueChanged)=\"user.Title = $event\"\n                            formControlName=\"Title\">\n                          </app-matselect>\n                        </div>\n                        <div class=\"col-md-9\">\n                          <mat-form-field class=\"example-full-width\">\n                            <input matInput placeholder=\"Full name\" type=\"text\" name=\"FullName\"\n                              formControlName=\"FullName\" [(ngModel)]=\"user.FullName\" [errorStateMatcher]=\"matcher\"\n                              required>\n                          </mat-form-field>\n                        </div>\n                      </div>\n                      <div class=\"row\">\n                        <div class=\"col-md-12\">\n                          <mat-form-field class=\"example-full-width\">\n                            <input matInput placeholder=\"Display name\" type=\"text\" name=\"DisplayName\"\n                              formControlName=\"DisplayName\" [(ngModel)]=\"user.DisplayName\" [errorStateMatcher]=\"matcher\"\n                              required>\n                          </mat-form-field>\n                        </div>\n                      </div>\n                      <div class=\"row\">\n                        <div class=\"col-md-12\">\n                          <app-matselect [listId]=\"1001\" [InitValue]=\"user.DepartmentId\" placeholder=\"Department\"\n                            (SelectedValueChanged)=\"user.DepartmentId = $event\" formControlName=\"DepartmentId\"\n                            [(ngModel)]=\"user.DepartmentId\">\n                          </app-matselect>\n                        </div>\n                      </div>\n                      <div class=\"row\">\n                        <div class=\"col-md-12\">\n                          <app-matselect [listId]=\"3\" [isaParameter]=\"true\" [InitValue]=\"user.UserLevel\"\n                            placeholder=\"User level\" (SelectedValueChanged)=\"user.UserLevel = $event\"\n                            formControlName=\"UserLevel\" [(ngModel)]=\"user.UserLevel\">\n                          </app-matselect>\n                        </div>\n                      </div>\n                    </div>\n                    <div class=\"col-md-5\">\n                      <div class=\"row\">\n                        <div class=\"col-md-12\">\n                          <mat-form-field class=\"example-full-width\">\n                            <input matInput placeholder=\"Email\" type=\"text\" name=\"Email\" formControlName=\"Email\"\n                              [(ngModel)]=\"user.Email\" [errorStateMatcher]=\"matcher\" required>\n                          </mat-form-field>\n                        </div>\n                      </div>\n                      <div class=\"row\">\n                        <div class=\"col-md-12\">\n                          <mat-form-field class=\"example-full-width\">\n                            <input matInput placeholder=\"Username\" type=\"text\" name=\"UserName\"\n                              formControlName=\"UserName\" [(ngModel)]=\"user.UserName\" [errorStateMatcher]=\"matcher\"\n                              required>\n                          </mat-form-field>\n                        </div>\n                      </div>\n\n                      <section *ngIf=\"isNewUser\">\n                        <div class=\"row\">\n                          <div class=\"col-md-12\">\n                            <mat-form-field class=\"example-full-width\">\n                              <input matInput placeholder=\"Password\" type=\"password\" name=\"Password\"\n                                [(ngModel)]=\"user.Password\" formControlName=\"Password\">\n                            </mat-form-field>\n                          </div>\n                        </div>\n                        <div class=\"row\">\n                          <div class=\"col-md-12\">\n                            <mat-form-field class=\"example-full-width\">\n                              <input matInput placeholder=\"Confirm password\" type=\"password\" name=\"ConfirmPassword\"\n                                [(ngModel)]=\"user.ConfirmPassword\" formControlName=\"ConfirmPassword\"\n                                [errorStateMatcher]=\"matcher\">\n                              <mat-error *ngIf=\"frmUserProfile.hasError('notSame')\">\n                                Passwords do not match\n                              </mat-error>\n                            </mat-form-field>\n                          </div>\n                        </div>\n                      </section>\n                    </div>\n                  </div>\n                </form>\n              </fieldset>\n            </div>\n          </div>\n        </div>\n      </div>\n    </mat-tab>\n  </mat-tab-group>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/view/view.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/view/view.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"isViewPage\">\n  <div class=\"container-fluid buttonlist\" *ngIf=\"!IsBtnlstHiddn\">\n    <div class=\"row\">\n      <a class=\"btn-a\" (click)=\"NewButtonClicked(details.Url,details.FormId)\" role=\"button\">\n        <i class=\"fa fa-plus fa-lg\"></i> New\n      </a>\n    </div>\n  </div>\n  <div class=\"container-fluid\">\n    <div class=\"col-md-12\">\n      <div class=\"table-responsive\">\n        <mat-form-field class=\"example-full-width\" style=\"margin-top: 20px;\">\n          <input matInput type=\"text\" (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Filter\">\n        </mat-form-field>\n        <table class=\"table table-hover table-sm fixed_header\" matSort (matSortChange)=\"sortData($event)\">\n          <thead>\n            <tr>\n              <ng-container *ngFor=\"let col of details.Columns\">\n                <th style=\"font-size: 13px;font-weight: 500;\" *ngIf=\"col.IsVisible\"\n                  mat-sort-header=\"{{col.ColumnName}}\">{{col.DisplayName}}</th>\n              </ng-container>\n              <th></th>\n            </tr>\n          </thead>\n          <tbody>\n            <ng-container *ngFor=\"let rowData of dataSource\">\n              <tr>\n                <ng-container *ngFor=\"let col of details.Columns\">\n                  <td style=\"font-size: 12px;\" *ngIf=\"col.IsVisible\">{{rowData | Columns:col.ColumnName}}</td>\n                </ng-container>\n                <td>\n                  <a class=\"btn-a\" (click)=\"ViewButtonClicked(details.Url,details.FormId,rowData.Id)\" role=\"button\">\n                    <i class=\"fa fa-eye\"></i> View</a>\n                </td>\n              </tr>\n            </ng-container>\n          </tbody>\n        </table>\n      </div>\n      <div class=\"row pull-right\">\n        <mat-paginator #paginator [pageSize]=\"pageSize\" [pageSizeOptions]=\"[20,50, 100, 500,1000]\"\n          [showFirstLastButtons]=\"true\" [length]=\"totalSize\" [pageIndex]=\"currentPage\" (page)=\"handlePage($event)\">\n        </mat-paginator>\n      </div>\n    </div>\n  </div>\n</div>\n\n<div *ngIf=\"!isViewPage\">\n  <div class=\"container-fluid buttonlist\" *ngIf=\"!IsBtnlstHiddn\">\n    <div class=\"row\">\n      <a class=\"btn-a\" (click)=\"onNewButtonClicked()\" role=\"button\">\n        <i class=\"fa fa-plus fa-lg\"></i> New\n      </a>\n    </div>\n  </div>\n  <div class=\"container-fluid\">\n    <div class=\"col-md-12\">\n      <div class=\"table-responsive\">\n        <mat-form-field class=\"example-full-width\" style=\"margin-top: 20px;\">\n          <input matInput type=\"text\" (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Filter\">\n        </mat-form-field>\n        <table class=\"table table-hover table-sm fixed_header\" matSort (matSortChange)=\"sortData($event)\">\n          <thead>\n            <tr>\n              <ng-container *ngFor=\"let col of details.Columns\">\n                <th style=\"font-size: 13px;font-weight: 500;\" *ngIf=\"col.IsVisible\"\n                  mat-sort-header=\"{{col.ColumnName}}\">{{col.DisplayName}}</th>\n              </ng-container>\n              <th></th>\n            </tr>\n          </thead>\n          <tbody>\n            <ng-container *ngFor=\"let rowData of dataSource\">\n              <tr>\n                <ng-container *ngFor=\"let col of details.Columns\">\n                  <td style=\"font-size: 12px;\" *ngIf=\"col.IsVisible\">{{rowData | Columns:col.ColumnName}}</td>\n                </ng-container>\n                <td>\n                  <a class=\"btn-a\" (click)=\"onViewButtonClicked(rowData.Id)\" role=\"button\">\n                    <i class=\"fa fa-eye\"></i> View</a>\n                </td>\n              </tr>\n            </ng-container>\n          </tbody>\n        </table>\n      </div>\n      <div class=\"row pull-right\">\n        <mat-paginator #paginator [pageSize]=\"pageSize\" [pageSizeOptions]=\"[20,50, 100, 500,1000]\"\n          [showFirstLastButtons]=\"true\" [length]=\"totalSize\" [pageIndex]=\"currentPage\" (page)=\"handlePage($event)\">\n        </mat-paginator>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/common/models/department.ts":
/*!*********************************************!*\
  !*** ./src/app/common/models/department.ts ***!
  \*********************************************/
/*! exports provided: Department */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Department", function() { return Department; });
class Department {
    constructor() {
        this.Id = 0;
        this.ParentId = 0;
        this.DepartmentCode = '';
        this.DepartmentName = '';
        this.ExtendedDescription = '';
        this.DepStatus = 0;
    }
}


/***/ }),

/***/ "./src/app/common/models/letter.ts":
/*!*****************************************!*\
  !*** ./src/app/common/models/letter.ts ***!
  \*****************************************/
/*! exports provided: Letter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Letter", function() { return Letter; });
class Letter {
    constructor() {
        this.Id = 0;
        this.LetterCode = 'AUTO GENERATED CODE';
        this.LetterRefNO = '';
        this.LetterCategory = 1;
        this.DepartmentId = 1;
        this.CreatedUserId = 0;
        this.CreatedDate = new Date();
        this.ReferenceLetterId = 0;
        this.FromAddress = '';
        this.ToAddress = '';
        this.ToWhom = '';
        this.SendOrReceive = 0;
        this.PostType = 0;
        this.Subject = '';
        // LetterDoc;
        this.Progress = '';
        this.LetterContant = '';
        this.SendOrReceiveDate = new Date();
    }
}


/***/ }),

/***/ "./src/app/common/models/user.ts":
/*!***************************************!*\
  !*** ./src/app/common/models/user.ts ***!
  \***************************************/
/*! exports provided: User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
class User {
    constructor() {
        this.Id = 0;
        this.UserName = '';
        this.Title = 1;
        this.FullName = '';
        this.DisplayName = '';
        this.Email = '';
        this.UserLevel = 1;
        this.Password = '';
        this.ConfirmPassword = '';
        this.CreatedDate = new Date();
        this.DepartmentId = 1;
        this.Status = 1;
    }
}


/***/ }),

/***/ "./src/app/common/services/common.service.ts":
/*!***************************************************!*\
  !*** ./src/app/common/services/common.service.ts ***!
  \***************************************************/
/*! exports provided: CommonService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommonService", function() { return CommonService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");







let CommonService = class CommonService {
    constructor(httpClient, router) {
        this.httpClient = httpClient;
        this.router = router;
        this.baseUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].baseUrl;
    }
    getController(formId) {
        const forms = [{
                formid: 1001,
                control: 'Department'
            }, {
                formid: 1002,
                control: 'User'
            },
            {
                formid: 1003,
                control: 'Letter'
            }, {
                formid: 0,
                control: 'Common'
            }
        ];
        const frm = forms.filter(a => a.formid === parseInt(formId, 10));
        if (frm.length > 0) {
            return frm[0].control;
        }
        else {
            return '';
        }
    }
    httpCllaUrl(url) {
        this.getToken();
        const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                Authorization: 'Bearer ' + this.UserToken,
                'Content-Type': 'application/json',
            })
        };
        return this.httpClient
            .get(this.baseUrl + url, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(res => res), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    }
    httpGetData(formId, id) {
        this.getToken();
        const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                Authorization: 'Bearer ' + this.UserToken,
                'Content-Type': 'application/json',
            })
        };
        const Controller = this.getController(formId);
        if (Controller !== '') {
            return this.httpClient
                .get(this.baseUrl + Controller + '/' + id, httpOptions)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(res => res), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
        }
        else {
            Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["throwError"])('Page not found...!');
        }
    }
    httpGetListValue(listId, isaParameter) {
        this.getToken();
        const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                Authorization: 'Bearer ' + this.UserToken,
                'Content-Type': 'application/json',
            })
        };
        //const Controller = this.getController(formId);
        return this.httpClient
            .get(this.baseUrl + 'Common/listvalue/' + listId + '/' + isaParameter, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(res => res), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    }
    httpGetPairValues(id, filter = '') {
        this.getToken();
        const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                Authorization: 'Bearer ' + this.UserToken,
                'Content-Type': 'application/json',
            })
        };
        if (filter === '') {
            return this.httpClient
                .get(this.baseUrl + 'Common/GetPairValue?id=' + id, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(res => res), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
        }
        else {
            return this.httpClient
                .get(this.baseUrl + 'Common/GetPairValue?id=' + id + '&filter=' + filter, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(res => res), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
        }
    }
    httpGetList({ formId, start, limit, filter }) {
        this.getToken();
        const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                Authorization: 'Bearer ' + this.UserToken,
                'Content-Type': 'application/json',
            })
        };
        const Controller = this.getController(formId);
        if (Controller === '') {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["throwError"])('Page not found...!');
        }
        const url = this.baseUrl + Controller + '/' + start
            + '/' + limit + '/' + filter;
        return this.httpClient
            .get(url, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(res => res), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    }
    httpPost(Obj, formId, id) {
        this.getToken();
        const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                Authorization: 'Bearer ' + this.UserToken,
                'Content-Type': 'application/json',
            })
        };
        const Controller = this.getController(formId);
        Obj.ObId = undefined;
        return this.httpClient.post(this.baseUrl + Controller + '/' + id, JSON.stringify(Obj), httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(res => res), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
        /*
        if (id === 0) {
          return this.httpClient.post(this.baseUrl + Controller, JSON.stringify(Obj), httpOptions)
            .pipe(
              map(res => res),
              catchError(this.handleError)
            );
        } else {
          return this.httpClient.put(this.baseUrl + Controller + '/put/' + id, JSON.stringify(Obj), httpOptions)
            .pipe(
              map(res => res),
              catchError(this.handleError)
            );
        }
        */
    }
    handleError(error) {
        let errorMessage = '';
        if (error.status == 401) {
            errorMessage = 'Unauthorized Access...!';
            localStorage.removeItem('currentUser');
        }
        if (error.error instanceof ErrorEvent) {
            errorMessage = error.error.message;
        }
        else {
            errorMessage = error.error.ExceptionMessage;
            console.log('Error Code: ' + error.status + '<br/>Message: ' + error.error.ExceptionMessage);
        }
        // new Toast().Danger(errorMessage);
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["throwError"])(errorMessage);
    }
    getToken() {
        if (localStorage.getItem('currentUser')) {
            const userObj = JSON.parse(localStorage.getItem('currentUser'));
            this.UserToken = userObj.token;
        }
        else {
            this.router.navigateByUrl('/login');
            return false;
        }
    }
};
CommonService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] }
];
CommonService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], CommonService);



/***/ }),

/***/ "./src/app/layouts/admin-layout/admin-layout.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/layouts/admin-layout/admin-layout.module.ts ***!
  \*************************************************************/
/*! exports provided: AdminLayoutModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminLayoutModule", function() { return AdminLayoutModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _admin_layout_routing__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./admin-layout.routing */ "./src/app/layouts/admin-layout/admin-layout.routing.ts");
/* harmony import */ var app_materialodule__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/materialodule */ "./src/app/materialodule.ts");
/* harmony import */ var _common_services_configuration_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../common/services/configuration.service */ "./src/app/common/services/configuration.service.ts");
/* harmony import */ var app_pages_userprofile_userprofile_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! app/pages/userprofile/userprofile.component */ "./src/app/pages/userprofile/userprofile.component.ts");
/* harmony import */ var app_pages_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! app/pages/dashboard/dashboard.component */ "./src/app/pages/dashboard/dashboard.component.ts");
/* harmony import */ var app_pages_view_view_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! app/pages/view/view.component */ "./src/app/pages/view/view.component.ts");
/* harmony import */ var app_pages_commonviewpage_commonviewpage_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! app/pages/commonviewpage/commonviewpage.component */ "./src/app/pages/commonviewpage/commonviewpage.component.ts");
/* harmony import */ var app_pages_department_department_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! app/pages/department/department.component */ "./src/app/pages/department/department.component.ts");
/* harmony import */ var app_pages_matselect_matselect_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! app/pages/matselect/matselect.component */ "./src/app/pages/matselect/matselect.component.ts");
/* harmony import */ var ngx_mat_select_search__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ngx-mat-select-search */ "./node_modules/ngx-mat-select-search/fesm2015/ngx-mat-select-search.js");
/* harmony import */ var app_pages_letter_letter_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! app/pages/letter/letter.component */ "./src/app/pages/letter/letter.component.ts");
/* harmony import */ var app_pages_letterview_letterview_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! app/pages/letterview/letterview.component */ "./src/app/pages/letterview/letterview.component.ts");
/* harmony import */ var app_pages_configurations_configurations_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! app/pages/configurations/configurations.component */ "./src/app/pages/configurations/configurations.component.ts");



















let AdminLayoutModule = class AdminLayoutModule {
};
AdminLayoutModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(_admin_layout_routing__WEBPACK_IMPORTED_MODULE_5__["AdminLayoutRoutes"]),
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
            app_materialodule__WEBPACK_IMPORTED_MODULE_6__["MaterialModule"],
            ngx_mat_select_search__WEBPACK_IMPORTED_MODULE_14__["NgxMatSelectSearchModule"],
        ],
        declarations: [
            app_pages_userprofile_userprofile_component__WEBPACK_IMPORTED_MODULE_8__["UserprofileComponent"],
            app_pages_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_9__["DashboardComponent"],
            app_pages_view_view_component__WEBPACK_IMPORTED_MODULE_10__["ViewComponent"],
            app_pages_view_view_component__WEBPACK_IMPORTED_MODULE_10__["ColumnsPipe"],
            app_pages_commonviewpage_commonviewpage_component__WEBPACK_IMPORTED_MODULE_11__["CommonviewpageComponent"],
            app_pages_department_department_component__WEBPACK_IMPORTED_MODULE_12__["DepartmentComponent"],
            app_pages_matselect_matselect_component__WEBPACK_IMPORTED_MODULE_13__["MatselectComponent"],
            app_pages_letter_letter_component__WEBPACK_IMPORTED_MODULE_15__["LetterComponent"],
            app_pages_letterview_letterview_component__WEBPACK_IMPORTED_MODULE_16__["LetterviewComponent"],
            app_pages_configurations_configurations_component__WEBPACK_IMPORTED_MODULE_17__["ConfigurationsComponent"]
        ],
        providers: [_common_services_configuration_service__WEBPACK_IMPORTED_MODULE_7__["ConfigurationService"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["DatePipe"]],
    })
], AdminLayoutModule);



/***/ }),

/***/ "./src/app/layouts/admin-layout/admin-layout.routing.ts":
/*!**************************************************************!*\
  !*** ./src/app/layouts/admin-layout/admin-layout.routing.ts ***!
  \**************************************************************/
/*! exports provided: AdminLayoutRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminLayoutRoutes", function() { return AdminLayoutRoutes; });
/* harmony import */ var app_pages_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/pages/dashboard/dashboard.component */ "./src/app/pages/dashboard/dashboard.component.ts");
/* harmony import */ var app_pages_commonviewpage_commonviewpage_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/pages/commonviewpage/commonviewpage.component */ "./src/app/pages/commonviewpage/commonviewpage.component.ts");
/* harmony import */ var app_pages_userprofile_userprofile_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/pages/userprofile/userprofile.component */ "./src/app/pages/userprofile/userprofile.component.ts");
/* harmony import */ var app_pages_department_department_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/pages/department/department.component */ "./src/app/pages/department/department.component.ts");
/* harmony import */ var app_pages_matselect_matselect_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/pages/matselect/matselect.component */ "./src/app/pages/matselect/matselect.component.ts");
/* harmony import */ var app_pages_letterview_letterview_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/pages/letterview/letterview.component */ "./src/app/pages/letterview/letterview.component.ts");
/* harmony import */ var app_pages_letter_letter_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/pages/letter/letter.component */ "./src/app/pages/letter/letter.component.ts");
/* harmony import */ var app_pages_configurations_configurations_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! app/pages/configurations/configurations.component */ "./src/app/pages/configurations/configurations.component.ts");








const AdminLayoutRoutes = [
    { path: 'dashboard', component: app_pages_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_0__["DashboardComponent"] },
    { path: 'configuration', component: app_pages_configurations_configurations_component__WEBPACK_IMPORTED_MODULE_7__["ConfigurationsComponent"] },
    { path: 'user/:formId', component: app_pages_commonviewpage_commonviewpage_component__WEBPACK_IMPORTED_MODULE_1__["CommonviewpageComponent"] },
    { path: 'user/:formId/:id', component: app_pages_userprofile_userprofile_component__WEBPACK_IMPORTED_MODULE_2__["UserprofileComponent"] },
    { path: 'department/:formId', component: app_pages_commonviewpage_commonviewpage_component__WEBPACK_IMPORTED_MODULE_1__["CommonviewpageComponent"] },
    { path: 'department/:formId/:id', component: app_pages_department_department_component__WEBPACK_IMPORTED_MODULE_3__["DepartmentComponent"] },
    { path: 'letter/:formId', component: app_pages_letterview_letterview_component__WEBPACK_IMPORTED_MODULE_5__["LetterviewComponent"] },
    { path: 'letter/:formId/:id', component: app_pages_letter_letter_component__WEBPACK_IMPORTED_MODULE_6__["LetterComponent"] },
    { path: 'select', component: app_pages_matselect_matselect_component__WEBPACK_IMPORTED_MODULE_4__["MatselectComponent"] },
];


/***/ }),

/***/ "./src/app/pages/commonviewpage/commonviewpage.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/pages/commonviewpage/commonviewpage.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NvbW1vbnZpZXdwYWdlL2NvbW1vbnZpZXdwYWdlLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/commonviewpage/commonviewpage.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/pages/commonviewpage/commonviewpage.component.ts ***!
  \******************************************************************/
/*! exports provided: CommonviewpageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommonviewpageComponent", function() { return CommonviewpageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



let CommonviewpageComponent = class CommonviewpageComponent {
    constructor(activatedRoute) {
        this.activatedRoute = activatedRoute;
        this.formId = 0;
        this.activatedRoute
            .params
            .subscribe(params => {
            this.formId = parseInt(params['formId'], 10);
        });
    }
    ngOnInit() {
    }
    loadPage() {
    }
    newPage() {
    }
};
CommonviewpageComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
];
CommonviewpageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-commonviewpage',
        template: __webpack_require__(/*! raw-loader!./commonviewpage.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/commonviewpage/commonviewpage.component.html"),
        styles: [__webpack_require__(/*! ./commonviewpage.component.css */ "./src/app/pages/commonviewpage/commonviewpage.component.css")]
    })
], CommonviewpageComponent);



/***/ }),

/***/ "./src/app/pages/configurations/configurations.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/pages/configurations/configurations.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".list-group>li {\n  border-bottom: 1px solid #94a1b7;\n  padding-left: 0px;\n  padding-bottom: 1px;\n  padding-right: 2px;\n}\n\n#tab-group {\n  height: 100%;\n}\n\n::ng-deep .mat-tab-body-wrapper {\n  height: 100%;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvY29uZmlndXJhdGlvbnMvY29uZmlndXJhdGlvbnMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdDQUFnQztFQUNoQyxpQkFBaUI7RUFDakIsbUJBQW1CO0VBQ25CLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLFlBQVk7QUFDZCIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NvbmZpZ3VyYXRpb25zL2NvbmZpZ3VyYXRpb25zLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubGlzdC1ncm91cD5saSB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjOTRhMWI3O1xuICBwYWRkaW5nLWxlZnQ6IDBweDtcbiAgcGFkZGluZy1ib3R0b206IDFweDtcbiAgcGFkZGluZy1yaWdodDogMnB4O1xufVxuXG4jdGFiLWdyb3VwIHtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG46Om5nLWRlZXAgLm1hdC10YWItYm9keS13cmFwcGVyIHtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/pages/configurations/configurations.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/pages/configurations/configurations.component.ts ***!
  \******************************************************************/
/*! exports provided: ConfigurationsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfigurationsComponent", function() { return ConfigurationsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var app_common_models_toast__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/common/models/toast */ "./src/app/common/models/toast.ts");
/* harmony import */ var app_common_services_common_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/common/services/common.service */ "./src/app/common/services/common.service.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm2015/ngx-spinner.js");





let ConfigurationsComponent = class ConfigurationsComponent {
    constructor(serv, spinner) {
        this.serv = serv;
        this.spinner = spinner;
        this.listArray = [];
        this.listvalueArray = [];
        this.currentList = {
            listId: 0,
            description: ''
        };
        this.toast = new app_common_models_toast__WEBPACK_IMPORTED_MODULE_2__["Toast"]();
    }
    ngOnInit() {
        this.loadAllList();
    }
    loadAllList() {
        this.spinner.show();
        this.serv.httpCllaUrl('common/ParameterLists')
            .subscribe((data) => {
            this.listArray = data;
            this.loadListvalues(data[0].listId);
            this.spinner.hide();
        }, (error) => {
            this.spinner.hide();
            this.toast.Danger(error);
        });
    }
    loadListvalues(listId) {
        // tslint:disable-next-line: triple-equals
        const rs = this.listArray.find(e => e.listId == listId);
        this.currentList.listId = rs.listId;
        this.currentList.description = rs.description;
        this.listvalueArray = [];
        this.serv.httpGetListValue(this.currentList.listId, true)
            .subscribe((data) => {
            if (data.length > 0) {
                data.forEach(e => {
                    this.listvalueArray.push({
                        id: e.id,
                        value: e.value,
                        isEdit: false
                    });
                });
            }
            else {
                this.listvalueArray.push({
                    id: 0,
                    value: '',
                    isEdit: true
                });
            }
        }, (error) => {
            this.toast.Danger({ message: error });
        });
    }
    updateListValue(obj) {
        if (obj.value != '') {
            this.spinner.show();
            this.serv.httpPost({ ListId: this.currentList.listId, ListValueId: obj.id, Value: obj.value }, 0, obj.id)
                .subscribe((data) => {
                this.spinner.hide();
                this.toast.Success({ message: 'Successfully updated' });
                this.loadListvalues(this.currentList.listId);
            }, (error) => {
                this.spinner.hide();
                this.toast.Danger({ message: error });
            });
        }
    }
    addNewRow(obj) {
        if (obj.value != '') {
            this.listvalueArray.push({
                id: 0,
                value: '',
                isEdit: true
            });
        }
    }
};
ConfigurationsComponent.ctorParameters = () => [
    { type: app_common_services_common_service__WEBPACK_IMPORTED_MODULE_3__["CommonService"] },
    { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_4__["NgxSpinnerService"] }
];
ConfigurationsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-configurations',
        template: __webpack_require__(/*! raw-loader!./configurations.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/configurations/configurations.component.html"),
        styles: [__webpack_require__(/*! ./configurations.component.css */ "./src/app/pages/configurations/configurations.component.css")]
    })
], ConfigurationsComponent);



/***/ }),

/***/ "./src/app/pages/dashboard/dashboard.component.css":
/*!*********************************************************!*\
  !*** ./src/app/pages/dashboard/dashboard.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/dashboard/dashboard.component.ts":
/*!********************************************************!*\
  !*** ./src/app/pages/dashboard/dashboard.component.ts ***!
  \********************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let DashboardComponent = class DashboardComponent {
    constructor() {
        this.CurrentUser = JSON.parse(localStorage.getItem('currentUser'));
    }
    ngOnInit() {
    }
};
DashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-dashboard',
        template: __webpack_require__(/*! raw-loader!./dashboard.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/dashboard/dashboard.component.html"),
        styles: [__webpack_require__(/*! ./dashboard.component.css */ "./src/app/pages/dashboard/dashboard.component.css")]
    })
], DashboardComponent);



/***/ }),

/***/ "./src/app/pages/department/department.component.css":
/*!***********************************************************!*\
  !*** ./src/app/pages/department/department.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2RlcGFydG1lbnQvZGVwYXJ0bWVudC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/department/department.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/pages/department/department.component.ts ***!
  \**********************************************************/
/*! exports provided: MyErrorStateMatcher, DepartmentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyErrorStateMatcher", function() { return MyErrorStateMatcher; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DepartmentComponent", function() { return DepartmentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var app_common_models_toast__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/common/models/toast */ "./src/app/common/models/toast.ts");
/* harmony import */ var app_common_services_common_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/common/services/common.service */ "./src/app/common/services/common.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var app_common_models_department__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/common/models/department */ "./src/app/common/models/department.ts");







class MyErrorStateMatcher {
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
        this.department = new app_common_models_department__WEBPACK_IMPORTED_MODULE_6__["Department"]();
        this.toast = new app_common_models_toast__WEBPACK_IMPORTED_MODULE_3__["Toast"]();
        this.frmDepartment = this.formBuilder.group({
            Id: [0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([])],
            ParentId: [0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([])],
            Departmentcode: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, this.noWhitespaceValidator])],
            DepartmentName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, this.noWhitespaceValidator])],
            ExtendedDescription: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([])],
            DepStatus: [1, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([])],
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
DepartmentComponent.ctorParameters = () => [
    { type: app_common_services_common_service__WEBPACK_IMPORTED_MODULE_4__["CommonService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }
];
DepartmentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-department',
        template: __webpack_require__(/*! raw-loader!./department.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/department/department.component.html"),
        styles: [__webpack_require__(/*! ./department.component.css */ "./src/app/pages/department/department.component.css")]
    })
], DepartmentComponent);



/***/ }),

/***/ "./src/app/pages/letter/letter.component.css":
/*!***************************************************!*\
  !*** ./src/app/pages/letter/letter.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2xldHRlci9sZXR0ZXIuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/letter/letter.component.ts":
/*!**************************************************!*\
  !*** ./src/app/pages/letter/letter.component.ts ***!
  \**************************************************/
/*! exports provided: MyErrorStateMatcher, LetterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyErrorStateMatcher", function() { return MyErrorStateMatcher; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LetterComponent", function() { return LetterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _common_services_common_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../common/services/common.service */ "./src/app/common/services/common.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _common_models_toast__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../common/models/toast */ "./src/app/common/models/toast.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm2015/ngx-spinner.js");
/* harmony import */ var app_common_models_letter__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! app/common/models/letter */ "./src/app/common/models/letter.ts");








class MyErrorStateMatcher {
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
        this.letter = new app_common_models_letter__WEBPACK_IMPORTED_MODULE_7__["Letter"]();
        this.toast = new _common_models_toast__WEBPACK_IMPORTED_MODULE_5__["Toast"]();
        this.frmLetter = this.formBuilder.group({
            Id: [0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([])],
            LetterCode: [{ value: 'AUTO GENERATED CODE', disabled: true }, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([])],
            LetterRefNO: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, this.noWhitespaceValidator])],
            LetterCategory: [1, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([])],
            DepartmentId: [1, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([])],
            ReferenceLetter: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([])],
            FromAddress: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, this.noWhitespaceValidator])],
            ToAddress: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])],
            ToWhom: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])],
            SendOrReceive: [1, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([])],
            PostType: [1, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([])],
            Subject: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([])],
            SendOrReceiveDate: [new Date(), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([])]
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
LetterComponent.ctorParameters = () => [
    { type: _common_services_common_service__WEBPACK_IMPORTED_MODULE_3__["CommonService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_6__["NgxSpinnerService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }
];
LetterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-letter',
        template: __webpack_require__(/*! raw-loader!./letter.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/letter/letter.component.html"),
        styles: [__webpack_require__(/*! ./letter.component.css */ "./src/app/pages/letter/letter.component.css")]
    })
], LetterComponent);



/***/ }),

/***/ "./src/app/pages/letterview/letterview.component.css":
/*!***********************************************************!*\
  !*** ./src/app/pages/letterview/letterview.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2xldHRlcnZpZXcvbGV0dGVydmlldy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/letterview/letterview.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/pages/letterview/letterview.component.ts ***!
  \**********************************************************/
/*! exports provided: LetterviewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LetterviewComponent", function() { return LetterviewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var app_common_services_common_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/common/services/common.service */ "./src/app/common/services/common.service.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm2015/ngx-spinner.js");
/* harmony import */ var app_common_models_toast__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/common/models/toast */ "./src/app/common/models/toast.ts");







let LetterviewComponent = class LetterviewComponent {
    constructor(commonService, activatedRoute, spinner, router) {
        this.commonService = commonService;
        this.activatedRoute = activatedRoute;
        this.spinner = spinner;
        this.router = router;
        this.details = {};
        this.currentPage = 0;
        this.pageSize = 50;
        this.totalSize = 0;
        this.departnemtId = 1;
        this.frmDate = new Date();
        this.toDate = new Date(new Date().setDate(new Date().getDate() + 1));
        this.filter = 'null';
        this.tost = new app_common_models_toast__WEBPACK_IMPORTED_MODULE_6__["Toast"]();
    }
    newLetter() {
        this.router.navigateByUrl('/letter/1003/0');
        this.router.routeReuseStrategy.shouldReuseRoute = () => {
            return false;
        };
    }
    ViewButtonClicked(path, formId, Id) {
        this.router.navigateByUrl('/' + path + '/' + formId + '/' + Id);
    }
    NewButtonClicked(path, formId) {
        this.router.navigateByUrl('/' + path + '/' + formId + '/' + 0);
        this.router.routeReuseStrategy.shouldReuseRoute = () => {
            return false;
        };
    }
    ngOnInit() {
        this.loadDetails();
    }
    loadDetails() {
        this.activatedRoute
            .params
            .subscribe(params => {
            this.spinner.show();
            const url = 'Letter/0/' + this.pageSize + '/' + this.filter + '/' + this.departnemtId + '/'
                + this.frmDate.toDateString() + '/' + this.toDate.toDateString();
            this.commonService.httpCllaUrl(url)
                .subscribe((data) => {
                this.initData(data);
                this.spinner.hide();
            }, (error) => {
                this.spinner.hide();
                this.tost.Danger({ message: error });
            });
        });
    }
    findData() {
        this.loadDetails();
    }
    initData(data) {
        this.details = data;
        this.details.Columns.sort((a, b) => {
            if (a.DisplayOrder < b.DisplayOrder) {
                return -1;
            }
            if (a.DisplayOrder > b.DisplayOrder) {
                return 1;
            }
            return 0;
        });
        this.sortedData = this.details.Details.slice();
        this.array = this.sortedData;
        this.makpage(this.sortedData, false);
        this.columns = this.details.Columns;
    }
    sortData(sort) {
        const data = this.details.Details.slice();
        if (!sort.active || sort.direction === '') {
            this.sortedData = data;
            this.makpage(this.sortedData, true);
            return;
        }
        this.sortedData = data.sort((a, b) => {
            const isAsc = sort.direction === 'asc';
            return this.compare(a[sort.active], b[sort.active], isAsc);
        });
        this.makpage(this.sortedData, true);
    }
    compare(a, b, isAsc) {
        return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
    }
    handlePage(e) {
        this.currentPage = e.pageIndex;
        this.pageSize = e.pageSize;
        this.iterator(this.array);
    }
    makpage(response, isSort) {
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"](response);
        this.dataSource.paginator = this.paginator;
        this.totalSize = this.array.length;
        this.iterator((isSort) ? response : this.array);
    }
    iterator(arr) {
        const end = (this.currentPage + 1) * this.pageSize;
        const start = this.currentPage * this.pageSize;
        const part = arr.slice(start, end);
        this.dataSource = part;
    }
    applyFilter(filterValue) {
        this.filter = filterValue;
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"](this.array);
        this.dataSource.filter = filterValue.trim().toLowerCase();
        this.dataSource.paginator = this.paginator;
        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
        this.makpage(this.dataSource.filteredData, true);
    }
};
LetterviewComponent.ctorParameters = () => [
    { type: app_common_services_common_service__WEBPACK_IMPORTED_MODULE_4__["CommonService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_5__["NgxSpinnerService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"], { static: false })
], LetterviewComponent.prototype, "paginator", void 0);
LetterviewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-letterview',
        template: __webpack_require__(/*! raw-loader!./letterview.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/letterview/letterview.component.html"),
        styles: [__webpack_require__(/*! ./letterview.component.css */ "./src/app/pages/letterview/letterview.component.css")]
    })
], LetterviewComponent);



/***/ }),

/***/ "./src/app/pages/matselect/matselect.component.css":
/*!*********************************************************!*\
  !*** ./src/app/pages/matselect/matselect.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL21hdHNlbGVjdC9tYXRzZWxlY3QuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/matselect/matselect.component.ts":
/*!********************************************************!*\
  !*** ./src/app/pages/matselect/matselect.component.ts ***!
  \********************************************************/
/*! exports provided: MatselectComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatselectComponent", function() { return MatselectComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var app_common_services_common_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/common/services/common.service */ "./src/app/common/services/common.service.ts");
/* harmony import */ var app_common_models_toast__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/common/models/toast */ "./src/app/common/models/toast.ts");

var MatselectComponent_1;







const customValueProvider = {
    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"],
    // tslint:disable-next-line: no-use-before-declare
    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(() => MatselectComponent),
    multi: true
};
let MatselectComponent = MatselectComponent_1 = class MatselectComponent {
    constructor(serv) {
        this.serv = serv;
        // protected options: any[] = [{ Id: 1, Value: 'option1' }, { Id: 2, Value: 'option2' }, { Id: 3, Value: 'option3' }];
        this.frmctrlMatselect = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]();
        this.frmCtrlFilterCtrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]();
        this.filteredoptions = new rxjs__WEBPACK_IMPORTED_MODULE_3__["ReplaySubject"](1);
        this.listId = 0;
        this.isaParameter = false;
        this.DefaultOption = false;
        this.SelectedValueChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onDestroy = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.toast = new app_common_models_toast__WEBPACK_IMPORTED_MODULE_6__["Toast"]();
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
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(this.onDestroy))
            .subscribe(() => {
            this.filterBanks();
        });
    }
    ngAfterViewInit() {
        // this.setInitialValue();
    }
    getListValues(listId, isaParameter) {
        this.serv.httpGetListValue(listId, isaParameter)
            .subscribe((data) => {
            this.options = data;
            this.frmctrlMatselect.setValue((this.InitValue) ? this.InitValue.toString() : this.options[0]);
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
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(this.onDestroy))
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
        this.filteredoptions.next(this.options.filter(option => option.value.toLowerCase().indexOf(search) > -1));
    }
    OnValueChanged() {
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
MatselectComponent.ctorParameters = () => [
    { type: app_common_services_common_service__WEBPACK_IMPORTED_MODULE_5__["CommonService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], MatselectComponent.prototype, "options", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], MatselectComponent.prototype, "listId", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], MatselectComponent.prototype, "isaParameter", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], MatselectComponent.prototype, "placeholder", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], MatselectComponent.prototype, "InitValue", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], MatselectComponent.prototype, "DefaultOption", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], MatselectComponent.prototype, "SelectedValueChanged", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('selectId', { static: false })
], MatselectComponent.prototype, "selectId", void 0);
MatselectComponent = MatselectComponent_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-matselect',
        template: __webpack_require__(/*! raw-loader!./matselect.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/matselect/matselect.component.html"),
        providers: [{
                provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"],
                useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(() => MatselectComponent_1),
                multi: true
            }],
        styles: [__webpack_require__(/*! ./matselect.component.css */ "./src/app/pages/matselect/matselect.component.css")]
    })
], MatselectComponent);



/***/ }),

/***/ "./src/app/pages/userprofile/userprofile.component.css":
/*!*************************************************************!*\
  !*** ./src/app/pages/userprofile/userprofile.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3VzZXJwcm9maWxlL3VzZXJwcm9maWxlLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/userprofile/userprofile.component.ts":
/*!************************************************************!*\
  !*** ./src/app/pages/userprofile/userprofile.component.ts ***!
  \************************************************************/
/*! exports provided: MyErrorStateMatcher, UserprofileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyErrorStateMatcher", function() { return MyErrorStateMatcher; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserprofileComponent", function() { return UserprofileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _common_models_user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../common/models/user */ "./src/app/common/models/user.ts");
/* harmony import */ var _common_services_common_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../common/services/common.service */ "./src/app/common/services/common.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _common_models_toast__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../common/models/toast */ "./src/app/common/models/toast.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm2015/ngx-spinner.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");








class MyErrorStateMatcher {
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
        this.departments = [];
        this.titles = [{ id: 'Mr.', value: 'Mr.' },
            { id: 'Mrs.', value: 'Mrs.' },
            { id: 'Ms.', value: 'Ms.' },
            { id: 'Miss.', value: 'Miss.' }];
        this.user = new _common_models_user__WEBPACK_IMPORTED_MODULE_2__["User"]();
        this.toast = new _common_models_toast__WEBPACK_IMPORTED_MODULE_5__["Toast"]();
        this.frmUserProfile = this.formBuilder.group({
            Title: ['Mr.'],
            FullName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required, this.noWhitespaceValidator])],
            Email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].email])],
            DisplayName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required, this.noWhitespaceValidator])],
            UserName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required, this.noWhitespaceValidator])],
            UserLevel: [1],
            Branch: [''],
            Password: [''],
            ConfirmPassword: [''],
            DepartmentId: [1]
        }, {
            validator: this.checkPasswords
        });
        this.activatedRoute
            .params
            .subscribe(params => {
            this.user.Id = Number.isNaN(params.id) ? 0 : Number(params.id);
            if (this.user.Id !== 0) {
                this.isNewUser = false;
                this.loadUser(this.user.Id);
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
    }
    loadUser(id) {
        if (id != undefined && id != 0) {
            this.spinner.show();
            this.serv.httpGetData(1002, id)
                .subscribe((data) => {
                this.user = data;
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
            }, (error) => {
                this.spinner.hide();
                this.toast.Danger({ message: error });
            });
        }
    }
    newUser() {
        this.router.navigateByUrl('/user/1002/0');
        this.router.routeReuseStrategy.shouldReuseRoute = () => {
            return false;
        };
    }
    back() {
        this.router.navigateByUrl('/user/1002');
    }
};
UserprofileComponent.ctorParameters = () => [
    { type: _common_services_common_service__WEBPACK_IMPORTED_MODULE_3__["CommonService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_6__["NgxSpinnerService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormBuilder"] }
];
UserprofileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-userprofile',
        template: __webpack_require__(/*! raw-loader!./userprofile.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/userprofile/userprofile.component.html"),
        styles: [__webpack_require__(/*! ./userprofile.component.css */ "./src/app/pages/userprofile/userprofile.component.css")]
    })
], UserprofileComponent);



/***/ }),

/***/ "./src/app/pages/view/view.component.css":
/*!***********************************************!*\
  !*** ./src/app/pages/view/view.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".buttonlist {\n  padding-bottom: 0px;\n  height: 30px;\n  margin-top: 0px;\n  background-color: #ebebeb;\n  padding-left: 15px;\n}\n\n@media (min-width: 991px) {\n  .buttonlist {\n    padding-bottom: 0px;\n    height: 40px;\n    margin-top: 0px;\n    background-color: #ebebeb;\n    padding-left: 15px;\n    padding-top: 5px;\n  }\n}\n\n.fixed_header {\n  table-layout: fixed;\n  border-collapse: collapse;\n}\n\n.fixed_header tbody {\n  display: block;\n  width: 100%;\n  overflow: auto;\n  max-height: 300px;\n}\n\n.fixed_header thead tr {\n  display: block;\n}\n\n.fixed_header th,\n.fixed_header td {\n  text-align: left;\n  width: 1%;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdmlldy92aWV3LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxtQkFBbUI7RUFDbkIsWUFBWTtFQUNaLGVBQWU7RUFDZix5QkFBeUI7RUFDekIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0U7SUFDRSxtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLGVBQWU7SUFDZix5QkFBeUI7SUFDekIsa0JBQWtCO0lBQ2xCLGdCQUFnQjtFQUNsQjtBQUNGOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxXQUFXO0VBQ1gsY0FBYztFQUNkLGlCQUFpQjtBQUNuQjs7QUFHQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7O0VBRUUsZ0JBQWdCO0VBQ2hCLFNBQVM7QUFDWCIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3ZpZXcvdmlldy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJ1dHRvbmxpc3Qge1xuICBwYWRkaW5nLWJvdHRvbTogMHB4O1xuICBoZWlnaHQ6IDMwcHg7XG4gIG1hcmdpbi10b3A6IDBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ViZWJlYjtcbiAgcGFkZGluZy1sZWZ0OiAxNXB4O1xufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogOTkxcHgpIHtcbiAgLmJ1dHRvbmxpc3Qge1xuICAgIHBhZGRpbmctYm90dG9tOiAwcHg7XG4gICAgaGVpZ2h0OiA0MHB4O1xuICAgIG1hcmdpbi10b3A6IDBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWJlYmViO1xuICAgIHBhZGRpbmctbGVmdDogMTVweDtcbiAgICBwYWRkaW5nLXRvcDogNXB4O1xuICB9XG59XG5cbi5maXhlZF9oZWFkZXIge1xuICB0YWJsZS1sYXlvdXQ6IGZpeGVkO1xuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xufVxuXG4uZml4ZWRfaGVhZGVyIHRib2R5IHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiAxMDAlO1xuICBvdmVyZmxvdzogYXV0bztcbiAgbWF4LWhlaWdodDogMzAwcHg7XG59XG5cblxuLmZpeGVkX2hlYWRlciB0aGVhZCB0ciB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4uZml4ZWRfaGVhZGVyIHRoLFxuLmZpeGVkX2hlYWRlciB0ZCB7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIHdpZHRoOiAxJTtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/pages/view/view.component.ts":
/*!**********************************************!*\
  !*** ./src/app/pages/view/view.component.ts ***!
  \**********************************************/
/*! exports provided: ViewComponent, ColumnsPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewComponent", function() { return ViewComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ColumnsPipe", function() { return ColumnsPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _common_services_common_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../common/services/common.service */ "./src/app/common/services/common.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _common_models_toast__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../common/models/toast */ "./src/app/common/models/toast.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm2015/ngx-spinner.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");








let ViewComponent = class ViewComponent {
    constructor(commonService, activatedRoute, spinner, router) {
        this.commonService = commonService;
        this.activatedRoute = activatedRoute;
        this.spinner = spinner;
        this.router = router;
        this.details = {};
        this.currentPage = 0;
        this.pageSize = 50;
        this.totalSize = 0;
        this.isViewPage = true;
        this.IsBtnlstHiddn = false;
        this.viewButtonClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.newButtonClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this._toast = new _common_models_toast__WEBPACK_IMPORTED_MODULE_5__["Toast"]();
    }
    ViewButtonClicked(path, formId, Id) {
        this.router.navigateByUrl('/' + path + '/' + formId + '/' + Id);
    }
    onViewButtonClicked(Id) {
        this.viewButtonClicked.emit(Id);
    }
    NewButtonClicked(path, formId) {
        this.router.navigateByUrl('/' + path + '/' + formId + '/' + 0);
        this.router.routeReuseStrategy.shouldReuseRoute = () => {
            return false;
        };
    }
    onNewButtonClicked() {
        this.newButtonClicked.emit(0);
    }
    ngOnInit() {
        this.loadDetails();
    }
    loadDetails() {
        this.activatedRoute
            .params
            .subscribe(params => {
            this.spinner.show();
            let frmId = params.formId;
            frmId = (this.isViewPage) ? frmId : this.formId;
            this.commonService.httpGetList({ formId: frmId, start: 0, limit: this.pageSize, filter: 'null' })
                .subscribe((data) => {
                this.details = data;
                this.details.Columns.sort((a, b) => {
                    if (a.DisplayOrder < b.DisplayOrder) {
                        return -1;
                    }
                    if (a.DisplayOrder > b.DisplayOrder) {
                        return 1;
                    }
                    return 0;
                });
                this.sortedData = this.details.Details.slice();
                this.array = this.sortedData;
                this.makpage(this.sortedData, false);
                this.columns = this.details.Columns;
                this.spinner.hide();
            }, (error) => {
                this.spinner.hide();
                this._toast.Danger({ message: error });
            });
        });
    }
    sortData(sort) {
        const data = this.details.Details.slice();
        if (!sort.active || sort.direction === '') {
            this.sortedData = data;
            this.makpage(this.sortedData, true);
            return;
        }
        this.sortedData = data.sort((a, b) => {
            const isAsc = sort.direction === 'asc';
            return this.compare(a[sort.active], b[sort.active], isAsc);
        });
        this.makpage(this.sortedData, true);
    }
    compare(a, b, isAsc) {
        return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
    }
    handlePage(e) {
        this.currentPage = e.pageIndex;
        this.pageSize = e.pageSize;
        this.iterator(this.array);
    }
    makpage(response, isSort) {
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"](response);
        this.dataSource.paginator = this.paginator;
        this.totalSize = this.array.length;
        this.iterator((isSort) ? response : this.array);
    }
    iterator(arr) {
        const end = (this.currentPage + 1) * this.pageSize;
        const start = this.currentPage * this.pageSize;
        const part = arr.slice(start, end);
        this.dataSource = part;
    }
    applyFilter(filterValue) {
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"](this.array);
        this.dataSource.filter = filterValue.trim().toLowerCase();
        this.dataSource.paginator = this.paginator;
        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
        this.makpage(this.dataSource.filteredData, true);
    }
};
ViewComponent.ctorParameters = () => [
    { type: _common_services_common_service__WEBPACK_IMPORTED_MODULE_2__["CommonService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_6__["NgxSpinnerService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_4__["MatPaginator"], { static: false })
], ViewComponent.prototype, "paginator", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ViewComponent.prototype, "isViewPage", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ViewComponent.prototype, "formId", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ViewComponent.prototype, "courseId", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ViewComponent.prototype, "IsBtnlstHiddn", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], ViewComponent.prototype, "viewButtonClicked", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], ViewComponent.prototype, "newButtonClicked", void 0);
ViewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-view',
        template: __webpack_require__(/*! raw-loader!./view.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/view/view.component.html"),
        styles: [__webpack_require__(/*! ./view.component.css */ "./src/app/pages/view/view.component.css")]
    })
], ViewComponent);

let ColumnsPipe = class ColumnsPipe {
    transform(value, ColumnName) {
        if (value) {
            const keyArr = Object.keys(value);
            const dataArr = [];
            keyArr.forEach((key) => {
                if (ColumnName === key) {
                    const dt = !Number.isNaN(Date.parse(value[key])) ? Object(_angular_common__WEBPACK_IMPORTED_MODULE_7__["formatDate"])(value[key], 'MM/dd/yyyy', 'en-US') : value[key];
                    dataArr.push(dt);
                }
            });
            return dataArr;
        }
    }
};
ColumnsPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({ name: 'Columns' })
], ColumnsPipe);



/***/ })

}]);
//# sourceMappingURL=layouts-admin-layout-admin-layout-module-es2015.js.map