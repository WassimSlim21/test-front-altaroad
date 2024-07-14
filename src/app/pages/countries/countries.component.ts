import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { CountryService } from '../../core/Service/Country.service';
import { MatSort } from '@angular/material/sort';
import { MatDialog } from '@angular/material/dialog';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { Router } from '@angular/router';;
import { environment } from '../../../environments/environment';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Country } from '@app/core/models/Country ';
import { CountryAddComponent } from '@app/popup/country-add/country-add.component';
import { CountryEditComponent } from '@app/popup/country-edit/country-edit.component';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.scss']
})
export class CountriesComponent implements AfterViewInit {
  displayedColumns: string[] = ['name', 'population', 'area', 'continent', 'image', 'gdp', 'actions'];
  displayedColumnswithoutEdit: string[] = ['name', 'population', 'area', 'continent', 'image', 'gdp'];
  private readonly jsonUrl = 'assets/data/countries.json';
  private readonly localStorageKey = 'countries';
  dataSource: MatTableDataSource<Country> = new MatTableDataSource<Country>();
  countries: Country[] = [];
  searchInput: string = '';
  @ViewChild(MatSort, { static: false }) sort!: MatSort;

  constructor(
    private countryService: CountryService,
    public dialog: MatDialog,
    private sanitizer: DomSanitizer,
    private router: Router,
    private snackBar: MatSnackBar
  ) {}

  /**
   * Angular lifecycle hook that runs after component's view initialized.
   * Assigns MatSort instance to MatTableDataSource for sorting functionality.
   */
  ngAfterViewInit(): void {
    if (this.sort) {
      this.dataSource.sort = this.sort;
    } else {
      console.warn('MatSort instance not found.');
    }
  }

  /**
   * Angular lifecycle hook that runs after component initialized.
   * Loads countries data from service and initializes MatTableDataSource.
   */
  ngOnInit(): void {
    this.loadCountries();
  }

  /**
   * Generates a safe URL for displaying images securely.
   * 
   * @param {string} imageUrl - The URL of the image to sanitize.
   * @returns {SafeUrl} - Sanitized URL that can be used in img src.
   */
  getSafeImageUrl(imageUrl: string): SafeUrl {
    const imagePath = `${environment.apiUrl}/uploads/${imageUrl}`;
    return this.sanitizer.bypassSecurityTrustUrl(imagePath);
  }

  /**
   * Loads countries data from the service into the component.
   */
  loadCountries(): void {
    this.countries = this.countryService.getCountries();
    this.dataSource = new MatTableDataSource(this.countries);
  }

  /**
 * Sorts the table data based on the selected column.
 * 
 * @param {Event} event - The event that triggered the sorting.
 * @param {string} columnName - The name of the column to sort by.
 */
sortData(event: Event, columnName: string): void {
  const column = columnName as keyof Country;
  if (this.dataSource.sort) {
    const currentActive = this.sort.active;
    const currentDirection = this.sort.direction;
    if (currentActive === column) {
      this.sort.direction = currentDirection === 'asc' ? 'desc' : 'asc';
    } else {
      this.dataSource.sort.active = column;
      this.dataSource.sort.direction = 'asc';
    }

    this.dataSource.sort.sortChange.emit({ active: this.dataSource.sort.active, direction: this.dataSource.sort.direction });
  } else {
    console.warn('MatSort not available or initialized.');
  }

  const sortDirection = this.getSortDirection(column);
  console.log(`Sorting ${column} in ${sortDirection} order.`);
}

/**
 * Retrieves the current sort direction of a column.
 * 
 * @param {keyof Country} column - The column name to check for sorting.
 * @returns {'asc' | 'desc'} - The current sort direction ('asc' for ascending, 'desc' for descending).
 */
getSortDirection(column: keyof Country): 'asc' | 'desc' {
  if (this.dataSource.sort && this.dataSource.sort.active === column) {
    return this.dataSource.sort.direction as 'asc' | 'desc';
  }
  return 'asc';
}
  /**
   * Applies a filter to the table based on the given search input.
   * 
   * @param {string} filterValue - The value to filter the table rows by.
   */
  applyFilter(filterValue: string): void {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  /**
   * Exports the current table data to a CSV file for download.
   */
  exportToCSV(): void {
    const csvData = this.countries.map(country => ({
      name: country.name,
      population: country.population,
      area: country.area,
      continent: country.continent,
      gdp: country.gdp,
      image: country.image
    }));
    const csvString = this.convertToCSV(csvData);
    const blob = new Blob([csvString], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.setAttribute('href', url);
    a.setAttribute('download', 'countries.csv');
    a.click();
  }

  /**
   * Converts an array of objects to a CSV-formatted string.
   * 
   * @param {any[]} objArray - The array of objects to convert to CSV.
   * @returns {string} - The CSV-formatted string.
   */
  convertToCSV(objArray: any[]): string {
    const array = [Object.keys(objArray[0])].concat(objArray);
    return array.map(it => Object.values(it).toString()).join('\n');
  }

  /**
   * Redirects to the country details page when a country row is clicked.
   * Opens edit dialog if the edit icon is clicked.
   * 
   * @param {Country} country - The country object clicked.
   * @param {Event} event - The event that triggered the click.
   */
  viewDetails(country: Country, event: Event): void {
    const targetElement = event.target as HTMLElement;
    const isEditIcon = targetElement.classList.contains('mat-icon') && targetElement.textContent === 'edit';

    if (!isEditIcon) {
      this.router.navigate(['/country-details', country.name]);
    }
  }

 

  /**
   * Deletes all countries from local storage and table data.
   * 
   */
  deleteAll(): void {
    localStorage.removeItem(this.localStorageKey);
    this.countries = []; // Clear local data array
    this.dataSource.data = this.countries; // Update MatTableDataSource with empty data
    localStorage.setItem(this.localStorageKey, this.countries.toString());
  }

  /**
   * Uploads all countries from JSON file to service and refreshes table data.
   * 
   */
  uploadAll(): void {
    this.countryService.loadCountriesFromJson().subscribe(() => {
      this.loadCountries(); // Refresh data after uploading new countries
      this.dataSource.data = this.countries; // Update MatTableDataSource with empty data
    });
  }
  /**
   * Opens a dialog to add a new country.
   * Updates table and local storage after successful addition.
   */
  addCountry(): void {
    const dialogRef = this.dialog.open(CountryAddComponent, { data: { country: {} } });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.countries.push(result);
        this.snackBar.open("Country " + result.name + " Added successfully!!");
        this.countryService.saveCountries();
        this.loadCountries();
      }
    });
  }
 
  /**
   * Opens a dialog to edit an existing country.
   * Updates table and local storage after successful edit.
   * 
   * @param {Country} country - The country object to edit.
   */
  editCountry(country: any): void {
    const dialogRef = this.dialog.open(CountryEditComponent, {
      data: { country },
      width: '600px', // Specify a custom width
      height: 'auto' // You can also specify a custom height if needed
    });
        dialogRef.afterClosed().subscribe(result => {
      if (result) {
        const index = this.countries.findIndex(c => c.name === country.name);
        this.countries[index] = result;
        this.snackBar.open("Country " + result.name + " Updated successfully!!");
        this.countryService.saveCountries();
        this.loadCountries();
      }
    });
  }
}

