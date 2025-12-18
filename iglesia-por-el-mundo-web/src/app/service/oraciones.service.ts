import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { OracionResponse } from '../interface/oraciones.interface';

@Injectable({
  providedIn: 'root',
})
export class OracionesService {

  URL_BASE = 'http://127.0.0.1:8000/api'


  constructor(private http: HttpClient) { }

  getOraciones(): Observable<OracionResponse> {
    return this.http.get<OracionResponse>(`${this.URL_BASE}/oraciones`)
  }

  deleteOracion(id:number):Observable<OracionResponse>{
    return this.http.delete<OracionResponse>(`${this.URL_BASE}/oraciones/${id}`)
  }

}
