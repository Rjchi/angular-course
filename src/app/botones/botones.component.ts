import { Component } from '@angular/core';

@Component({
  selector: 'app-botones',
  templateUrl: './botones.component.html',
  styleUrls: ['./botones.component.css'],
})
export class BotonesComponent {
  text_color: string = '';

  btn_disa: boolean = false;
}
