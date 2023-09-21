import { Component } from '@angular/core';

@Component({
  selector: 'app-switch',
  templateUrl: './switch.component.html',
  styleUrls: ['./switch.component.css'],
})
export class SwitchComponent {
  /**--------------------------------------------------------------------
   * |  Con ? especificamos que inicialmente no va a tener ningun valor
   --------------------------------------------------------------------*/
  dia?: string;
}
