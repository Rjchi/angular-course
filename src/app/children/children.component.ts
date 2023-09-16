/**-----------------------------------------------------------------------------------
 * |  Input nos permite leer las propiedades que se estan pasando a este componente
 -----------------------------------------------------------------------------------*/
import { Component, Input } from '@angular/core';

/**----------------------------------------------------
  * |  Con esto podemos crear un evento personalizado
  * |   Y emitirlo con output
  ---------------------------------------------------*/
import { EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-children',
  templateUrl: './children.component.html',
  styleUrls: ['./children.component.css'],
})
export class ChildrenComponent {
  /**------------------------------------------------------------
   * |  Debemos especificar cual es el parametro que esperamos
   ------------------------------------------------------------*/
  @Input() title?: string;

  /**---------------------------------------------------------------
   * |  Creamos un nuevo evento y lo emitimos al componente padre
   ---------------------------------------------------------------*/
  @Output() titleChange = new EventEmitter<string>();

  /**-------------------------------------------------------------
   * |  Le indicamos cuando queremos que se dispare el evento
   -------------------------------------------------------------*/
  emitTitleChange() {
    this.titleChange.emit(this.title)
  }
}
