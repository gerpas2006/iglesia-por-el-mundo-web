import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TipoEvento } from '../dto/tipoEvento.dto';
import { Observable } from 'rxjs';
import { TipoEventoResponse } from '../interface/tipo-evento.interface';

@Injectable({
  providedIn: 'root',
})
export class TipoEventoService {

  URL_BASE = 'http://127.0.0.1:8000/api'

  constructor(private http: HttpClient) { }

  crearTipoEvento(tipoEvento: TipoEvento): Observable<TipoEventoResponse> {
    return this.http.post<TipoEventoResponse>(`${this.URL_BASE}/tipoEvento`, tipoEvento)
  }

  getTipoEventos(): Observable<TipoEventoResponse> {
    return this.http.get<TipoEventoResponse>(`${this.URL_BASE}/tipoEvento`)
  }


}
