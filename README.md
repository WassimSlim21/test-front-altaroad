# Test Project for Full Stack Developer Apprenticeship Position at Altaroad

This project is a demonstration of my skills and capabilities as a candidate for the apprenticeship position at Altaroad. It showcases an Angular application designed to manage country data using Angular Material, HTTP services, and various Angular features.

## Table of Contents

- [Test Project for Full Stack Developer Apprenticeship Position at Altaroad](#test-project-for-full-stack-developer-apprenticeship-position-at-altaroad)
  - [Table of Contents](#table-of-contents)
  - [Introduction](#introduction)
  - [Features](#features)
  - [Setup Instructions](#setup-instructions)
- [Project Directory Structure](#project-directory-structure)
- [Technologies Used](#technologies-used)

---

## Introduction

This Angular project serves as a demonstration of my proficiency in frontend development using Angular framework and related technologies. It implements features commonly found in data management applications, focusing on countries data.

---

## Features

- **Country Management:**
  - View a list of countries with basic details.
  - Add new countries with population, area, GDP, and image.
  - Edit existing country details.
  - View detailed information about each country.

- **UI/UX Features:**
  - Responsive and intuitive user interface using Angular Material.
  - Pagination, sorting, and filtering capabilities in the country list.
  - Image upload and preview functionality.
  - Error handling and notifications using Angular Material components.

---

## Setup Instructions

To run this project locally, follow these steps:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your/repository.git
   cd repository-name

2. **Install dependencies:**
   ```bash
   npm install

3. **Serve the application:**
   ```bash
   ng serve

4. **Open in your browser:**

Navigate to http://localhost:4200/ to view the application.

# Project Directory Structure

- **`public/`**
  - Contains public files served by the application.

- **`src/`**
  - **`app/`**
    - **`core/`**
      - **`models/`**
        - `Country.ts`: Model class for country data.
      - **`Service/`**
        - `Country.service.ts`: Service for fetching and manipulating country data.
    - **`layout/`**
      - **`header/`**
        - Contains header components and styles.
      - `layout.module.ts`: Module for layout components.
    - **`pages/`**
      - **`countries/`**
        - `countries-routing.module.ts`: Routing module for countries page.
        - `countries.component.html`: Template for countries component.
        - `countries.component.scss`: Styles for countries component.
        - `countries.component.spec.ts`: Unit tests for countries component.
        - `countries.component.ts`: Component logic for countries page.
        - `countries.module.ts`: Module for countries page.
      - **`country-details/`**
        - `country-details-routing.module.ts`: Routing module for country details page.
        - `country-details.component.html`: Template for country details component.
        - `country-details.component.scss`: Styles for country details component.
        - `country-details.component.spec.ts`: Unit tests for country details component.
        - `country-details.component.ts`: Component logic for country details page.
        - `country-details.module.ts`: Module for country details page.
    - **`popup/`**
      - **`country-add/`**
        - `country-add.component.html`: Template for adding a country component.
        - `country-add.component.scss`: Styles for adding a country component.
        - `country-add.component.spec.ts`: Unit tests for adding a country component.
        - `country-add.component.ts`: Component logic for adding a country.
      - **`country-edit/`**
        - `country-edit.component.html`: Template for editing a country component.
        - `country-edit.component.scss`: Styles for editing a country component.
        - `country-edit.component.spec.ts`: Unit tests for editing a country component.
        - `country-edit.component.ts`: Component logic for editing a country.
    - **`shared/`**
      - Contains shared modules, components, services, and utilities used across the application.
    - `app-routing.module.ts`: Root routing module for the application.
    - `app.component.html`: Main template for the root component.
    - `app.component.scss`: Global styles for the application.
    - `app.component.spec.ts`: Unit tests for the root component.
    - `app.component.ts`: Root component logic.
    - `app.module.ts`: Root module for the application, imports all other modules.
  - **`assets/`**
    - **`data/`**
      - `countries.json`: Sample data file for countries.
    - **`images/`**
      - Contains images used in the application.
  - **`environments/`**
    - `environment.development.ts`: Environment configuration for development.
    - `environment.ts`: Default environment configuration.

# Technologies Used
- Angular: Frontend framework for building SPAs and PWAs.
- Angular Material: UI component library for Angular applications.
- TypeScript: Typed superset of JavaScript for enhanced development.
HTML/SCSS: Markup and styling languages for web development.
- HttpClient: Angular module for handling HTTP requests.
- RxJS: Reactive Extensions library for asynchronous programming.
- Node.js: JavaScript runtime environment.
- Bootstrap: CSS framework for responsive design (included for styling).

Created by Wassim SLIM