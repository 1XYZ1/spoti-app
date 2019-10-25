import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

// HTTP
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './componnets/home/home.component';
import { SearchComponent } from './componnets/search/search.component';
import { ArtistaComponent } from './componnets/artista/artista.component';
import { NavbarComponent } from './shared/navbar/navbar.component';

// SERVICES


// PIPES
import { NoImagePipe } from './pipes/no-image.pipe';



// IMPORT ROUTES
import { ROUTES } from './app.routes';
import { TarjetasComponent } from './componnets/tarjetas/tarjetas.component';
import { LoadingComponent } from './shared/loading/loading.component';
import { DomseguroPipe } from './pipes/domseguro.pipe';







@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchComponent,
    ArtistaComponent,
    NavbarComponent,
    NoImagePipe,
    TarjetasComponent,
    LoadingComponent,
    DomseguroPipe


  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(ROUTES, {useHash: true})
  ],
  exports: [ RouterModule ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
