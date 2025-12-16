import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Evento, EventosResponse } from '../interface/eventos.interface';

@Injectable({
  providedIn: 'root',
})
export class EventosService {

  URL_BASE = 'http://127.0.0.1:8000/api'

  constructor(private http:HttpClient){}

  getEventos(): Observable<EventosResponse>{
   return this.http.get<EventosResponse>(`${this.URL_BASE}/eventos`)
  }

  removeEventos(id:number): Observable<EventosResponse>{
    return this.http.delete<EventosResponse>(`${this.URL_BASE}/eventos/${id}`)
  }
  
  crearEvento(evento:Evento): Observable<EventosResponse>{
    return this.http.post<EventosResponse>(`${this.URL_BASE}/eventos`,evento)
  }

}
