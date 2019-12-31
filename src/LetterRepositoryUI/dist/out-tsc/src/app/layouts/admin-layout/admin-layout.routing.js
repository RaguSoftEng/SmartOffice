import { DashboardComponent } from 'app/pages/dashboard/dashboard.component';
import { ConfigurationComponent } from 'app/pages/configuration/configuration.component';
import { CommonviewpageComponent } from 'app/pages/commonviewpage/commonviewpage.component';
import { UserprofileComponent } from 'app/pages/userprofile/userprofile.component';
import { DepartmentComponent } from 'app/pages/department/department.component';
import { MatselectComponent } from 'app/pages/matselect/matselect.component';
export const AdminLayoutRoutes = [
    { path: 'dashboard', component: DashboardComponent },
    { path: 'configuration', component: ConfigurationComponent },
    { path: 'user/:formId', component: CommonviewpageComponent },
    { path: 'user/:formId/:id', component: UserprofileComponent },
    { path: 'department/:formId', component: CommonviewpageComponent },
    { path: 'department/:formId/:id', component: DepartmentComponent },
    { path: 'select', component: MatselectComponent },
];
//# sourceMappingURL=admin-layout.routing.js.map