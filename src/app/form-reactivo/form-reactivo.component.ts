/**--------------------------
 * |  Formulario Reactivo
---------------------------*/
import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-form-reactivo',
  templateUrl: './form-reactivo.component.html',
  styleUrls: ['./form-reactivo.component.css']
})
export class FormReactivoComponent {
  /**---------------------------------------------------------------------
   * |  Este va ha ser el estado inicial de los campos del formulario
   ---------------------------------------------------------------------*/
  name = new FormControl('');
  email = new FormControl('');
}
