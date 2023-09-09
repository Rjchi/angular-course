/**-------------------------------------------------
 * |  Este componente puede ser llamado
 * |  dentro de otro componente
 -------------------------------------------------*/
import { Component } from '@angular/core';

@Component({
  selector: 'app-contador',
  templateUrl: './contador.component.html',

  /**-------------------------------------------------
   * | Los estilos van dentro de un arreglo
   * |  porque podemos linkear mas de un
   * |  archivo de estos
   -------------------------------------------------*/
  styleUrls: ['./contador.component.css'],
})

/**-------------------------------------------------
 * |  Aqui va toda la logica de este componente
 -------------------------------------------------*/
export class ContadorComponent {}
