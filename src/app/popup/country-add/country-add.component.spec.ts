import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountryAddComponent } from './country-add.component';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

describe('CountryEditComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CountryAddComponent ],
      providers: [
        { provide: MatDialogRef, useValue: {} },
        { provide: MAT_DIALOG_DATA, useValue: {} }
      ]
    }).compileComponents();
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(CountryAddComponent);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });
});