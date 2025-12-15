import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Donacion, DonacionResponse } from '../interface/donaciones.interface';

@Injectable({
  providedIn: 'root',
})
export class DonacionesService {

  URL_BASE = 'http://127.0.0.1:8000/api'

  constructor(private http:HttpClient){}

  getDonaciones(): Observable<DonacionResponse>{
    return this.http.get<DonacionResponse>(`${this.URL_BASE}/donaciones`)
  }

  removeDonacion(id:number):Observable<void>{
    return this.http.delete<void>(`${this.URL_BASE}/donaciones/${id}`)
  }
  
}
