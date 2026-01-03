import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cita, CitaResponse } from '../interface/citas.interface';

@Injectable({
  providedIn: 'root',
})
export class CitasService {

    URL_BASE = 'http://127.0.0.1:8000/api'

    constructor(private http: HttpClient){}

    getCitas():Observable<CitaResponse>{
      return this.http.get<CitaResponse>(`${this.URL_BASE}/citas`)
    }

    deleteCitas(id:number):Observable<CitaResponse>{
      return this.http.delete<CitaResponse>(`${this.URL_BASE}/citas/${id}`)
    }

  
}
