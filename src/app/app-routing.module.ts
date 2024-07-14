import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'; // Import Angular router modules

// Define routes for lazy loading modules
const routes: Routes = [
  { path: 'countries', loadChildren: () => import('./pages/countries/countries.module').then(m => m.CountriesModule) }, // Lazy load CountriesModule for path '/countries'
  { path: 'country-details/:id', loadChildren: () => import('./pages/country-details/country-details.module').then(m => m.CountryDetailsModule) }, // Lazy load CountryDetailsModule for path '/country-details/:id'
  { path: '', redirectTo: 'countries', pathMatch: 'full' }, // Redirect empty path to '/countries'
  { path: '**', redirectTo: 'countries' } // Redirect any other unknown routes to '/countries'
];

@NgModule({
  imports: [RouterModule.forRoot(routes)], // Initialize router with defined routes
  exports: [RouterModule] // Export initialized router module for use in AppModule
})
export class AppRoutingModule { }