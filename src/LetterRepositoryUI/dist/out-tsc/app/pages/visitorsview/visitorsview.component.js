import * as tslib_1 from "tslib";
import { Component, ViewChild } from '@angular/core';
import { MatPaginator, MatTableDataSource } from '@angular/material';
import { Toast } from 'app/common/models/toast';
let VisitorsviewComponent = class VisitorsviewComponent {
    constructor(commonService, activatedRoute, spinner, router) {
        this.commonService = commonService;
        this.activatedRoute = activatedRoute;
        this.spinner = spinner;
        this.router = router;
        this.details = {};
        this.currentPage = 0;
        this.pageSize = 50;
        this.totalSize = 0;
        this.departnemtId = 0;
        this.frmDate = new Date();
        this.toDate = new Date(new Date().setDate(new Date().getDate() + 1));
        this.filter = 'null';
        this.tost = new Toast();
    }
    newVisitor() {
        this.router.navigateByUrl('/visitorsdiary/1004/0');
        this.router.routeReuseStrategy.shouldReuseRoute = () => {
            return false;
        };
    }
    ViewButtonClicked(path, formId, Id) {
        this.router.navigateByUrl('/' + path + '/' + formId + '/' + Id);
    }
    ngOnInit() {
        this.loadDetails();
    }
    loadDetails() {
        if (this.departnemtId > 0) {
            this.spinner.show();
            this.filter = (this.filter === '') ? 'null' : this.filter;
            const url = 'Visitor/0/' + this.pageSize + '/' + this.filter + '/' + this.departnemtId + '/'
                + this.frmDate.toDateString() + '/' + this.toDate.toDateString();
            this.commonService.httpCllaUrl(url)
                .subscribe((data) => {
                this.initData(data);
                this.spinner.hide();
            }, (error) => {
                this.spinner.hide();
                this.tost.Danger({ message: error });
            });
        }
    }
    findData() {
        if (this.departnemtId > 0) {
            this.loadDetails();
        }
        else {
            this.tost.Danger({ message: 'Department not selected...!' });
        }
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
        this.filter = filterValue;
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
], VisitorsviewComponent.prototype, "paginator", void 0);
VisitorsviewComponent = tslib_1.__decorate([
    Component({
        selector: 'app-visitorsview',
        templateUrl: './visitorsview.component.html',
        styleUrls: ['./visitorsview.component.css']
    })
], VisitorsviewComponent);
export { VisitorsviewComponent };
//# sourceMappingURL=visitorsview.component.js.map