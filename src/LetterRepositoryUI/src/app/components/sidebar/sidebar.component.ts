import { Component, OnInit } from '@angular/core';
import { ConfigurationService } from '../../common/services/configuration.service';
import { User } from '../../common/models/user';

declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: '/dashboard', title: 'dashboard', icon: 'dashboard', class: '' },
    { path: '/reports', title: 'reports', icon: 'assessment', class: '' },
    { path: '/configuration', title: 'configuration', icon: 'settings_applications', class: '' },
    { path: '/department/1001', title: 'Department', icon: 'domain', class: '' },
    { path: '/user/1002', title: 'User Profiles', icon: 'person', class: '' },
    { path: '/visitorsdiary/1004', title: 'visitors diary', icon: 'book', class: '' },
];

@Component({
    selector: 'app-sidebar',
    templateUrl: './sidebar.component.html',
    styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
    menuItems: any[];
    CurrentUser: User;

    constructor(private configurationService: ConfigurationService) {
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
}

