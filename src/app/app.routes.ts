import { Routes } from '@angular/router';
import { HomeComponent } from './componnets/home/home.component';
import { SearchComponent } from './componnets/search/search.component';
import { ArtistaComponent } from './componnets/artista/artista.component';


export const ROUTES: Routes = [
    { path: 'home', component: HomeComponent},
    { path: 'search', component: SearchComponent},
    { path: 'artista/:id', component: ArtistaComponent},
    { path: '', pathMatch: 'full', redirectTo: 'home'},
    { path: '**', pathMatch: 'full', redirectTo: 'home'}

];
