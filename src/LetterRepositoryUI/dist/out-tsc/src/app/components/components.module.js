import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
let ComponentsModule = class ComponentsModule {
};
ComponentsModule = tslib_1.__decorate([
    NgModule({
        imports: [
            CommonModule,
            RouterModule,
        ],
        declarations: [
            NavbarComponent,
            SidebarComponent
        ],
        exports: [
            NavbarComponent,
            SidebarComponent
        ]
    })
], ComponentsModule);
export { ComponentsModule };
//# sourceMappingURL=components.module.js.map