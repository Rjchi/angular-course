/**-----------------------------------------
 * | Este modulo es solo para las rutas
 * -----------------------------------------*/

import { NgModule } from '@angular/core';
/**-----------------------------------------------------------------------
 * | Este modulo contiene condicionales, bucles etc que no necesitamos
 * | Para este modulo, osea que lo podemos eliminar si queremos
 * -----------------------------------------------------------------------*/
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

const router: Routes = [
  /**----------------------------------------------------------------------------
   * | Hacemos uso de 'lazy loading': Con esto cargamos un modulo en especifico
   * | Si el usuario intenta acceder a una ruta en especifico
   *----------------------------------------------------------------------------*/
  {
    path: '',
    loadChildren: () =>
      import('./welcome/welcome.module').then((modulo) => modulo.WelcomeModule),
  },
  /**-----------------------------------------------------
   * | Arriba y abajo lo que estamos haciendo es importar el
   * | modulo y incluirlo en este modulo principal
   *-----------------------------------------------------*/
  {
    path: 'courses',
    loadChildren: () =>
      import('./courses/courses.module').then((m) => m.CoursesModule),
  },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(router)],
  /**-------------------------------------------------
   * | Indicamos que queremos exportar las routes
   * -------------------------------------------------*/
  exports: [RouterModule],
})
export class AppRoutingModule {}
