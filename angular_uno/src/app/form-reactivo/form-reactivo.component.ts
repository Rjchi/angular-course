/**--------------------------
 * |  Formulario Reactivo
---------------------------*/
import { Component } from '@angular/core';

/**---------------------------------------------------------------------
* |  Validators nos permite agregar reglas de validacion al formulario
---------------------------------------------------------------------*/
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-form-reactivo',
  templateUrl: './form-reactivo.component.html',
  styleUrls: ['./form-reactivo.component.css'],
})
export class FormReactivoComponent {
  constructor(private fb: FormBuilder) {}

  /**--------------------------------
   * |  Asi accedemos a los inputs
   --------------------------------*/
  get name() {
    return this.formUser.get('name') as FormControl;
  }

  get email() {
    return this.formUser.get('email') as FormControl;
  }

  /**----------------------------------------------------------
   * | Creamos un nuevo formGroup de una forma mas abreviada
  ----------------------------------------------------------*/
  formUser = this.fb.group({
    'name': ['', Validators.required],
    'email': ['', [Validators.required, Validators.email]],
  });

  Procesar = () => {
    console.log(this.formUser.value);
  };

  /**--------------------------------------------------------
   * |  Asi podemos acceder al estado de nuestro formulario
   --------------------------------------------------------*/
  // formUser = new FormGroup({
  //   name: new FormControl('', Validators.required),
  //   email: new FormControl('', [Validators.required, Validators.email]),
  // });

  /**---------------------------------------------------------------------
   * |  Este va ha ser el estado inicial de los campos del formulario
   ---------------------------------------------------------------------*/
  /*name = new FormControl('', Validators.required);
  email = new FormControl('', [Validators.required, Validators.email]);*/
}
