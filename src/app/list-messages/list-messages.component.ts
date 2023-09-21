import { Component } from '@angular/core';
/**------------------------------------------------
 * | Importamos el servicio que queremos inyectar
 * ------------------------------------------------*/
import { MessageService } from '../message.service';

@Component({
  selector: 'app-list-messages',
  templateUrl: './list-messages.component.html',
  styleUrls: ['./list-messages.component.css']
})
export class ListMessagesComponent {
  constructor(public messagesService: MessageService) {}
}
