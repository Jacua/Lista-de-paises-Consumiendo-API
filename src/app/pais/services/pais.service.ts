import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Country } from '../interfaces/searchRespPais';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private apiUrl: string= 'https://restcountries.eu/rest/v2';



  constructor( private _htttp: HttpClient) { }

  buscarPais(termino: string): Observable<Country[]>{

    const url = `${this.apiUrl}/name/${termino}`;

    
    return this._htttp.get<Country[]>(url);

  }
}
