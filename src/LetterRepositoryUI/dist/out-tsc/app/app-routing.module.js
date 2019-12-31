import { RouterModule } from '@angular/router';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { AuthenticationComponent } from './layouts/authentication/authentication.component';
import { AuthGuard } from './common/services/auth.guard.service';
const routes = [
    {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full',
    }, {
        path: '',
        component: AdminLayoutComponent,
        children: [
            {
                path: '',
                loadChildren: './layouts/admin-layout/admin-layout.module#AdminLayoutModule'
            }
        ], canActivate: [AuthGuard]
    }, {
        path: 'login',
        component: AuthenticationComponent,
        children: [{
                path: 'login',
                loadChildren: './layouts/authentication/authentication.module#AuthenticationModule'
            }]
    }
];
export const AppRoutingModule = RouterModule.forRoot(routes, { useHash: true });
//# sourceMappingURL=app-routing.module.js.map