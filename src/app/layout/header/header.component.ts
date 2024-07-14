import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  @Output() exportCSV = new EventEmitter<void>();
  @Output() addCountry = new EventEmitter<void>();
  @Output() searchInputChange = new EventEmitter<string>(); 
  searchInput: string = ''; // Initialize search input variable
  export(): void {
    this.exportCSV.emit();
  }
  
  add(): void {
    this.addCountry.emit();
  }

  onInputChange(event: Event): void {
    // Ensure event target is HTMLInputElement
    if (event.target instanceof HTMLInputElement) {
      this.searchInput = event.target.value;
      this.searchInputChange.emit(this.searchInput.trim().toLowerCase());
    }
  }
}
