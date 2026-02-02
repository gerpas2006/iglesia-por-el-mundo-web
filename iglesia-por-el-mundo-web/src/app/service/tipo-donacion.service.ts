import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TipoDonacionDto } from '../dto/tipoDonacion.dto';
import { Observable } from 'rxjs';
import { TipoDonacionResponse } from '../interface/tipo-donacion.interface';

@Injectable({
  providedIn: 'root',
})
export class TipoDonacionService {

  URL_BASE = 'http://127.0.0.1:8000/api'

  constructor(private http: HttpClient) { }

  crearTipoDonacion(TipoDonacion:TipoDonacionDto):Observable<TipoDonacionResponse>{
    return this.http.post<TipoDonacionResponse>(`${this.URL_BASE}/tipoDonaciones`,TipoDonacion)
  }

  getTipoDonacion():Observable<TipoDonacionResponse>{
    return this.http.get<TipoDonacionResponse>(`${this.URL_BASE}/tipoDonaciones`)
  }

  deleteDonacion(id:number):Observable<TipoDonacionResponse>{
    return this.http.delete<TipoDonacionResponse>(`${this.URL_BASE}/tipoDonaciones/${id}`)
  }

  updateTipoDonacion(TipoDonacion:TipoDonacionDto, id:number):Observable<TipoDonacionResponse>{
    return this.http.put<TipoDonacionResponse>(`${this.URL_BASE}/tipoDonaciones/${id}`,TipoDonacion)
  }

}
