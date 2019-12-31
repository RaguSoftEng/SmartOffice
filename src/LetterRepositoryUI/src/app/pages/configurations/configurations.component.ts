import { Component, OnInit } from '@angular/core';
import { Toast } from 'app/common/models/toast';
import { CommonService } from 'app/common/services/common.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-configurations',
  templateUrl: './configurations.component.html',
  styleUrls: ['./configurations.component.css']
})
export class ConfigurationsComponent implements OnInit {
  toast: Toast;
  listArray: any = [];
  listvalueArray: any[] = [];
  currentList: any = {
    ListId: 0,
    Description: ''
  };
  constructor(private serv: CommonService, private spinner: NgxSpinnerService) {
    this.toast = new Toast();
  }

  ngOnInit() {
    this.loadAllList();
  }

  loadAllList(): void {
    this.spinner.show();
    this.serv.httpCllaUrl('common/ParameterLists')
      .subscribe((data) => {
        this.listArray = data;
        this.loadListvalues(data[0].ListId);
        this.spinner.hide();
      },
        (error) => {
          this.spinner.hide();
          this.toast.Danger(error);
        });
  }

  loadListvalues(listId: number) {
    // tslint:disable-next-line: triple-equals
    const rs = this.listArray.find(e => e.ListId == listId);
    this.currentList.ListId = rs.ListId;
    this.currentList.Description = rs.Description;
    this.listvalueArray = [];
    this.serv.httpGetListValue(this.currentList.ListId, true)
      .subscribe((data) => {
        if (data.length > 0) {
          data.forEach(e => {
            this.listvalueArray.push({
              Id: e.Id,
              Value: e.Value,
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
      this.spinner.show();
      this.serv.httpPost({ ListId: this.currentList.ListId, ListValueId: obj.Id, Value: obj.Value }, 0, obj.Id)
        .subscribe((data) => {
          this.spinner.hide();
          this.toast.Success({ message: 'Successfully updated' });
          this.loadListvalues(this.currentList.ListId);
        },
          (error) => {
            this.spinner.hide();
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
