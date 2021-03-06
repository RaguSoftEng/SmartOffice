import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminLayoutRoutes } from './admin-layout.routing';
import { DatePipe } from '@angular/common';

import { MaterialModule } from 'app/materialodule';

import { ConfigurationService } from '../../common/services/configuration.service';
import { UserprofileComponent } from 'app/pages/userprofile/userprofile.component';
import { DashboardComponent } from 'app/pages/dashboard/dashboard.component';
import { ViewComponent } from 'app/pages/view/view.component';
import { CommonviewpageComponent } from 'app/pages/commonviewpage/commonviewpage.component';
import { DepartmentComponent } from 'app/pages/department/department.component';
import { MatselectComponent } from 'app/pages/matselect/matselect.component';
import { NgxMatSelectSearchModule } from 'ngx-mat-select-search';
import { LetterComponent } from 'app/pages/letter/letter.component';
import { LetterviewComponent } from 'app/pages/letterview/letterview.component';
import { ConfigurationsComponent } from 'app/pages/configurations/configurations.component';
import { VisitorsviewComponent } from 'app/pages/visitorsview/visitorsview.component';
import { VisitorsdiaryComponent } from 'app/pages/visitorsdiary/visitorsdiary.component';
import { ReportsComponent } from 'app/pages/reports/reports.component';
import {ColumnsPipe} from 'app/common/pipes/columnsPipe'

import { ChartModule, HIGHCHARTS_MODULES } from 'angular-highcharts';
import stock from 'highcharts/modules/stock.src';
import more from 'highcharts/highcharts-more.src';
import * as exporting from 'highcharts/modules/exporting.src';
import {NgxPrintModule} from 'ngx-print';

export function highchartsModules() {
  // apply Highcharts Modules to this array
  return [stock, more, exporting];
}

import { ThermalPrintModule } from 'ng-thermal-print';
import { from } from 'rxjs';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    NgxMatSelectSearchModule,
    ChartModule,
    ThermalPrintModule,
    NgxPrintModule
  ],
  declarations: [
    UserprofileComponent,
    DashboardComponent,
    ViewComponent,
    ColumnsPipe,
    CommonviewpageComponent,
    DepartmentComponent,
    MatselectComponent,
    LetterComponent,
    LetterviewComponent,
    ConfigurationsComponent,
    VisitorsviewComponent,
    VisitorsdiaryComponent,
    ReportsComponent
  ],
  providers: [ConfigurationService, DatePipe, { provide: HIGHCHARTS_MODULES, useFactory: highchartsModules }],
})

export class AdminLayoutModule { }
