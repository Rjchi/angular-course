/**--------------------------
 * |  Formulario Reactivo
---------------------------*/
import { Component } from '@angular/core';

/**---------------------------------------------------------------------
* |  Validators nos permite agregar reglas de validacion al formulario
---------------------------------------------------------------------*/
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-reactivo',
  templateUrl: './form-reactivo.component.html',
  styleUrls: ['./form-reactivo.component.css'],
})
export class FormReactivoComponent {
  /**--------------------------------
   * |  Asi accedemos a los inputs
   --------------------------------*/
  get name() {
    return this.formUser.get('name') as FormControl;
  }

  get email() {
    return this.formUser.get('email') as FormControl;
  }

  /**--------------------------------------------------------
   * |  Asi podemos acceder al estado de nuestro formulario
   --------------------------------------------------------*/
  formUser = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
  });

  Procesar = () => {
    console.log(this.formUser.value);
  };









  /**---------------------------------------------------------------------
   * |  Este va ha ser el estado inicial de los campos del formulario
   ---------------------------------------------------------------------*/
  /*name = new FormControl('', Validators.required);
  email = new FormControl('', [Validators.required, Validators.email]);*/
}
