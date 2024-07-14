import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CountriesRoutingModule } from './countries-routing.module';
import { CountriesComponent } from './countries.component';
import { SharedModule } from '@app/shared/shared.module';
import { LayoutModule } from '@angular/cdk/layout';
import { HeaderComponent } from '@app/layout/header/header.component';

@NgModule({
  declarations: [
    CountriesComponent // Declaring the main component of the module
  ],
  imports: [
    LayoutModule,
    CommonModule, // Required for common Angular functionality like ngIf, ngFor, etc.
    SharedModule, // Importing shared module containing shared components, directives, and pipes
    CountriesRoutingModule // Importing routing module for countries feature routing configuration
  ]
})
export class CountriesModule { }