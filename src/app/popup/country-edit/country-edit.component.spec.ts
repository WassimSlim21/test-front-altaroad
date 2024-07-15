import { TestBed } from '@angular/core/testing';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CountryEditComponent } from './country-edit.component';
import { HttpClientModule } from '@angular/common/http';

describe('CountryEditComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CountryEditComponent ],
      providers: [
        { provide: MatDialogRef, useValue: {} },
        { provide: MAT_DIALOG_DATA, useValue: {} }
      ]
    }).compileComponents();
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(CountryEditComponent);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });
});

beforeEach(() => {
  TestBed.configureTestingModule({
    declarations: [ CountryEditComponent ],
    imports: [ HttpClientModule ]
  })
  .compileComponents();
});