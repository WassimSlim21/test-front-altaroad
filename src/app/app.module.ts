import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { SharedModule } from './shared/shared.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,            // Provides essential services for the browser platform
    AppRoutingModule,         // Defines application routes
    SharedModule,             // Contains shared components, services, and modules
    HttpClientModule          // Enables HTTP services
  ],
  providers: [
    provideAnimationsAsync()  // Provides animations asynchronously
  ],
  bootstrap: [AppComponent]   // Specifies the root component to bootstrap
})

export class AppModule { }
