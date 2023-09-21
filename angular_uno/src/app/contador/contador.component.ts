/**-------------------------------------------------
 * |  Este componente puede ser llamado
 * |  dentro de otro componente
 -------------------------------------------------*/
import { Component, OnInit } from '@angular/core';
import { Persona } from '../persona';

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
export class ContadorComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  persona: Persona = { nombre: 'Richi', edad: 40 };

  numero: number = 1;

  decremento() {
    this.numero--;
  }

  incremento() {
    this.numero++;
  }
}
