import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Chart } from 'angular-highcharts';
let DashboardComponent = class DashboardComponent {
    constructor(commonService, activatedRoute, spinner, router) {
        this.commonService = commonService;
        this.activatedRoute = activatedRoute;
        this.spinner = spinner;
        this.router = router;
        this.menuItems = ['viewFullscreen', 'printChart', 'separator', 'downloadPNG', 'downloadJPEG', 'downloadPDF', 'downloadSVG'];
        this.DepVisCnt = {
            DepartmentId: 0,
            FromDate: new Date(new Date().setDate(new Date().getDate() - 30)),
            EndDate: new Date(),
            FilterType: 3,
            chart: null
        };
        this.DepPendWorks = {
            chart: new Chart()
        };
        this.pendingWorks = {
            DepartmentId: 0,
            dataSource: [],
            filteredData: []
        };
        this.CurrentUser = JSON.parse(localStorage.getItem('currentUser'));
    }
    ngOnInit() {
        this.getDepartmentWiseVisitorsCount();
        this.getPendinWorksByDepartment();
        this.getDepartmentWisePendingWorksCount();
    }
    getPendinWorksByDepartment() {
        this.spinner.show();
        const url = 'Visitor/pendingWorks/' + this.pendingWorks.DepartmentId;
        this.commonService.httpCllaUrl(url)
            .subscribe((data) => {
            this.initPendingWorksData(data);
            this.spinner.hide();
        }, (error) => {
            this.spinner.hide();
        });
    }
    initPendingWorksData(data) {
        this.pendingWorks.filteredData = data;
        this.pendingWorks.dataSource = data;
    }
    removeFinishedWork(id) {
        const newData = this.pendingWorks.dataSource.filter(e => e.Id != id);
        this.initPendingWorksData(newData);
    }
    applyFilter(filterValue) {
        this.pendingWorks.filteredData = [];
        this.pendingWorks.dataSource.forEach(e => {
            if (e.VisitorToken.toString().toLowerCase().indexOf(filterValue) > -1) {
                this.pendingWorks.filteredData.push(e);
            }
        });
    }
    getDepartmentWiseVisitorsCount() {
        this.spinner.show();
        const url = 'Visitor/chart/' + this.DepVisCnt.DepartmentId + '/' + this.DepVisCnt.FilterType +
            '/' + this.DepVisCnt.FromDate.toDateString() + '/' + this.DepVisCnt.EndDate.toDateString();
        this.commonService.httpCllaUrl(url)
            .subscribe((data) => {
            this.initVisitorsCountChart(data);
            this.spinner.hide();
        }, (error) => {
            this.spinner.hide();
        });
    }
    initVisitorsCountChart(visitorsData) {
        const categories = [];
        const series = [];
        visitorsData.Details.forEach(e => {
            if (this.DepVisCnt.DepartmentId == 0) {
                if (this.DepVisCnt.FilterType == 3) {
                    categories.push(e.VisitDate[0].Value + '/' + e.VisitDate[1].Value + '/' + e.VisitDate[2].Value);
                }
                else if (this.DepVisCnt.FilterType == 2) {
                    categories.push(e.VisitDate[0].Value + '/' + e.VisitDate[1].Value);
                }
                else {
                    categories.push(e.VisitDate[0].Value);
                }
            }
            else {
                const vsDate = new Date(e.VisitDate);
                if (this.DepVisCnt.FilterType == 3) {
                    categories.push(vsDate.toDateString());
                }
                else if (this.DepVisCnt.FilterType == 2) {
                    categories.push(vsDate.getMonth() + '/' + vsDate.getFullYear());
                }
                else {
                    categories.push(vsDate.getFullYear());
                }
            }
            series.push(e.Count);
        });
        this.DepVisCnt.chart = new Chart({
            chart: {
                type: 'spline'
            },
            title: {
                text: 'Department wise visitors count'
            },
            subtitle: {
                text: 'Date vs Visitors Count'
            },
            xAxis: {
                categories
            },
            yAxis: {
                title: {
                    text: 'Visitors Count'
                }
            },
            exporting: {
                menuItemDefinitions: {},
                buttons: {
                    contextButton: {
                        menuItems: this.menuItems
                    }
                }
            },
            plotOptions: {
                series: {
                    dataLabels: {
                        enabled: true
                    }
                }
            },
            credits: {
                enabled: false
            },
            series: [{
                    showInLegend: false,
                    name: visitorsData.Department,
                    data: series,
                    type: 'spline'
                }]
        });
    }
    getDepartmentWisePendingWorksCount() {
        this.spinner.show();
        const url = 'Visitor/pendingWorksChart';
        this.commonService.httpCllaUrl(url)
            .subscribe((data) => {
            this.initDepPendWorksChart(data);
            this.spinner.hide();
        }, (error) => {
            this.spinner.hide();
        });
    }
    initDepPendWorksChart(visitorsData) {
        const categories = [];
        const series = [];
        visitorsData.forEach(e => {
            categories.push(e.Department);
            series.push(e.Count);
        });
        this.DepPendWorks.chart = new Chart({
            chart: {
                type: 'spline'
            },
            title: {
                text: 'Department wise pending works'
            },
            subtitle: {
                text: 'Department vs works Count'
            },
            xAxis: {
                categories
            },
            yAxis: {
                title: {
                    text: 'Works Count'
                }
            },
            exporting: {
                menuItemDefinitions: {},
                buttons: {
                    contextButton: {
                        menuItems: this.menuItems
                    }
                }
            },
            plotOptions: {
                series: {
                    dataLabels: {
                        enabled: true
                    }
                }
            },
            credits: {
                enabled: false
            },
            series: [{
                    showInLegend: false,
                    name: 'Departments',
                    data: series,
                    type: 'spline'
                }]
        });
    }
    updateWorkStatus(id) {
        const url = 'Visitor/worksStatus/' + id;
        this.commonService.httpPostByUrl(url)
            .subscribe((data) => {
            this.removeFinishedWork(id);
        });
    }
    getPendingWorks(departmentId) {
        this.pendingWorks.DepartmentId = departmentId;
        this.getPendinWorksByDepartment();
    }
};
DashboardComponent = tslib_1.__decorate([
    Component({
        selector: 'app-dashboard',
        templateUrl: './dashboard.component.html',
        styleUrls: ['./dashboard.component.css']
    })
], DashboardComponent);
export { DashboardComponent };
//# sourceMappingURL=dashboard.component.js.map