import { Component, OnInit } from '@angular/core';
import { Chart, StockChart } from 'angular-highcharts';
import { User } from 'app/common/models/user';
import { CommonService } from 'app/common/services/common.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { dateFormat } from 'highcharts';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  CurrentUser: any;
  menuItems: any = ['viewFullscreen', 'printChart', 'separator', 'downloadPNG', 'downloadJPEG', 'downloadPDF', 'downloadSVG'];

  DepVisCnt: any = {
    DepartmentId: 0,
    FromDate: new Date(new Date().setDate(new Date().getDate() - 30)),
    EndDate: new Date(),
    FilterType: 3,
    chart: null
  };

  DepPendWorks: any = {
    chart: new Chart()
  };

  pendingWorks: any = {
    DepartmentId: 0,
    dataSource: [],
    filteredData: []
  };


  constructor(private commonService: CommonService, private activatedRoute: ActivatedRoute,
    private spinner: NgxSpinnerService, private router: Router) {
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
      },
        (error) => {
          this.spinner.hide();
        }
      );
  }

  initPendingWorksData(data: any) {
    this.pendingWorks.filteredData = data;
    this.pendingWorks.dataSource = data;
  }

  removeFinishedWork(id: any) {
    const newData = this.pendingWorks.dataSource.filter(e => e.Id != id);
    this.initPendingWorksData(newData);
  }

  applyFilter(filterValue: string) {
    this.pendingWorks.filteredData = [];
    this.pendingWorks.dataSource.forEach(e => {
      if (e.VisitorToken.toString().toLowerCase().indexOf(filterValue) > -1) {
        this.pendingWorks.filteredData.push(e);
      }
    });
  }

  getDepartmentWiseVisitorsCount() {
    this.spinner.show();
    let enddate= new Date(this.DepVisCnt.EndDate);
    enddate = new Date(enddate.setDate(enddate.getDate()+1));
    const url = 'Visitor/chart/' + this.DepVisCnt.DepartmentId + '/' + this.DepVisCnt.FilterType +
      '/' + this.DepVisCnt.FromDate.toDateString() + '/' + enddate.toDateString();
    this.commonService.httpCllaUrl(url)
      .subscribe((data) => {
        this.initVisitorsCountChart(data);
        this.spinner.hide();
      },
        (error) => {
          this.spinner.hide();
        }
      );
  }

  initVisitorsCountChart(visitorsData: any) {
    const categories = [];
    const series = [];
    visitorsData.Details.forEach(e => {
      if (this.DepVisCnt.DepartmentId == 0) {
        if (this.DepVisCnt.FilterType == 3) {
          categories.push(e.VisitDate[0].Value + '/' + e.VisitDate[1].Value + '/' + e.VisitDate[2].Value);
        } else if (this.DepVisCnt.FilterType == 2) {
          categories.push(e.VisitDate[0].Value + '/' + e.VisitDate[1].Value);
        } else {
          categories.push(e.VisitDate[0].Value);
        }
      } else {
        const vsDate = new Date(e.VisitDate);
        if (this.DepVisCnt.FilterType == 3) {
          categories.push(vsDate.toDateString());
        } else if (this.DepVisCnt.FilterType == 2) {
          categories.push(vsDate.getMonth() + '/' + vsDate.getFullYear());
        } else {
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
        menuItemDefinitions: {
        },
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
      },
        (error) => {
          this.spinner.hide();
        }
      );
  }

  initDepPendWorksChart(visitorsData: any) {
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
        menuItemDefinitions: {
        },
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

  updateWorkStatus(id: Number) {
    const url = 'Visitor/worksStatus/' + id;
    this.commonService.httpPostByUrl(url)
      .subscribe((data) => {
        this.removeFinishedWork(id);
      });
  }

  getPendingWorks(departmentId: any) {
    this.pendingWorks.DepartmentId = departmentId;
    this.getPendinWorksByDepartment();
  }

}
