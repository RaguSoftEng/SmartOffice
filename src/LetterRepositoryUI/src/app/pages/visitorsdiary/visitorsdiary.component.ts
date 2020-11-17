import { Component, OnInit } from '@angular/core';
import { Visitor } from '../../common/models/visitor';
import { CommonService } from '../../common/services/common.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Toast } from '../../common/models/toast';
import { NgxSpinnerService } from 'ngx-spinner';
import { FormGroup, FormBuilder, Validators, FormControl, FormGroupDirective, NgForm } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { PrinterService } from 'app/common/services/printer.service';
import { Visit } from 'app/common/models/visit';


export class MyErrorStateMatcher implements ErrorStateMatcher {
  updateClicked = false;
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const invalidCtrl = !!(control && control.invalid && control.parent.dirty);
    const invalidParent = !!(control && control.dirty && control.parent && control.parent.invalid && control.parent.dirty);
    return this.updateClicked && (invalidCtrl || invalidParent);
  }
}

@Component({
  selector: 'app-visitorsdiary',
  templateUrl: './visitorsdiary.component.html',
  styleUrls: ['./visitorsdiary.component.css']
})
export class VisitorsdiaryComponent implements OnInit {

  visitor: Visitor;
  visit: Visit;
  isNewVisitor = false;
  isNewVisit = true;
  toast: Toast;
  frmVisitor: FormGroup;
  frmVisit: FormGroup;
  matcher = new MyErrorStateMatcher();
  filter = {
    departmentId: 0,
    frmDate: new Date(new Date().setMonth(new Date().getMonth() - 12)),
    toDate: new Date(new Date().setDate(new Date().getDate() + 1)),
    text: '',
    isWorkDone: false
  };
  visits = {
    Details: Array<Visit>(),
    Columns: []
  };
  purposeList = [];

  constructor(private serv: CommonService, private router: Router
    ,         private activatedRoute: ActivatedRoute, private spinner: NgxSpinnerService,
              private formBuilder: FormBuilder, private printer: PrinterService) {
    this.visitor = new Visitor();
    this.visit = new Visit();
    this.toast = new Toast();
    this.frmVisitor = this.formBuilder.group(
      {
        Title: ['Mr.'],
        FullName: ['', Validators.compose([Validators.required, this.noWhitespaceValidator])],
        NicNo: [''],
        ContactNo: [''],
        Address: [''],
      }
    );

    this.frmVisit = this.formBuilder.group(
      {
        Description: [{ value: '', disabled: !this.isNewVisit }],
        DepartmentId: [{ value: 0 }],
        Purpose: [{ value: 0 }],
        VisitDate: [{ value: new Date(), disabled: true }],
        IsWorkDone: [false],
        Progress: [{ value: 'Pending', disabled: true }],
        VisitorToken: [{ value: 'AUTO GENERATED', disabled: true }]
      }
    );

    this.activatedRoute
      .params
      .subscribe(params => {
        this.visitor.Id = Number.isNaN(params.id) ? 0 : Number(params.id);
        if (this.visitor.Id !== 0) {
          this.isNewVisitor = false;
          this.loadVisitor(this.visitor.Id);
        } else {
          this.isNewVisitor = true;
        }
      });
  }

  ngOnInit() {
  }

  noWhitespaceValidator(control: FormControl) {
    const isWhitespace = (control.value || '').trim().length === 0;
    const isValid = !isWhitespace;
    return isValid ? null : { whitespace: true };
  }

  loadVisitor(id: number): void {
    if (id != undefined && id != 0) {
      this.spinner.show();
      this.serv.httpGetData(1004, id)
        .subscribe((data) => {
          this.visitor = data;
          this.spinner.hide();
        },
          (error) => {
            this.spinner.hide();
            this.toast.Danger({ message: error });
          });
    }
  }

  findByNic() {
    if (this.visitor.NicNo != undefined && this.visitor.NicNo != '') {
      this.spinner.show();
      const url = `Visitor/findbynic/${this.visitor.NicNo}`;
      this.serv.httpCllaUrl(url)
        .subscribe((data) => {
          if (data != undefined && data != null) {
            this.router.navigateByUrl('/visitorsdiary/1004/' + data.Id);
            this.isNewVisitor = false;
          } else {
            this.isNewVisitor = true;
          }
          this.spinner.hide();
        },
          (error) => {
            this.spinner.hide();
            this.toast.Danger({ message: error });
          });
    }
  }

  updateVisitor(): void {
    this.matcher.updateClicked = true;
    if (!this.frmVisitor.invalid) {
      this.spinner.show();
      this.serv.httpPost(this.visitor, 1004, this.visitor.Id)
        .subscribe((data) => {
          this.spinner.hide();
          this.toast.Success({ message: 'Successfully updated' });
          setTimeout(() => {
            // tslint:disable-next-line: no-string-literal
            this.router.navigateByUrl('/visitorsdiary/1004/' + data['id']);
            this.router.routeReuseStrategy.shouldReuseRoute = () => {
              return false;
            };
          }, 0);
        },
          (error) => {
            this.spinner.hide();
            this.toast.Danger({ message: error });
          });
    }
  }

  newVisitor(): void {
    this.router.navigateByUrl('/visitorsdiary/1004/0');
    this.router.routeReuseStrategy.shouldReuseRoute = () => {
      return false;
    };
  }

  loadAllVisits() {
    this.spinner.show();
    this.filter.text = (this.filter.text === '') ? 'null' : this.filter.text;
    const url = `Visit/${this.filter.text}/${this.filter.isWorkDone}/${this.visitor.Id}/${this.filter.departmentId}/${this.filter.frmDate.toDateString()}/${this.filter.toDate.toDateString()}`;
    this.serv.httpCllaUrl(url)
      .subscribe((data) => {
        this.initData(data);
        this.spinner.hide();
      },
        (error) => {
          this.spinner.hide();
        }
      );
  }

  initData(data: any) {
    data.Columns.sort((a, b) => {
      if (a.DisplayOrder < b.DisplayOrder) { return -1; }
      if (a.DisplayOrder > b.DisplayOrder) { return 1; }
      return 0;
    });
    this.visits.Columns = data.Columns;
    this.visits.Details = data.Details;
  }

  newVisit(): void {
    this.visit = new Visit();
    this.isNewVisit = true;
    this.frmVisit.get('Purpose').enable();
  }

  back(): void {
    this.router.navigateByUrl('/visitorsdiary/1004');
  }

  loadForm($event) {
    let frmIndex = $event.index;
    if (frmIndex == 1) {
      this.isNewVisit = true;
      this.loadAllVisits();
      this.frmVisit.get('Purpose').enable();
      this.loadListvalues(this.visit.DepartmentId);
    }
  }

  findData() {
    this.loadAllVisits();
  }

  ViewButtonClicked(id) {
    this.visit = this.visits.Details.find(x => x.ObId == id);
    this.frmVisit.patchValue({
      Description: this.visit.Description,
      DepartmentId: this.visit.DepartmentId.toString(),
      Purpose: this.visit.Purpose,
      VisitDate: this.visit.VisitDate,
      IsWorkDone: this.visit.IsWorkDone,
      Progress: this.visit.Progress,
      VisitorToken: this.visit.VisitorToken
    });
    this.isNewVisit = false;
    this.frmVisit.get('Purpose').disable();
  }

  updateVisit() {
    this.spinner.show();
    this.visit.VisitorId = this.visitor.Id;
    this.visit.ObId = this.visit.ObId == '' ? null : this.visit.ObId;
    this.serv.httpPost(this.visit, 1005, this.visit.ObId)
      .subscribe((data) => {
        this.spinner.hide();
        this.toast.Success({ message: 'Successfully updated' });
        this.getVisit(data['id']);
      },
        (error) => {
          this.spinner.hide();
          this.toast.Danger({ message: error });
        });
  }

  getVisit(id) {
    if (id != '' && id != null) {
      this.spinner.show();
      this.serv.httpGetData(1005, id)
        .subscribe((data) => {
          this.loadAllVisits();
          this.spinner.hide();
          if (this.isNewVisit) {
            this.printToken(data.VisitorToken);
          }
        },
          (error) => {
            this.spinner.hide();
            this.toast.Danger({ message: error });
          });
    }
  }

  loadListvalues(departmentId) {
    if(departmentId > 0){
    this.purposeList = [];
    const url = `Department/purposeList/${departmentId}`;
    this.serv.httpCllaUrl(url)
      .subscribe((data) => {
        if (data.length > 0) {
          this.purposeList = data;
        }
      },
        (error) => {
          this.toast.Danger({ message: error });
        }
      );
    }
  }

  printToken(token) {
    let printContents, popupWin;
    printContents = token;
    popupWin = window.open('', '_blank', 'top=50%,left=50%,height=200,width=200');
    popupWin.document.open();
    popupWin.document.write(`
      <html>
        <head>
          <title>Print tab</title>
          <style>
          </style>
        </head>
        <body onload="window.print();window.close()">
          <div style="width: 80px;height: 20px;align-items: center;text-align: center;">
            ${printContents}
          </div>
        </body>
      </html>`
    );
    popupWin.document.close();
  }
}
