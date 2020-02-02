import { Component, OnInit } from '@angular/core';
import { Visitor } from '../../common/models/visitor';
import { CommonService } from '../../common/services/common.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Toast } from '../../common/models/toast';
import { NgxSpinnerService } from 'ngx-spinner';
import { FormGroup, FormBuilder, Validators, FormControl, FormGroupDirective, NgForm } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { PrinterService } from 'app/common/services/printer.service';


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
  isNewVisitor = false;
  toast: Toast;
  frmVisitor: FormGroup;
  matcher = new MyErrorStateMatcher();

  constructor(private serv: CommonService, private router: Router
    , private activatedRoute: ActivatedRoute, private spinner: NgxSpinnerService,
    private formBuilder: FormBuilder, private printer:PrinterService) {
    this.visitor = new Visitor();
    this.toast = new Toast();
    this.frmVisitor = this.formBuilder.group(
      {
        Title: ['Mr.'],
        FullName: ['', Validators.compose([Validators.required, this.noWhitespaceValidator])],
        NicNo: [''],
        ContactNo: [''],
        Address: [''],
        Purpose: [''],
        DepartmentId: [1],
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

  back(): void {
    this.router.navigateByUrl('/visitorsdiary/1004');
  }

  printToken(){
    this.printer.requestUsb();
    this.printer.print();
  }
}
