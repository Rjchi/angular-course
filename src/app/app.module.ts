import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

/**-----------------------------------
 * |  Esto engloba todo un componente
 -----------------------------------*/
import { AppComponent } from './app.component';

/**-------------------------------------------------------------------------
 * |  Aqui registramos todos los componentes que forman parte de este modulo
 -------------------------------------------------------------------------*/
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
