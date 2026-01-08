import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TipoOracionResponse } from '../interface/tipo-oraciones.interface';
import { TipoOracionDto } from '../dto/tipoOraciones.dto';

@Injectable({
  providedIn: 'root',
})
export class TipoOracionesService {

  constructor(private http:HttpClient){}

  URL_BASE = 'http://127.0.0.1:8000/api'


  getTipoOraciones():Observable<TipoOracionResponse>{
    return this.http.get<TipoOracionResponse>(`${this.URL_BASE}/tipoOracion`)
  }

  deleteTipoOracion(id:number):Observable<TipoOracionResponse>{
    return this.http.delete<TipoOracionResponse>(`${this.URL_BASE}/tipoOracion/${id}`)
  }

  crearTipoOracion(TipoOracion:TipoOracionDto):Observable<TipoOracionResponse>{
    return this.http.post<TipoOracionResponse>(`${this.URL_BASE}/tipoOracion`,TipoOracion)
  }
  
}
