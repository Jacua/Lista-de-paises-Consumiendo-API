import { Component } from '@angular/core';
import { Country } from '../../interfaces/searchRespPais';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styles: [
  ]
})
export class PorCapitalComponent  {

  hayError: boolean = false;
  termino: string = '';
  paises: Country[] = [];

  /**
   *
   */
  constructor(private paisServ: PaisService) {
  
  }

  buscar(argumento: string){
    this.hayError= false;
    this.termino = argumento;
    this.paisServ.buscarCapital(argumento)
    .subscribe(value => {
      this.paises = value;
      console.log(value);
    }, error =>{
      this.hayError=true
      this.paises= [];
      console.log(error);
    });
  }
}
