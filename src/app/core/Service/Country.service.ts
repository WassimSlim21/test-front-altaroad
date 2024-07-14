import { HttpClient  } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Country } from '@app/core/models/Country ';

@Injectable({
  providedIn: 'root'
})
export class CountryService {
  private countries: Country[] = [];
  private readonly jsonUrl = '/assets/data/countries.json'; // Path to the JSON file containing countries data
  private readonly localStorageKey = 'countries'; // Key for storing countries data in localStorage

  constructor(private http: HttpClient) { 
    this.loadCountries(); // Initialize the service by loading countries data from localStorage
  }

  /**
   * Fetches countries data from a JSON file and stores it in localStorage.
   * @returns An observable of the fetched data.
   */
  loadCountriesFromJson(): Observable<any> {
    return this.http.get(this.jsonUrl).pipe(
      tap(data => {
        localStorage.setItem(this.localStorageKey, JSON.stringify(data)); // Store fetched data in localStorage
      })
    );
  }

  /**
   * Loads countries data from localStorage into the service.
   * No parameters.
   * No return value.
   */
  private loadCountries(): void {
    const countries = localStorage.getItem(this.localStorageKey);
    if (countries) {
      this.countries = JSON.parse(countries); // Parse and assign countries data to the private property
    }
  }

  /**
   * Retrieves all countries stored in the service.
   * @returns An array of Country objects.
   */
  getCountries(): Country[] {
    return this.countries;
  }

    /**
   * Saves countries data to localStorage.
   * No parameters.
   * No return value.
   */
    saveCountries(): void {
      localStorage.setItem(this.localStorageKey, JSON.stringify(this.countries)); // Stringify and store countries data
    }

  
}