import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent {
  artistas: any[] = [];
  loading: boolean;
  error: boolean;


  constructor( private spotify: SpotifyService) {
    this.error = false;

  }

  buscar(termino: string ) {
this.error = false;
this.loading = true;
console.log(termino);
this.spotify.getArtistas( termino ).subscribe( (data: any) => {

  this.artistas = data;
  this.loading = false;
  console.log(data);
}, (errorServicio) => {
  this.error = true;
  this.loading = false;
});
  }



}
