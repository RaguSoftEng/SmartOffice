import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
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
CommonviewpageComponent = tslib_1.__decorate([
    Component({
        selector: 'app-commonviewpage',
        templateUrl: './commonviewpage.component.html',
        styleUrls: ['./commonviewpage.component.css']
    })
], CommonviewpageComponent);
export { CommonviewpageComponent };
//# sourceMappingURL=commonviewpage.component.js.map