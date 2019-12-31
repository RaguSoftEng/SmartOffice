import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminLayoutRoutes } from './admin-layout.routing';
import { DatePipe } from '@angular/common';
import { MaterialModule } from 'app/materialodule';
import { jqxComboBoxComponent } from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxcombobox';
import { jqxGridComponent } from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxgrid';
import { ConfigurationService } from '../../common/services/configuration.service';
import { UserprofileComponent } from 'app/pages/userprofile/userprofile.component';
import { DashboardComponent } from 'app/pages/dashboard/dashboard.component';
import { ViewComponent, ColumnsPipe } from 'app/pages/view/view.component';
import { CommonviewpageComponent } from 'app/pages/commonviewpage/commonviewpage.component';
import { ConfigurationComponent } from 'app/pages/configuration/configuration.component';
import { DepartmentComponent } from 'app/pages/department/department.component';
import { MatselectComponent } from 'app/pages/matselect/matselect.component';
import { NgxMatSelectSearchModule } from 'ngx-mat-select-search';
let AdminLayoutModule = class AdminLayoutModule {
};
AdminLayoutModule = tslib_1.__decorate([
    NgModule({
        imports: [
            CommonModule,
            RouterModule.forChild(AdminLayoutRoutes),
            FormsModule,
            ReactiveFormsModule,
            MaterialModule,
            NgxMatSelectSearchModule
        ],
        declarations: [
            jqxComboBoxComponent,
            jqxGridComponent,
            UserprofileComponent,
            DashboardComponent,
            ViewComponent,
            ColumnsPipe,
            CommonviewpageComponent,
            ConfigurationComponent,
            DepartmentComponent,
            MatselectComponent
        ],
        providers: [ConfigurationService, DatePipe],
    })
], AdminLayoutModule);
export { AdminLayoutModule };
//# sourceMappingURL=admin-layout.module.js.map