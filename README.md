# OlympicGamesStarter

TV Channel Télésport is launching its new interactive web application to prepare for the next Olympic Games. There, viewers will be able to see all data from previous Olympic Games.


## Development server

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 18.0.3.

Don't forget to install your node_modules before starting (`npm install`).

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Code architecture

The architecture includes the following:

- `app.component`, `app.module` & `app-routing.module` files : the main components of the application.
- `components` folder: contains the charts components.
- `pages` folder: contains all pages : `home` is used as the landing page, `country-detail` is a page model used to display all countries' data and `not-found` is used when a route doesn't exist.
- `core` folder: contains the business logic : `olympic.service` is used to access and use the data included inside the `olympic.json` file. The `models` folders contains two files used to get structured data.