# Modulos

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.2.3.

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

#Este proyecto:
En este proyecto vemos la creación de modulos con 'ng g m' appRouting --flat(no lo incluimos dentro de una carpeta pero si dentro del modulo principal como un archivo), tambien vemos el uso de la carga perezosa(lazy loading) y modulos compartidos(shared).
Con este comando creamos un modulo general y un modulo de rutas para este modulo(blog) ng g m blog --routing.
Con este comando creamos un componete dentro de un modulo en especifico ng g c courses/ListCourses.
Modulo compartido con ng g m shared, Generar carpeta de environments ng g environments
