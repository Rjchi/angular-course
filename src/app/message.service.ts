/**------------------------------------------------------------
 * | Esto es un servicio sirve para almacenar información
 * | Y contiene metodos que nos permiten acceder a esta
 * ------------------------------------------------------------*/

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MessageService {
  constructor() {}

  /**----------------------------------
   * | Definimos una nueva propiedad
   * ----------------------------------*/
  messages: string[] = [];

  add(message: string) {
    this.messages.push(message);
  }

}
