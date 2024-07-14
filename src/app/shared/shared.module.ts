import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatToolbarModule } from '@angular/material/toolbar'; // Material toolbar module
import { MatButtonModule } from '@angular/material/button'; // Material button module
import { MatIconModule } from '@angular/material/icon'; // Material icon module
import { MatInputModule } from '@angular/material/input'; // Material input module
import { MatTableModule } from '@angular/material/table'; // Material table module
import { MatSortModule } from '@angular/material/sort'; // Material sort module
import { MatPaginatorModule } from '@angular/material/paginator'; // Material paginator module
import { MatDialogModule } from '@angular/material/dialog'; // Material dialog module
import { MatFormFieldModule } from '@angular/material/form-field'; // Material form field module
import { ReactiveFormsModule, FormsModule } from '@angular/forms'; // Reactive and Template-driven forms modules
import { MatSelectModule } from '@angular/material/select'; // Material select module
import { MatSnackBarModule, MAT_SNACK_BAR_DEFAULT_OPTIONS } from '@angular/material/snack-bar'; // Material snack bar module
import { CountryAddComponent } from '@app/popup/country-add/country-add.component';
import { CountryEditComponent } from '@app/popup/country-edit/country-edit.component';
import { LayoutModule } from '@angular/cdk/layout';


@NgModule({
  declarations: [
    CountryAddComponent,
    CountryEditComponent
  ],
  imports: [
    LayoutModule,
    CommonModule, // Common module for Angular features
    MatToolbarModule, // Material toolbar module
    MatButtonModule, // Material button module
    MatIconModule, // Material icon module
    MatSnackBarModule, // Material snack bar module
    MatInputModule, // Material input module
    MatTableModule, // Material table module
    MatSortModule, // Material sort module
    MatSelectModule, // Material select module
    MatPaginatorModule, // Material paginator module
    MatDialogModule, // Material dialog module
    MatFormFieldModule, // Material form field module
    ReactiveFormsModule, // Reactive forms module
    FormsModule, // Template-driven forms module
  ],
  exports: [
    LayoutModule,
    MatToolbarModule, // Export Material toolbar module
    MatButtonModule, // Export Material button module
    MatIconModule, // Export Material icon module
    MatInputModule, // Export Material input module
    MatTableModule, // Export Material table module
    MatSortModule, // Export Material sort module
    MatPaginatorModule, // Export Material paginator module
    MatDialogModule, // Export Material dialog module
    MatFormFieldModule, // Export Material form field module
    ReactiveFormsModule, // Export reactive forms module
    FormsModule, // Export template-driven forms module
  ], 
  providers: [
    // Provide default options for MatSnackBarModule
    { provide: MAT_SNACK_BAR_DEFAULT_OPTIONS, useValue: { duration: 2500 } }
  ],
})
export class SharedModule { }