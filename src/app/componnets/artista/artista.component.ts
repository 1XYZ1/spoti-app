import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styles: []
})
export class ArtistaComponent  {

  artista: any = {};
  topTracks: any[] = [];
  loading: boolean;



  constructor(private spotify: SpotifyService, private router: ActivatedRoute ) {
  this.loading = true;
  this.router.params.subscribe(params => {

    this.getArtista(params.id);
    this.getTopTracks(params.id);

  });

  }

getArtista( id: string) {
  this.loading = true;

  this.spotify.getArtista(id)
  .subscribe(artista => {
    console.log(artista);
    this.artista = artista;


  });
}

getTopTracks( id: string) {

  this.spotify.getTopTracks(id)
  .subscribe(topTracks => {
    console.log(topTracks);
    this.topTracks = topTracks;
    setTimeout(() => {
      this.loading = false;
    }, 1000);


  });
}



}
