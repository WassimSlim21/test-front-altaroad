import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CountryDetailsRoutingModule } from './country-details-routing.module';
import { CountryDetailsComponent } from './country-details.component';


@NgModule({
  declarations: [
    CountryDetailsComponent // Declare country details component Modal
  ],
  imports: [
    CommonModule, // Import CommonModule for common Angular directives
    CountryDetailsRoutingModule // Import routing module for country details
  ]
})
export class CountryDetailsModule { }
