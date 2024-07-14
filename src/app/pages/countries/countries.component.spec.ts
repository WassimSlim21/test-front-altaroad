import { TestBed } from '@angular/core/testing';
import { CountriesComponent } from './countries.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CountryService } from '../../core/Service/Country.service';

describe('CountriesComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CountriesComponent ],
      imports: [ HttpClientTestingModule ],
      providers: [ CountryService ]
    }).compileComponents();
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(CountriesComponent);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });
});