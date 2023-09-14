/**--------------------------
 * |  Formulario Reactivo
---------------------------*/
import { Component } from '@angular/core';

/**---------------------------------------------------------------------
* |  Validators nos permite agregar reglas de validacion al formulario
---------------------------------------------------------------------*/
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-reactivo',
  templateUrl: './form-reactivo.component.html',
  styleUrls: ['./form-reactivo.component.css']
})
export class FormReactivoComponent {
  /**---------------------------------------------------------------------
   * |  Este va ha ser el estado inicial de los campos del formulario
   ---------------------------------------------------------------------*/
  name = new FormControl('', Validators.required);
  email = new FormControl('', [Validators.required, Validators.email]);
}
