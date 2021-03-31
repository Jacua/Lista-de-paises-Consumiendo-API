import { HttpClient, HttpParams } from '@angular/common/http';
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

  buscarCapital(termino: string): Observable<Country[]>{

    const url = `${this.apiUrl}/capital/${termino}`;

    
    return this._htttp.get<Country[]>(url);

  }

  GetPaisAlpha(termino: string): Observable<Country>{

    const url = `${this.apiUrl}/alpha/${termino}`;

    return this._htttp.get<Country>(url);

  }

  GetPorRegion(termino: string): Observable<Country []>{

    const params = new HttpParams()

    .set('fields','name;capital;alpha2Code;flag;population');

    const url = `${this.apiUrl}/region/${termino}`;

    return this._htttp.get<Country []>(url,{params});

  }
}
