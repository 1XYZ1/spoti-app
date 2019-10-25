import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) {
    console.log('Servicio Cargado!!');
  }

  getQuery( query: string) {
    const url = `https://api.spotify.com/v1/${query}`;

    const headers = new HttpHeaders({
      Authorization:
      'Bearer BQBSNL_6c1vinjZpdPOkYxJ_JYAquF4U9SxnvOoaM6b7v_ATKfoeGCWCvAJ4N1YKh3-L-pZ-jp-PPXoRz7A'
    });
    return this.http.get(url, {headers});
  }

  getNewReleases() {

// Cuando se tiene una funcion de flecha de 1 sola linea se puede asumir el return colocandolo directamente!!
return this.getQuery('browse/new-releases')
           .pipe( map((data: any) =>  data.albums.items
));



  }

getArtistas( termino: string) {

  return this.getQuery(`search?q=${ termino }&type=artist&limit=15`)
             .pipe(map((data: any) => data.artists.items
  ));

  // Implementacion del map para filtrar la data


}

getArtista( id: string) {

  return this.getQuery(`artists/${id}`);
  //            .pipe(map((data: any) => data.artists.items
  // ));


}

getTopTracks( id: string) {

  return this.getQuery(`artists/${id}/top-tracks?country=us`)
         .pipe(map((data: any) => data.tracks
  ));


}

}
