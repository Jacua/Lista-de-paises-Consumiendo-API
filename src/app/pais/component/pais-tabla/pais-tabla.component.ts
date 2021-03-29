import { Component, Input } from '@angular/core';
import { Country } from '../../interfaces/searchRespPais';

@Component({
  selector: 'app-pais-tabla',
  templateUrl: './pais-tabla.component.html',
  styles: [
  ]
})
export class PaisTablaComponent  {

  //variable paises que contendra el valor de paises que se le pase del componente padre
  @Input() paises: Country[] = [];


}
