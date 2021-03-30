import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from 'rxjs/operators';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/searchRespPais';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styles: [
  ]
})
export class VerPaisComponent implements OnInit {

  pais!: Country;

  constructor(
    private activateRoute: ActivatedRoute,
    private paisServi: PaisService) { }

  ngOnInit(): void {

    // this.activateRoute.params
    // .subscribe(({id}) => {
      
    //   this.paisServi.GetPaisAlpha(id)
    //   .subscribe(pais => {

    //     console.info(pais);
    //   });
    // });
    

    //codigo anterior simplificado con RXJS
    this.activateRoute.params
    .pipe(
      //switchMap recibe el valor del observable anterior y retorna el que esta en el interior
      switchMap(({id}) => this.paisServi.GetPaisAlpha(id)),
      tap(console.log)
    )
    .subscribe(pais => {
      this.pais = pais
    });

  }

}
