import { Component } from '@angular/core';
import { Country } from '../../interfaces/searchRespPais';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [
  ]
})
export class PorPaisComponent  {

  termino: string = '';
  hayError: boolean = false;
  paises: Country[] = [];

  

  constructor(private paisServi:PaisService){}

  buscar(termino: string){
    
    this.hayError = false
    this.termino = termino


    this.paisServi.buscarPais(termino)
    .subscribe(resp =>{

      this.paises = resp;

      console.log(resp);
      
    },(err) => {

      this.hayError = true;
      this.paises = [];
      console.error(err);
    });

  }

  sugerencias(termino: string){
    this.hayError = false;
    //TODO: crear sugerencia
  }
  
}
