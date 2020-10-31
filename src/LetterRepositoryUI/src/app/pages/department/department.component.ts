import { Component, OnInit } from '@angular/core';
import { ErrorStateMatcher } from '@angular/material';
import { FormControl, FormGroupDirective, NgForm, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Toast } from 'app/common/models/toast';
import { CommonService } from 'app/common/services/common.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Department } from 'app/common/models/department';


export class MyErrorStateMatcher implements ErrorStateMatcher {
  updateClicked = false;
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const invalidCtrl = !!(control && control.invalid);
    const invalidParent = !!(control && control.parent && control.parent.invalid && control.parent.dirty);
    return this.updateClicked && (invalidCtrl || invalidParent);
  }
}

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css']
})
export class DepartmentComponent implements OnInit {

  department: Department;
  isNewDepartment = false;
  toast: Toast;
  frmDepartment: FormGroup;
  matcher = new MyErrorStateMatcher();
  listvalueArray: any[] = [];

  constructor(private serv: CommonService, private router: Router
    , private activatedRoute: ActivatedRoute, private formBuilder: FormBuilder) {
    this.department = new Department();
    this.toast = new Toast();
    this.frmDepartment = this.formBuilder.group({
      Id: [0, Validators.compose([])],
      ParentId: [0, Validators.compose([])],
      Departmentcode: ['', Validators.compose([Validators.required, this.noWhitespaceValidator])],
      DepartmentName: ['', Validators.compose([Validators.required, this.noWhitespaceValidator])],
      ExtendedDescription: ['', Validators.compose([])],
      DepStatus: [1, Validators.compose([])],
    });
    this.activatedRoute
      .params
      .subscribe(params => {
        this.department.Id = Number.isNaN(params['id']) ? 0 : Number(params['id']);
        if (this.department.Id !== 0) {
          this.isNewDepartment = false;
        } else {
          this.isNewDepartment = true;
        }
      });
  }

  ngOnInit() {
    if (this.department.Id !== 0) {
      this.loadDepartment(this.department.Id);
    }
  }

  noWhitespaceValidator(control: FormControl) {
    const isWhitespace = (control.value || '').trim().length === 0;
    const isValid = !isWhitespace;
    return isValid ? null : { whitespace: true };
  }

  loadDepartment(id: number): void {
    if (id !== undefined && id !== 0) {
      this.serv.httpGetData(1001, id)
        .subscribe((data) => {
          this.department = data;
          this.loadListvalues();
        },
          (error) => {
            this.toast.Danger({ message: error });
          });
    }
  }

  updateDepartment(): void {
    this.matcher.updateClicked = true;
    if (!this.frmDepartment.invalid) {

      this.serv.httpPost(this.department, 1001, this.department.Id)
        .subscribe((data) => {
          this.department.Id = Number(data['id']);
          this.toast.Success({ message: 'Successfully updated' });
          setTimeout(() => {
            this.router.navigateByUrl('/department/1000/' + this.department.Id);
            this.router.routeReuseStrategy.shouldReuseRoute = () => {
              return false;
            };
          }, 200);
        },
          (error) => {
            this.toast.Danger({ message: error });
          });
    }
  }

  newDepartment(): void {
    this.router.navigateByUrl('/department/1001/0');
    this.router.routeReuseStrategy.shouldReuseRoute = () => {
      return false;
    };
  }

  back(): void {
    this.router.navigateByUrl('/department/1001');
  }

  loadListvalues() {
    this.listvalueArray = [];
    const url = `Department/purpose/${this.department.Id}`;
    this.serv.httpCllaUrl(url)
      .subscribe((data) => {
        if (data.length > 0) {
          data.forEach(e => {
            this.listvalueArray.push({
              Id: e.Id,
              Value: e.Purpose,
              IsEdit: false
            });
          });
        } else {
          this.listvalueArray.push({
            Id: 0,
            Value: '',
            IsEdit: true
          });
        }
      },
        (error) => {
          this.toast.Danger({ message: error });
        }
      );
  }

  updateListValue(obj: any) {
    if (obj.Value != '') {
      this.serv.httpPost({
        DepartmentId: this.department.Id,
        Id: obj.Id,
        Purpose: obj.Value
      }, 1006, obj.Id)
        .subscribe((data) => {
          this.toast.Success({ message: 'Successfully updated' });
          this.loadListvalues();
        },
          (error) => {
            this.toast.Danger({ message: error });
          });
    }
  }

  addNewRow(obj: any) {
    if (obj.Value != '') {
      this.listvalueArray.push({
        Id: 0,
        Value: '',
        IsEdit: true
      });
    }
  }

}
