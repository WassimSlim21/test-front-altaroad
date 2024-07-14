import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { CountryService } from '@app/core/Service/Country.service';
import { Continent, Country } from '@app/core/models/Country ';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-country-add',
  templateUrl: './country-add.component.html',
  styleUrl: './country-add.component.scss'
})
export class CountryAddComponent {
  countryForm: FormGroup; // Form group for country form
  continents = Object.values(Continent); // Array of continent values
  imagePreview: SafeUrl | null = null; // Safe URL for image preview, initially null
  selectedFiles?: FileList; // List of selected files
  selectedFileNames: string[] = []; // Array to store selected file names
  selectedFile: File | null = null; // Currently selected file

  progressInfos: any[] = []; // Array to store upload progress information
  message: string[] = []; // Array to store messages

  previews: string[] = []; // Array to store image previews
  imageInfos?: Observable<any>; // Observable for image information

  constructor(
    private fb: FormBuilder, // FormBuilder for form initialization
    private dialogRef: MatDialogRef<CountryAddComponent>, // Reference to dialog for closing
    private sanitizer: DomSanitizer, // DomSanitizer for safe URL operations
    private countryService: CountryService // CountryService for country operations
  ) {
    // Initialize the country form with form controls and validators
    this.countryForm = this.fb.group({
      name: ['', Validators.required], // Name field with required validator
      population: [0, Validators.required], // Population field with required validator
      area: [0, Validators.required], // Area field with required validator
      continent: [Continent.Africa, Validators.required], // Continent field with required validator
      gdp: [0, Validators.required], // GDP field with required validator
      image: [null, Validators.required]  // Image field with required validator
    });
  }

  // Method to handle file selection
  onFileSelected(event: Event): void {
    const file = (event.target as HTMLInputElement).files?.[0]; // Get the selected file
    if (file) {
      // Display image preview using FileReader
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

  // Method to save country data
  onSave(): void {
    if (this.countryForm.valid) { // Check if form is valid
      const file = this.selectedFile;  // Get the selected file
      const newCountry: Country = { ...this.countryForm.value }; // Create a new country object from form data

      if (file && file.size > 0) {
        // Call service method to add country with file
        this.countryService.addCountry(file).subscribe(
          (event: any) => {
            const msg = 'Uploaded the file successfully: ' + file.name;
            newCountry.image = file.name;  // Set the image field with the file name
            this.dialogRef.close(newCountry);  // Close the dialog with the new country object
            console.log(msg); // Log success message
          },
          (err: any) => {
            const msg = 'Could not upload the file: ' + file.name;
            console.log(msg); // Log error message
          }
        );
      } else {
        this.dialogRef.close(newCountry);  // Close the dialog without uploading a file
      }
    }
  }

  // Method to handle cancel action
  onCancel(): void {
    this.dialogRef.close();  // Close the dialog
  }
}
