/**--------------------------------------
 * |  Formulario basado en plantillas
 --------------------------------------*/

import { Component } from '@angular/core';

@Component({
  selector: 'app-form-bas-plant',
  templateUrl: './form-bas-plant.component.html',
  styleUrls: ['./form-bas-plant.component.css'],
})
export class FormBasPlantComponent {
  persona: { nombre: string; edad: string } = {
    nombre: '',
    edad: '',
  };

  metodoProcesador() {
    console.log(this.persona)
  }
}
