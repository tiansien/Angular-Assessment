# MyAngularTable

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.2.0.

## Features

- Display a table of user data with columns for Name, Age, Income, and Status.
- Search functionality to filter the table by name.
- Conditional rendering of "PASS" or "FAIL" status based on age and income criteria.
- Button to apply for a credit card if the user meets the criteria.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

## Project Structure

- `src/app/app.component.html`: Main application template.
- `src/app/app.component.ts`: Main application component.
- `src/app/app.module.ts`: Main application module.
- `src/app/table/table.component.html`: Template for the table component.
- `src/app/table/table.component.ts`: Logic for the table component.
- `src/app/table/table.component.css`: Styles for the table component.

## Search Functionality

The table component includes a search input field that allows users to filter the table by name. When the user types a name and presses the enter key, the table will display only the records that match the search term. If the input field is cleared and the enter key is pressed, the table will display all records.

### Example

```html
<div class="search-bar">
    <input type="text" placeholder="🔍 Search by name..." (keyup.enter)="filterData($event)" />
</div>
