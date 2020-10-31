import { Component, OnInit, ViewChild, AfterViewInit, OnDestroy, Input, Output, EventEmitter, forwardRef } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ReplaySubject, Subject } from 'rxjs';
import { MatSelect } from '@angular/material';
import { takeUntil, take } from 'rxjs/operators';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { CommonService } from 'app/common/services/common.service';
import { Toast } from 'app/common/models/toast';

const customValueProvider = {
  provide: NG_VALUE_ACCESSOR,
  // tslint:disable-next-line: no-use-before-declare
  useExisting: forwardRef(() => MatselectComponent),
  multi: true
};

@Component({
  selector: 'app-matselect',
  templateUrl: './matselect.component.html',
  styleUrls: ['./matselect.component.css'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => MatselectComponent),
    multi: true
  }]
})
export class MatselectComponent implements OnInit, AfterViewInit, OnDestroy, ControlValueAccessor {
  // protected options: any[] = [{ Id: 1, Value: 'option1' }, { Id: 2, Value: 'option2' }, { Id: 3, Value: 'option3' }];
  public frmctrlMatselect: FormControl = new FormControl();
  public frmCtrlFilterCtrl: FormControl = new FormControl();
  public filteredoptions: ReplaySubject<any[]> = new ReplaySubject<any[]>(1);

  toast: Toast;

  @Input()
  options: any[];

  @Input()
  listId: any = 0;

  @Input()
  isaParameter = false;

  @Input()
  placeholder: string;

  @Input()
  InitValue: any;

  @Input()
  DefaultOption = false;

  @Input()
  defaultOn = false;

  @Input()
  hideDefaultAfterSelect = true;

  @Input()
  default = '-------- None --------';

  @Input()
  isReadOnly = false;

  @Output()
  SelectedValueChanged: EventEmitter<any> = new EventEmitter<any>();

  @ViewChild('selectId', { static: false }) selectId: MatSelect;

  protected onDestroy = new Subject<void>();


  constructor(private serv: CommonService) {
    this.toast = new Toast();
  }

  ngOnInit() {
    if (this.listId > 0) {
      this.getListValues(this.listId, this.isaParameter);
    } else {
      this.frmctrlMatselect.setValue((this.InitValue) ? this.InitValue.toString() : this.options[0]);
      this.filteredoptions.next(this.options.slice());
    }

    this.frmCtrlFilterCtrl.valueChanges
      .pipe(takeUntil(this.onDestroy))
      .subscribe(() => {
        this.filterOptions();
      });
  }

  ngAfterViewInit() {
    // this.setInitialValue();
  }

  getListValues(listId: number, isaParameter: boolean) {
    this.serv.httpGetListValue(listId, isaParameter)
      .subscribe((data) => {
        this.options = data;
        if (this.defaultOn) {
          this.options.push({ Id: 0, Value: this.default });
        }
        this.frmctrlMatselect.setValue((this.InitValue) ? this.InitValue.toString() : (this.defaultOn) ? 0 : this.options[0]);
        this.filteredoptions.next(this.options.slice());
      },
        (error) => {
          this.toast.Danger({ message: error });
        }
      );
  }

  ngOnDestroy() {
    this.onDestroy.next();
    this.onDestroy.complete();
  }

  protected setInitialValue() {
    this.filteredoptions
      .pipe(take(1), takeUntil(this.onDestroy))
      .subscribe(() => {
        this.selectId.compareWith = (a: any, b: any) => a && b && a.Id === b.Id;
      });
  }

  protected filterOptions() {
    if (!this.options) {
      return;
    }
    let search = this.frmCtrlFilterCtrl.value;
    if (!search) {
      this.filteredoptions.next(this.options.slice());
      return;
    } else {
      search = search.toLowerCase();
    }
    this.filteredoptions.next(
      this.options.filter(option => option.Value.toLowerCase().indexOf(search) > -1 && option.Id != 0)
    );
  }

  OnValueChanged() {
    if (this.hideDefaultAfterSelect) {
      let opt = this.options.filter(o => o.Id == 0);
      if (opt != null && opt.length > 0) {
        this.options = this.options.filter(o => o.Id != 0);
        this.filteredoptions.next(this.options.slice());
      }
    }
    this.SelectedValueChanged.emit(this.frmctrlMatselect.value);
  }


  get value(): any { return this.frmctrlMatselect.value; }

  set value(v: any) {
    if (v !== this.frmctrlMatselect.value) {
      this.frmctrlMatselect.setValue(v);
    }
  }

  writeValue(obj: any): void {
    if (obj) {
      this.frmctrlMatselect.setValue(obj);
    }
  }

  registerOnChange(fn: any): void {
  }
  registerOnTouched(fn: any): void {
  }
  setDisabledState?(isDisabled: boolean): void {

  }

}
