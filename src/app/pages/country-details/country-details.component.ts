import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { CountryService } from '@app/core/Service/Country.service';
import { Continent, Country } from '@app/core/models/Country ';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-country-details',
  templateUrl: './country-details.component.html',
  styleUrls: ['./country-details.component.scss']
})


export class CountryDetailsComponent implements OnInit {
  country: Country = {
    name: '',
    population: 0,
    area: 0,
    continent: Continent.Africa, // Initialize with a valid Continent value
    gdp: 0,
    image: ''
  };

  constructor(
    private route: ActivatedRoute, // ActivatedRoute provides access to the route parameters
    private router: Router, // Router for navigation within the application
    private countryService: CountryService, // Service for fetching country details
    private sanitizer: DomSanitizer // DomSanitizer for safe URL handling
  ) {}

  ngOnInit(): void {
    // Retrieve country name from route parameter
    const countryName = this.route.snapshot.paramMap.get('id');
    if (countryName) {
      // Fetch country details from service based on country name
      const foundCountry = this.countryService.getCountry(countryName);
      if (foundCountry) {
        this.country = foundCountry; // Assign found country details to component property
      } else {
        // Handle case where country is not found
        // For example, navigate back to country list
        this.router.navigate(['/countries']);
      }
    }
  }

  /**
   * Generates a safe URL for displaying country image.
   * @param imageUrl - URL of the country's image
   * @returns SafeUrl - Sanitized URL for safe display
   */
  getSafeImageUrl(imageUrl: string): SafeUrl {
    // Assuming your images are in assets/images/
    const imagePath = `${environment.apiUrl}/uploads/${imageUrl}`;
    return this.sanitizer.bypassSecurityTrustUrl(imagePath);
  }

  /**
   * Navigates back to the countries list page.
   */
  goBack(): void {
    this.router.navigate(['/countries']);
  }
}