import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CountriesComponent } from './countries.component';
import { CountryDetailsComponent } from '../country-details/country-details.component';

// Define the routes for the Countries module
const routes: Routes = [
  { path: '', component: CountriesComponent }, // Route to display CountriesComponent at root
  { path: 'country-details/:name', component: CountryDetailsComponent }, // Route to display CountryDetailsComponent with parameter 'name'
  { path: '', redirectTo: 'countries', pathMatch: 'full' }, // Default redirect to 'countries' when path is empty
  { path: '**', redirectTo: 'countries' } // Redirect to 'countries' for any other undefined paths
];

@NgModule({
  imports: [RouterModule.forChild(routes)], // Import RouterModule.forChild with defined routes
  exports: [RouterModule] // Export RouterModule to make routes available to importing modules
})
export class CountriesRoutingModule { }