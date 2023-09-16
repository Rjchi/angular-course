/**-----------------------------------------------------------------------------------
 * |  Input nos permite leer las propiedades que se estan pasando a este componente
 -----------------------------------------------------------------------------------*/
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-children',
  templateUrl: './children.component.html',
  styleUrls: ['./children.component.css']
})
export class ChildrenComponent {

  /**------------------------------------------------------------
   * |  Debemos especificar cual es el parametro que esperamos
   ------------------------------------------------------------*/
  @Input() title?: string;
}
