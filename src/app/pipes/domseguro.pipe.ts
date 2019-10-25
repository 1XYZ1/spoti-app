import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer  } from '@angular/platform-browser';


@Pipe({
  name: 'domseguro'
})
export class DomseguroPipe implements PipeTransform {
// Modificacion del pipe creando una constante del url.
  constructor( private domSanitizer: DomSanitizer ) { }


  transform( value: string ): any {
    const url = 'https://open.spotify.com/embed/track/';
    return this.domSanitizer.bypassSecurityTrustResourceUrl( url + value );
  }

}
