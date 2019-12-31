import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { MatFormFieldModule, MatButtonModule, MatRippleModule, MatInputModule, MatTooltipModule, MatCheckboxModule, MatIconModule, MatSelectModule, MatAutocompleteModule, MatTabsModule, MatListModule, MatTableModule, MatPaginatorModule, MatSortModule, MatExpansionModule, MatDatepickerModule, MatNativeDateModule, MatDividerModule } from '@angular/material';
const matmodules = [
    MatFormFieldModule,
    MatButtonModule,
    MatRippleModule,
    MatInputModule,
    MatTooltipModule,
    MatCheckboxModule,
    MatIconModule,
    MatSelectModule,
    MatAutocompleteModule,
    MatTabsModule,
    MatIconModule,
    MatListModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatExpansionModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatDividerModule,
];
let MaterialModule = class MaterialModule {
};
MaterialModule = tslib_1.__decorate([
    NgModule({
        imports: [
            matmodules
        ],
        exports: [
            matmodules
        ],
        declarations: [],
    })
], MaterialModule);
export { MaterialModule };
//# sourceMappingURL=materialodule.js.map