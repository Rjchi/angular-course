import { Component } from '@angular/core';
/**------------------------------------------------
 * | Importamos el servicio que queremos inyectar
 * ------------------------------------------------*/
import { MessageService } from '../message.service';

@Component({
  selector: 'app-add-messages',
  templateUrl: './add-messages.component.html',
  styleUrls: ['./add-messages.component.css']
})
export class AddMessagesComponent {

  /**-----------------------------------------------------
   * | Para poder inyectar un servicio hacemos esto:
   * -----------------------------------------------------*/
  constructor(public messagesService: MessageService){}

  message: string = '';

  addMessage() {
    /**------------------------------------------------
     * | Accedemos al servicio para agregar el valor
     * | que esta digitando el usuario
     * ------------------------------------------------*/
    this.messagesService.add(this.message);
    this.message = '';
  }
}
