import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, Sort } from '@angular/material';
import { ActivatedRoute, Router } from '@angular/router';
import { Toast } from 'app/common/models/toast';
import { CommonService } from 'app/common/services/common.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.css']
})
export class ReportsComponent implements OnInit {

  tost: Toast;
  details: any = {};
  columns: any[];
  sortedData: any[];
  dataSource: MatTableDataSource<any>;
  currentPage = 0;
  pageSize = 500;
  array: any;
  totalSize = 0;
  departnemtId = 0;
  frmDate = new Date();
  toDate = new Date(new Date().setDate(new Date().getDate() + 1));
  filter = 'null';
  filterType = 1;
  isPrint = false;
  report: any;

  constructor(private commonService: CommonService, private activatedRoute: ActivatedRoute,
              private spinner: NgxSpinnerService, private router: Router) {
    this.tost = new Toast();
  }

  ngOnInit() {
    this.loadDetails();
    this.report = {
      title: 'All Visits',
      from: this.frmDate.toDateString(),
      toDate: this.toDate.toDateString(),
      fileName: this.report.title + '(' + this.report.from + '-' + this.report.toDate + ')'
    };
  }

  loadDetails(): void {
    this.isPrint = false;
    this.spinner.show();
    this.filter = (this.filter === '') ? 'null' : this.filter;
    const url = `Visit/${this.pageSize * this.currentPage}/${this.pageSize}/${this.filter}/${this.departnemtId}
    /${this.frmDate.toDateString()}/${this.toDate.toDateString()}/${this.filterType}`;
    this.commonService.httpCllaUrl(url)
      .subscribe((data) => {
        this.initData(data);
        this.isPrint = (data.Details.length > 0);
        this.spinner.hide();
      },
        (error) => {
          this.spinner.hide();
          this.tost.Danger({ message: error });
        }
      );
  }


  findData() {

    this.report = {
      title: this.filterType == 1 ? 'All Visits' : this.filterType == 2 ? 'Completed works' : 'Pending Works',
      from: this.frmDate.toDateString(),
      toDate: this.toDate.toDateString(),
      fileName: ''
    };

    this.report.fileName = this.report.title + '(' + this.report.from + '-' + this.report.toDate + ')';

    this.loadDetails();
  }

  initData(data: any) {
    this.details = data;
    this.details.Columns.sort((a, b) => {
      if (a.DisplayOrder < b.DisplayOrder) { return -1; }
      if (a.DisplayOrder > b.DisplayOrder) { return 1; }
      return 0;
    });
    this.sortedData = this.details.Details.slice();
    this.array = this.sortedData;
    this.makpage(this.sortedData, false);
    this.columns = this.details.Columns;
  }

  sortData(sort: Sort) {
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
  public handlePage(e: any) {
    this.currentPage = e.pageIndex;
    this.pageSize = e.pageSize;
    this.iterator(this.array);
  }

  private makpage(response: any, isSort: boolean) {
    this.dataSource = new MatTableDataSource<Element>(response);
    this.iterator((isSort) ? response : this.array);
  }

  private iterator(arr: any) {
    const end = (this.currentPage + 1) * this.pageSize;
    const start = this.currentPage * this.pageSize;
    const part = arr.slice(start, end);
    this.dataSource = part;
  }

  applyFilter(filterValue: string) {
    this.filter = filterValue;
    this.dataSource = new MatTableDataSource<Element>(this.array);
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
    this.makpage(this.dataSource.filteredData, true);
  }

}
