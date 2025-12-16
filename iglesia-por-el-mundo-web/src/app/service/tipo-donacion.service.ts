import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TipoDonacion } from '../dto/tipoDonacion.dto';
import { Observable } from 'rxjs';
import { TipoDonacionResponse } from '../interface/tipo-donacion.interface';

@Injectable({
  providedIn: 'root',
})
export class TipoDonacionService {

  URL_BASE = 'http://127.0.0.1:8000/api'

  constructor(private http: HttpClient) { }

  crearTipoDonacion(TipoDonacion:TipoDonacion):Observable<TipoDonacionResponse>{
    return this.http.post<TipoDonacionResponse>(`${this.URL_BASE}/tipoDonaciones`,TipoDonacion)
  }

}
