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
  paisesSugerencia: Country[] = [];
  mostrarSugerencia: boolean = false;

  

  constructor(private paisServi:PaisService){}

  buscar(termino: string){
    
    this.hayError = false
    this.termino = termino
    this.mostrarSugerencia = false;


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
    this.termino = termino
    this.mostrarSugerencia = true ;

    this.paisServi.buscarPais(termino)
    .subscribe(paises =>{
      this.paisesSugerencia = paises.slice(0,5);
    }, error => {
      console.log(error);
      this.paisesSugerencia = [];
    });
    //TODO: crear sugerencia
  }

  buscarSugerido(termino: string){

    this.buscar(termino);

  }
  
}
