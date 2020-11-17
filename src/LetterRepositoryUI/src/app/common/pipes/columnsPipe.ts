import { formatDate } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'Columns' })
export class ColumnsPipe implements PipeTransform {
  transform(value: any, ColumnName: string): any[] {
    if (value) {
      const keyArr: any[] = Object.keys(value);
      const dataArr = [];
      keyArr.forEach((key: any) => {
        if (ColumnName === key) {
          const colData = !Number(value[key]) ? ( Number(Date.parse(value[key])) ? formatDate(value[key], 'MM/dd/yyyy', 'en-US')
          : value[key]) : value[key];
          dataArr.push(colData);
        }
      });
      return dataArr;
    }
  }
}