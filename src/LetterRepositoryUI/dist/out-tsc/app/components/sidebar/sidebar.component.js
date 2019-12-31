import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
export const ROUTES = [
    { path: '/dashboard', title: 'dashboard', icon: 'dashboard', class: '' },
    { path: '/configuration', title: 'configuration', icon: 'settings_applications', class: '' },
    { path: '/department/1001', title: 'Department', icon: 'domain', class: '' },
    { path: '/user/1002', title: 'User Profiles', icon: 'person', class: '' },
    // { path: '/letter/1003', title: 'Letter', icon: 'description', class: '' },
    { path: '/visitorsdiary/1004', title: 'visitors diary', icon: 'book', class: '' },
];
let SidebarComponent = class SidebarComponent {
    constructor(configurationService) {
        this.configurationService = configurationService;
        this.CurrentUser = JSON.parse(localStorage.getItem('currentUser'));
    }
    ngOnInit() {
        this.menuItems = ROUTES.filter(menuItem => menuItem);
    }
    isMobileMenu() {
        if ($(window).width() > 991) {
            return false;
        }
        return true;
    }
};
SidebarComponent = tslib_1.__decorate([
    Component({
        selector: 'app-sidebar',
        templateUrl: './sidebar.component.html',
        styleUrls: ['./sidebar.component.css']
    })
], SidebarComponent);
export { SidebarComponent };
//# sourceMappingURL=sidebar.component.js.map