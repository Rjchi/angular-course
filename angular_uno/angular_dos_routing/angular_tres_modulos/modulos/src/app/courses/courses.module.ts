import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoursesRoutingModule } from './courses-routing.module';
import { ListCoursesComponent } from './pages/list-courses/list-courses.component';

import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    /**-------------------------------------------------------------
     * | Este modulo se lista aqui gracias a que lo especificamos
     * | al momento de crearlo 'ng g c courses/ListCourses'
     * -------------------------------------------------------------*/
    ListCoursesComponent,
  ],
  imports: [CommonModule, CoursesRoutingModule, SharedModule],
})
export class CoursesModule {}
