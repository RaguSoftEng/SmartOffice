import { NgModule } from '@angular/core';
import {
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
    MatListModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatExpansionModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatDividerModule,
    MatRadioModule
} from '@angular/material';

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

@NgModule({
    imports: [
        matmodules
    ],
    exports: [
        matmodules
    ],
    declarations: [],
}) export class MaterialModule { }
