import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

/**-----------------------------------
 * |  Esto engloba todo un componente
 -----------------------------------*/
import { AppComponent } from './app.component';
import { ContadorComponent } from "./contador/contador.component";
import { ComponentCliExampleComponent } from './component-cli-example/component-cli-example.component'

/**-------------------------------------------------------------------------
 * |  Aqui registramos todos los componentes que forman parte de este modulo
 -------------------------------------------------------------------------*/
@NgModule({
  declarations: [
    AppComponent,
    ContadorComponent,
    ComponentCliExampleComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
