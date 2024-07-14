import { HttpClient, HttpEvent, HttpRequest  } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Country } from '@app/core/models/Country ';
import { environment } from 'environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CountryService {
  private countries: Country[] = [];
  private readonly jsonUrl = '/assets/data/countries.json'; // Path to the JSON file containing countries data
  private readonly localStorageKey = 'countries'; // Key for storing countries data in localStorage
  private apiUrl = environment.apiUrl; // API URL fetched from environment configuration

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

     /**
   * Retrieves a specific country by its name.
   * @param name The name of the country to retrieve.
   * @returns The Country object matching the provided name, or undefined if not found.
   */
  getCountry(name: string): Country | undefined {
    return this.countries.find(country => country.name === name);
  }


  
  /**
   * Updates a country using a file upload.
   * @param file The File object to upload.
   * @returns An observable of the HTTP event.
   */
  updateCountry(file: File): Observable<HttpEvent<any>> {
    const formData: FormData = new FormData();
    formData.append('file', file); // Append the file to FormData
  
    const req = new HttpRequest('POST', `${this.apiUrl}api/upload`, formData, {
      responseType: 'json'
    });
  
    return this.http.request(req); // Return the HTTP request observable
  }

  /**
   * Adds a new country using a file upload.
   * @param file The File object to upload.
   * @returns An observable of the HTTP event.
   */
  addCountry(file: File): Observable<HttpEvent<any>> {
    const formData: FormData = new FormData();
    formData.append('file', file); // Append the file to FormData

    const req = new HttpRequest('POST', `${this.apiUrl}api/upload`, formData, {
      responseType: 'json'
    });

    return this.http.request(req); // Return the HTTP request observable
  }
  
}