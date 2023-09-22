/**----------------------------------------------------------------------
 * | Dentro del modulo compartido vamos a poner todos
 * | Los componentes que son reutilizables(comunes a toda la pagina)
 *----------------------------------------------------------------------*/

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FooterComponent } from './components/footer/footer.component';
import { NavigationComponent } from './components/navigation/navigation.component';

/**-------------------------------------------------------------------------
 * | Esto es para poder utilizar atributos como routerLink desde el html
 -------------------------------------------------------------------------*/
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [NavigationComponent, FooterComponent],
  imports: [CommonModule, RouterModule],
  /**----------------------------------------------------------------------------
   * | Indicamos que modulos queremos que sean accedidos desde otros
   * | Modulos diferentes
   * ----------------------------------------------------------------------------*/
  exports: [NavigationComponent, FooterComponent],
})
export class SharedModule {}
