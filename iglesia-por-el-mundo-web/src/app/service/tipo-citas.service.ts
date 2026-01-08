import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TipoCitaResponse } from '../interface/tipo-citas.interface';
import { TipoCitaDto } from '../dto/tipoCitas.dto';

@Injectable({
  providedIn: 'root',
})
export class TipoCitasService {

    URL_BASE = 'http://127.0.0.1:8000/api'

    constructor(private http:HttpClient){}

    getTipoCitas():Observable<TipoCitaResponse>{
      return this.http.get<TipoCitaResponse>(`${this.URL_BASE}/tipoCita`)
    }

    deleteTipoCitas(id:number): Observable<TipoCitaResponse>{
      return this.http.delete<TipoCitaResponse>(`${this.URL_BASE}/tipoCita/${id}`)
    }

    crearTipoCita(tipoCita:TipoCitaDto):Observable<TipoCitaResponse>{
      return this.http.post<TipoCitaResponse>(`${this.URL_BASE}/tipoCita`,tipoCita)
    }

    editarTipoCita(tipoCita:TipoCitaDto, id:number):Observable<TipoCitaResponse>{
      return this.http.put<TipoCitaResponse>(`${this.URL_BASE}/tipoCita/${id}`,tipoCita)
    }
  
}
