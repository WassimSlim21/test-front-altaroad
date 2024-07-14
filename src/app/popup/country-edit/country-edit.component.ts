import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'; // Import FormGroup and Validators
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { CountryService } from '@app/core/Service/Country.service';
import { Continent, Country } from '@app/core/models/Country ';
import { environment } from '../../../environments/environment';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-country-edit',
  templateUrl: './country-edit.component.html',
  styleUrls: ['./country-edit.component.scss']
})
export class CountryEditComponent {
  country: Country; // Holds the country data received from the dialog data
  countryForm: FormGroup; // Define FormGroup for form validation
  continents = Object.values(Continent); // Create a list of continent values
  imagePreview: SafeUrl | null = null; // SafeUrl for image preview
  selectedFile: File | null = null; // Holds the selected file for image upload

  constructor(
    public dialogRef: MatDialogRef<CountryEditComponent>, // Reference to the dialog
    @Inject(MAT_DIALOG_DATA) public data: any, // Injected data containing the country to edit
    private formBuilder: FormBuilder, // Inject FormBuilder for form initialization
    private countryService: CountryService, // Inject CountryService for CRUD operations
    private sanitizer: DomSanitizer // Inject DomSanitizer for safe URL handling
  ) {
    // Initialize country data from injected dialog data
    this.country = { ...data.country };

    // Initialize countryForm with form controls and validators
    this.countryForm = this.formBuilder.group({
      name: [this.country.name, Validators.required],
      population: [this.country.population, Validators.required],
      area: [this.country.area, Validators.required],
      continent: [this.country.continent, Validators.required],
      gdp: [this.country.gdp, Validators.required],
      image: [this.country.image]
    });
  }

  /**
   * Closes the dialog without saving changes.
   * @param None
   * @returns void
   */
  closeDialog(): void {
    this.dialogRef.close();
  }

  /**
   * Constructs a safe URL for displaying the current country image.
   * @param None
   * @returns SafeUrl - Safe URL for the current country image
   */
  getSafeImageUrl(): SafeUrl {
    const imagePath = `${environment.apiUrl}uploads/${this.country.image}`;
    return this.sanitizer.bypassSecurityTrustUrl(imagePath);
  }

  /**
   * Handles file selection for image upload and displays a preview.
   * Updates the form control with the selected file.
   * @param event - Event containing the selected file
   * @returns void
   */
  onFileSelected(event: Event): void {
    const file = (event.target as HTMLInputElement).files?.[0];
    if (file) {
      // Display image preview
      const reader = new FileReader();
      reader.onload = () => {
        this.imagePreview = this.sanitizer.bypassSecurityTrustUrl(reader.result as string);
      };
      reader.readAsDataURL(file);

      // Update form control with selected file
      this.countryForm.patchValue({ image: file });
      this.selectedFile = file;  // Save the selected file
    }
  }

  /**
   * Saves the updated country details.
   * If a new image file is selected, uploads it to the server.
   * @param None
   * @returns void
   */
  save(): void {
    if (this.countryForm.valid) {
      const file = this.selectedFile;  // Get the selected file

      const updatedCountry: Country = this.countryForm.value;
      this.countryForm.patchValue({ image: file?.name });
      if (file && file.size > 0) {
        // Call countryService to update country with image upload
        this.countryService.updateCountry(file).subscribe(
          (event: any) => {
            const msg = 'Uploaded the file successfully: ' + file.name;
            console.log(msg);

            updatedCountry.image = file.name;  // Set the image field with the file name
            this.dialogRef.close(updatedCountry);  // Close the dialog with the new country object
          },
          (err: any) => {
            const msg = 'Could not upload the file: ' + file.name;
            console.log(msg);
          }
        );
      } else {
        // Call countryService to update country without image upload
        this.dialogRef.close(updatedCountry);  // Close the dialog without uploading a file
      }
    }
  }
}