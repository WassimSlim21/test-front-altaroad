import { TestBed } from '@angular/core/testing';
import { CountryDetailsComponent } from './country-details.component';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { HttpClientModule } from '@angular/common/http';

describe('CountryDetailsComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CountryDetailsComponent ],
      providers: [
        { provide: ActivatedRoute, useValue: { params: of({ id: 1 }) } }
      ]
    }).compileComponents();
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(CountryDetailsComponent);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });
});

beforeEach(() => {
  TestBed.configureTestingModule({
    declarations: [ CountryDetailsComponent ],
    imports: [ HttpClientModule ] // Add this
  })
  .compileComponents();
});