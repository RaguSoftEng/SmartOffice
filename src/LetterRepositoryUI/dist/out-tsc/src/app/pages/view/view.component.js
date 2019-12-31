import * as tslib_1 from "tslib";
import { Component, Pipe, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator } from '@angular/material';
import { Toast } from '../../common/models/toast';
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
        this.viewButtonClicked = new EventEmitter();
        this.newButtonClicked = new EventEmitter();
        this._toast = new Toast();
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
            let frmId = params['formId'];
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
                this._toast.Danger(error);
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
        this.dataSource = new MatTableDataSource(response);
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
        this.dataSource = new MatTableDataSource(this.array);
        this.dataSource.filter = filterValue.trim().toLowerCase();
        this.dataSource.paginator = this.paginator;
        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
        this.makpage(this.dataSource.filteredData, true);
    }
};
tslib_1.__decorate([
    ViewChild(MatPaginator, { static: false })
], ViewComponent.prototype, "paginator", void 0);
tslib_1.__decorate([
    Input()
], ViewComponent.prototype, "isViewPage", void 0);
tslib_1.__decorate([
    Input()
], ViewComponent.prototype, "formId", void 0);
tslib_1.__decorate([
    Input()
], ViewComponent.prototype, "courseId", void 0);
tslib_1.__decorate([
    Output()
], ViewComponent.prototype, "viewButtonClicked", void 0);
tslib_1.__decorate([
    Output()
], ViewComponent.prototype, "newButtonClicked", void 0);
ViewComponent = tslib_1.__decorate([
    Component({
        selector: 'app-view',
        templateUrl: './view.component.html',
        styleUrls: ['./view.component.css']
    })
], ViewComponent);
export { ViewComponent };
let ColumnsPipe = class ColumnsPipe {
    transform(value, ColumnName) {
        if (value) {
            const keyArr = Object.keys(value);
            const dataArr = [];
            keyArr.forEach((key) => {
                if (ColumnName === key) {
                    dataArr.push(value[key]);
                }
            });
            return dataArr;
        }
    }
};
ColumnsPipe = tslib_1.__decorate([
    Pipe({ name: 'Columns' })
], ColumnsPipe);
export { ColumnsPipe };
//# sourceMappingURL=view.component.js.map