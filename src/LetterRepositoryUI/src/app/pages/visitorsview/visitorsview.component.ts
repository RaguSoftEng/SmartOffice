import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MatPaginator, MatTableDataSource, Sort } from '@angular/material';
import { CommonService } from 'app/common/services/common.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { Toast } from 'app/common/models/toast';

@Component({
  selector: 'app-visitorsview',
  templateUrl: './visitorsview.component.html',
  styleUrls: ['./visitorsview.component.css']
})
export class VisitorsviewComponent implements OnInit {

  tost: Toast;
  details: any = {};
  columns: any[];
  sortedData: any[];
  dataSource: MatTableDataSource<any>;
  currentPage = 0;
  pageSize = 50;
  array: any;
  totalSize = 0;
  departnemtId = 0;
  frmDate = new Date();
  toDate = new Date(new Date().setDate(new Date().getDate() + 1));
  filter = 'null';


  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;

  constructor(private commonService: CommonService, private activatedRoute: ActivatedRoute,
    private spinner: NgxSpinnerService, private router: Router) {
    this.tost = new Toast();
  }

  newVisitor(): void {
    this.router.navigateByUrl('/visitorsdiary/1004/0');
    this.router.routeReuseStrategy.shouldReuseRoute = () => {
      return false;
    };
  }

  ViewButtonClicked(path: string, formId: number, Id: number) {
    this.router.navigateByUrl('/' + path + '/' + formId + '/' + Id);
  }
  ngOnInit() {
    this.loadDetails();
  }

  loadDetails(): void {
    if (this.departnemtId > 0) {
      this.spinner.show();
      this.filter = (this.filter === '') ? 'null' : this.filter;
      const url = 'Visitor/0/' + this.pageSize + '/' + this.filter + '/' + this.departnemtId + '/'
        + this.frmDate.toDateString() + '/' + this.toDate.toDateString();
      this.commonService.httpCllaUrl(url)
        .subscribe((data) => {
          this.initData(data);
          this.spinner.hide();
        },
          (error) => {
            this.spinner.hide();
            this.tost.Danger({ message: error });
          }
        );
    }
  }

  findData() {
    if (this.departnemtId > 0) {
      this.loadDetails();
    } else {
      this.tost.Danger({ message: 'Department not selected...!' });
    }
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
    this.dataSource.paginator = this.paginator;
    this.totalSize = this.array.length;
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
    this.dataSource.paginator = this.paginator;
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
    this.makpage(this.dataSource.filteredData, true);
  }

}
