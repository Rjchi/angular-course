import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css'],
})
export class FormularioComponent implements OnInit {

  openAlert: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  Consola(value:any) {
    if (value) {
      console.log('Hola', value, value.length);
      this.openAlert = !this.openAlert;

      setTimeout(() => {
        this.openAlert = !this.openAlert;
      }, 2000)
    }
  }
}
