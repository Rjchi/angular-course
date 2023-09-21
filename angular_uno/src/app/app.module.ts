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
import { FormularioComponent } from './formulario/formulario.component';
import { BuclesComponent } from './bucles/bucles.component';
import { SwitchComponent } from './switch/switch.component';
import { FormBasPlantComponent } from './form-bas-plant/form-bas-plant.component';

/**----------------------------------------------------------------------
 * |  Esto es para trabajar con formularios basados en plantillas
 ----------------------------------------------------------------------*/
import { FormsModule } from "@angular/forms";

/**----------------------------------------------------------------------
 * |  Esto es para trabajar con formularios reactivos
 ----------------------------------------------------------------------*/
import { ReactiveFormsModule } from '@angular/forms';

import { FormReactivoComponent } from './form-reactivo/form-reactivo.component';
import { ChildrenComponent } from './children/children.component';
import { AddMessagesComponent } from './add-messages/add-messages.component';
import { ListMessagesComponent } from './list-messages/list-messages.component';

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
    BuclesComponent,
    SwitchComponent,
    FormBasPlantComponent,
    FormReactivoComponent,
    ChildrenComponent,
    AddMessagesComponent,
    ListMessagesComponent,
  ],
  /**--------------------------------------------------------------------
   * |  Si tenemos configuraciones adicionales que se hallan
   * |  Incluido en un modulo aparte se debe poner aquí.
   --------------------------------------------------------------------*/
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
