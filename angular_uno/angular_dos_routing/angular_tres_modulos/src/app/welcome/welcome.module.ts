import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WelcomeRoutingModule } from './welcome-routing.module';
/**-----------------------------------------------------------------
 * | Ya no declaramos los componentes en el modulo principal
 * | Si no que lo hacemos en el modulo al que pertenece dicho
 * | Componente
 * -----------------------------------------------------------------*/
import { HomeComponent } from './pages/home/home.component';

/**--------------------------------------
 * | Hacemos uso del modulo compartido
 --------------------------------------*/
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [HomeComponent],
  imports: [CommonModule, WelcomeRoutingModule, SharedModule],
})
export class WelcomeModule {}
