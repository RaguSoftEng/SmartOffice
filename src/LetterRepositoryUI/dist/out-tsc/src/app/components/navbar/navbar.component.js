import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { ROUTES } from '../sidebar/sidebar.component';
let NavbarComponent = class NavbarComponent {
    constructor(location, element, router, configurationService, authenticationService) {
        this.element = element;
        this.router = router;
        this.configurationService = configurationService;
        this.authenticationService = authenticationService;
        this.mobileMenuVisible = 0;
        this.location = location;
        this.sidebarVisible = false;
        this.CurrentUser = JSON.parse(localStorage.getItem('currentUser'));
    }
    ngOnInit() {
        this.listTitles = ROUTES.filter(listTitle => listTitle);
        const navbar = this.element.nativeElement;
        this.toggleButton = navbar.getElementsByClassName('navbar-toggler')[0];
        this.router.events.subscribe((event) => {
            this.sidebarClose();
            this.$layer = document.getElementsByClassName('close-layer')[0];
            if (this.$layer) {
                this.$layer.remove();
                this.mobileMenuVisible = 0;
            }
        });
    }
    sidebarOpen() {
        const toggleButton = this.toggleButton;
        const body = document.getElementsByTagName('body')[0];
        setTimeout(() => {
            toggleButton.classList.add('toggled');
        }, 500);
        body.classList.add('nav-open');
        this.sidebarVisible = true;
    }
    sidebarClose() {
        const body = document.getElementsByTagName('body')[0];
        this.toggleButton.classList.remove('toggled');
        this.sidebarVisible = false;
        body.classList.remove('nav-open');
    }
    sidebarToggle() {
        const $toggle = document.getElementsByClassName('navbar-toggler')[0];
        if (this.sidebarVisible === false) {
            this.sidebarOpen();
        }
        else {
            this.sidebarClose();
        }
        const body = document.getElementsByTagName('body')[0];
        if (this.mobileMenuVisible == 1) {
            body.classList.remove('nav-open');
            if (this.$layer) {
                this.$layer.remove();
            }
            setTimeout(() => {
                $toggle.classList.remove('toggled');
            }, 400);
            this.mobileMenuVisible = 0;
        }
        else {
            setTimeout(() => {
                $toggle.classList.add('toggled');
            }, 430);
            const $layer = document.createElement('div');
            $layer.setAttribute('class', 'close-layer');
            if (body.querySelectorAll('.main-panel')) {
                document.getElementsByClassName('main-panel')[0].appendChild($layer);
            }
            else if (body.classList.contains('off-canvas-sidebar')) {
                document.getElementsByClassName('wrapper-full-page')[0].appendChild($layer);
            }
            setTimeout(() => {
                $layer.classList.add('visible');
            }, 100);
            $layer.onclick = function () {
                body.classList.remove('nav-open');
                this.mobileMenuVisible = 0;
                $layer.classList.remove('visible');
                setTimeout(() => {
                    $layer.remove();
                    $toggle.classList.remove('toggled');
                }, 400);
            }.bind(this);
            body.classList.add('nav-open');
            this.mobileMenuVisible = 1;
        }
    }
    getTitle() {
        let titlee = this.location.prepareExternalUrl(this.location.path());
        if (titlee.charAt(0) === '#') {
            titlee = titlee.slice(2);
        }
        titlee = titlee.split('/').pop();
        for (const listTitle of this.listTitles) {
            if (listTitle.path === titlee) {
                return listTitle.title;
            }
        }
        return 'Dashboard';
    }
    sideNavbarClose() {
        const sidebar = document.getElementsByClassName('sidebar')[0];
        const sidebarwrapper = document.getElementsByClassName('sidebar-wrapper')[0];
        const mainpanel = document.getElementsByClassName('main-panel')[0];
        sidebar.classList.remove('sidenav-open');
        sidebarwrapper.classList.remove('sidenav-open');
        mainpanel.classList.remove('sidenav-open-m');
        this.configurationService.isTogleSideNav = false;
    }
    sideNavbarOpen() {
        const sidebar = document.getElementsByClassName('sidebar')[0];
        const sidebarwrapper = document.getElementsByClassName('sidebar-wrapper')[0];
        const mainpanel = document.getElementsByClassName('main-panel')[0];
        sidebar.classList.add('sidenav-open');
        sidebarwrapper.classList.add('sidenav-open');
        mainpanel.classList.add('sidenav-open-m');
        this.configurationService.isTogleSideNav = true;
    }
    isMobileMenu() {
        if ($(window).width() > 991) {
            this.configurationService.isMobileDivice = false;
            return false;
        }
        this.configurationService.isMobileDivice = true;
        return true;
    }
    togleSideNav() {
        if (this.configurationService.isTogleSideNav) {
            this.sideNavbarClose();
        }
        else {
            this.sideNavbarOpen();
        }
    }
    logout() {
        this.authenticationService.logout()
            .subscribe(res => {
            localStorage.removeItem('currentUser');
            this.router.navigateByUrl('/login');
        });
    }
};
NavbarComponent = tslib_1.__decorate([
    Component({
        selector: 'app-navbar',
        templateUrl: './navbar.component.html',
        styleUrls: ['./navbar.component.css']
    })
], NavbarComponent);
export { NavbarComponent };
//# sourceMappingURL=navbar.component.js.map