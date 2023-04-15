import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable, ViewChild } from '@angular/core';
import { TitleStrategy } from '@angular/router';
import { Observable } from 'rxjs';
import { Country } from '../interfaces/pais.interface';


@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private apiUrl: string = 'https://restcountries.com/v2';

  get httpParams(){
    return new HttpParams().set('fields','name,capital,alpha2Code,flag,population');
  }
//https://restcountries.com/v2/capital/lima
  //private apiUrl: string = https://restcountries.com/v3.1;

  constructor(private http:HttpClient) { }

  public buscarPais(termino:string):Observable<Country[]>{

  const url =  `${this.apiUrl}/name/${termino}`;

    return this.http.get<Country[]>(url,{params:this.httpParams});
  }
  public buscarPorCapital(termino:string):Observable<Country[]>{

    const url =  `${this.apiUrl}/capital/${termino}`;

    return this.http.get<Country[]>(url,{params:this.httpParams});

  }

  public getPaisPorCodigo(id:string):Observable<Country>{

    const url =  `${this.apiUrl}/alpha/${id}`;

    return this.http.get<Country>(url);

  }
  public buscarRegion(region:string):Observable<Country[]>{



    const url =  `${this.apiUrl}/regionalbloc/${region}`;

    return this.http.get<Country[]>(url,{params:this.httpParams});

  }

}
