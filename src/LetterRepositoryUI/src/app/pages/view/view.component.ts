import { Component, OnInit, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import { CommonService } from '../../common/services/common.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Sort, MatTableDataSource, MatPaginator } from '@angular/material';
import { Toast } from '../../common/models/toast';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
  _toast: Toast;
  details: any = {};
  columns: any[];
  sortedData: any[];
  dataSource: MatTableDataSource<any>;
  currentPage = 0;
  pageSize = 50;
  array: any;
  totalSize = 0;

  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;

  @Input()
  isViewPage = true;

  @Input()
  formId: number;

  @Input()
  courseId: number;

  @Input()
  IsBtnlstHiddn = false;

  @Output()
  viewButtonClicked: EventEmitter<number> = new EventEmitter<number>();

  @Output()
  newButtonClicked: EventEmitter<number> = new EventEmitter<number>();

  constructor(private commonService: CommonService, private activatedRoute: ActivatedRoute,
    private spinner: NgxSpinnerService, private router: Router) {
    this._toast = new Toast();
  }

  ViewButtonClicked(path: string, formId: number, Id: number) {
    this.router.navigateByUrl('/' + path + '/' + formId + '/' + Id);
  }

  onViewButtonClicked(Id: number) {
    this.viewButtonClicked.emit(Id);
  }

  NewButtonClicked(path: string, formId: number) {
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

  loadDetails(): void {
    this.activatedRoute
      .params
      .subscribe(params => {
        this.spinner.show();
        let frmId: number = params.formId;
        frmId = (this.isViewPage) ? frmId : this.formId;
        this.commonService.httpGetList({ formId: frmId, start: 0, limit: this.pageSize, filter: 'null' })
          .subscribe((data) => {
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
            this.spinner.hide();
          },
            (error) => {
              this.spinner.hide();
              this._toast.Danger({ message: error });
            }
          );
      });
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
    this.dataSource = new MatTableDataSource<Element>(this.array);
    this.dataSource.filter = filterValue.trim().toLowerCase();
    this.dataSource.paginator = this.paginator;
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
    this.makpage(this.dataSource.filteredData, true);
  }
}
