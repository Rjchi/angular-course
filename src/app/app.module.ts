import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

/**-----------------------------------
 * |  Esto engloba todo un componente
 -----------------------------------*/
import { AppComponent } from './app.component';
import { ContadorComponent } from "./contador/contador.component";
import { ComponentCliExampleComponent } from './component-cli-example/component-cli-example.component';
import { BotonesComponent } from './botones/botones.component';
import { BotonesPropiedadesComponent } from './botones-propiedades/botones-propiedades.component';
import { FormularioComponent } from './formulario/formulario.component'

/**-------------------------------------------------------------------------
 * |  Aqui registramos todos los componentes que forman parte de este modulo
 -------------------------------------------------------------------------*/
@NgModule({
  declarations: [
    AppComponent,
    ContadorComponent,
    ComponentCliExampleComponent,
    BotonesComponent,
    BotonesPropiedadesComponent,
    FormularioComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
