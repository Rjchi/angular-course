import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { CoursesComponent } from './courses/courses.component';
import { ContactComponent } from './contact/contact.component';
import { ContactInfoComponent } from './contact-info/contact-info.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { CoursesDetailComponent } from './courses-detail/courses-detail.component';
import { ContactDetailsComponent } from './contact-details/contact-details.component';

/**-------------------------------------------------------------
 * | Con estas dos clases podemos definir nuestro enrutador
 * -------------------------------------------------------------*/
import { RouterModule, Routes } from '@angular/router';

const router: Routes = [
  /**-------------------------------------------------------------------
   * | Incluimos un objeto por cada uno de los patchs de la aplicación
   * | seguido del componente que queremos renderizar
   * -------------------------------------------------------------------*/
  { path: 'home', component: HomeComponent },
  /**-------------------------------------------------
   * | Asi incluimos las rutas hijas de un componente
   * | Estas rutas van a compartir el patch del padre
   * -------------------------------------------------*/
  {
    path: 'contact',
    component: ContactComponent,
    children: [
      {
        path: '',
        component: ContactInfoComponent,
      },
      {
        path: 'details',
        component: ContactDetailsComponent,
      },
    ],
  },
  { path: 'about', component: AboutComponent },
  { path: 'courses', component: CoursesComponent },
  { path: 'courses/:course', component: CoursesDetailComponent },
  /**-------------------------------------------------------------------
   * | Si yo intento ingresar a '' me va a redireccionar a /home
   * -------------------------------------------------------------------*/
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactComponent,
    AboutComponent,
    PageNotFoundComponent,
    CoursesComponent,
    CoursesDetailComponent,
    ContactInfoComponent,
  ],
  /**----------------------------------------------------------------------
   * | Aqui hacemos uso valido del enrutador principal que definimos antes
   * ---------------------------------------------------------------------*/
  imports: [BrowserModule, RouterModule.forRoot(router)],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
