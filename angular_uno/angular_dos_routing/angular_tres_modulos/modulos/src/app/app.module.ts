import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

/**------------------------------
 * | Este es el modulo de rutas
 * -----------------------------*/
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    /**------------------------------------
     * | Agregamos el modulo con las rutas
     * ----------------------------------*/
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
