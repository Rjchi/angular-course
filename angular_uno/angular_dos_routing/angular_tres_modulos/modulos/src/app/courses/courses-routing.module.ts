import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ListCoursesComponent } from './pages/list-courses/list-courses.component';

/**----------------------------------------------------------------------
 * | Esto es una ruta hija y lo que hace es heredar el path del padre
 * | En este caso el path del padre es '/courses'
 *----------------------------------------------------------------------*/
const routes: Routes = [{ path: '', component: ListCoursesComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CoursesRoutingModule {}
