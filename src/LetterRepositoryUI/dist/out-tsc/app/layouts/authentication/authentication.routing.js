import { RouterModule } from '@angular/router';
import { LoginComponent } from '../../login/login.component';
const routes = [
    {
        path: 'login',
        component: LoginComponent,
    } /*,
    {
      path: 'auth',
      children: [ {
        path: 'login',
        component: LoginComponent
    }]}*/
];
export const AuthenticationRoutes = RouterModule.forChild(routes);
//# sourceMappingURL=authentication.routing.js.map