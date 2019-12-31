import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { MatFormFieldModule, MatButtonModule, MatRippleModule, MatInputModule, MatTooltipModule, MatCheckboxModule, MatSelectModule, MatAutocompleteModule, MatTabsModule, MatListModule, MatTableModule, MatPaginatorModule, MatSortModule, MatExpansionModule, MatDatepickerModule, MatNativeDateModule, MatDividerModule, MatRadioModule } from '@angular/material';
import { MatIconModule } from '@angular/material/icon';
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
    //  MatIconModule,
    MatListModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatExpansionModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatDividerModule,
    MatRadioModule
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