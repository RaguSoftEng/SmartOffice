import { Routes } from '@angular/router';
import { DashboardComponent } from 'app/pages/dashboard/dashboard.component';

import { CommonviewpageComponent } from 'app/pages/commonviewpage/commonviewpage.component';
import { UserprofileComponent } from 'app/pages/userprofile/userprofile.component';
import { DepartmentComponent } from 'app/pages/department/department.component';
import { MatselectComponent } from 'app/pages/matselect/matselect.component';
import { LetterviewComponent } from 'app/pages/letterview/letterview.component';
import { LetterComponent } from 'app/pages/letter/letter.component';
import { ConfigurationsComponent } from 'app/pages/configurations/configurations.component';
import { VisitorsviewComponent } from 'app/pages/visitorsview/visitorsview.component';
import { VisitorsdiaryComponent } from 'app/pages/visitorsdiary/visitorsdiary.component';
import { ReportsComponent } from 'app/pages/reports/reports.component';


export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard', component: DashboardComponent },
    { path: 'reports', component: ReportsComponent },
    { path: 'configuration', component: ConfigurationsComponent },
    { path: 'user/:formId', component: CommonviewpageComponent },
    { path: 'user/:formId/:id', component: UserprofileComponent },
    { path: 'department/:formId', component: CommonviewpageComponent },
    { path: 'department/:formId/:id', component: DepartmentComponent },
    { path: 'letter/:formId', component: LetterviewComponent },
    { path: 'letter/:formId/:id', component: LetterComponent },
    { path: 'select', component: MatselectComponent },
    { path: 'visitorsdiary/:formId', component: VisitorsviewComponent },
    { path: 'visitorsdiary/:formId/:id', component: VisitorsdiaryComponent },
];
