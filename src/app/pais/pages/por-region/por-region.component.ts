import { Component } from '@angular/core';
import { Country } from '../../interfaces/searchRespPais';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styles: [
    `button {margin-right:5px};`
  ]
})
export class PorRegionComponent  {

  regiones: string [] =  ['africa', 'americas', 'asia', 'europe', 'oceania'];

  regionActiva: string = "";

  paises: Country [] = [];

  getClaseCss(region: string){
    return (region === this.regionActiva) 
    ? 'btn btn-primary'
    : 'btn btn-outline-primary'
  }

  constructor(private readonly _paisServi: PaisService){

  }

  activarRegion(region: string){

    if(this.regionActiva === region){ return;}

    this.regionActiva = region;
    this.paises = []
    this.busquedaRegion(region);
  }

  busquedaRegion(region: string){

    this._paisServi.GetPorRegion(region)
    .subscribe(resp => {

      this.paises = resp
    },
    error =>{
      console.log(error);
    })

  }
  

  
}
