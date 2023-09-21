import { Component } from '@angular/core';
/**------------------------------------------------------------
 * | Nos permite tomar los parametro que llegan por la URL
 * ------------------------------------------------------------*/
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-courses-detail',
  templateUrl: './courses-detail.component.html',
  styleUrls: ['./courses-detail.component.css'],
})
export class CoursesDetailComponent {
  course: string = '';

  /**-----------------------------
   * | Injectamos la dependencia
   * ----------------------------*/
  constructor(private route: ActivatedRoute) {}

  /**-------------------------------------------------------------------
   * | Esto se ejecuta cuando el componente se haya inicializado
   * -------------------------------------------------------------------*/
  ngOnInit() {
    this.route.params.subscribe((params) => (this.course = params['course']));
  }
}
