import { TestBed, waitForAsync } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { CountriesComponent } from './countries.component';
import { SharedModule } from '@app/shared/shared.module';

describe('CountriesComponent', () => {
  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [CountriesComponent],
      imports: [HttpClientModule, SharedModule]
    }).compileComponents();
  }));

  it('should create', () => {
    const fixture = TestBed.createComponent(CountriesComponent);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });
});