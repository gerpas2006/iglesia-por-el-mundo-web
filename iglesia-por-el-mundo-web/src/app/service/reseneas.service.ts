import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ResenaResponse } from '../interface/reseneas.interface';

@Injectable({
  providedIn: 'root',
})
export class ReseneasService {

  URL_BASE = 'http://127.0.0.1:8000/api'

  constructor(private http:HttpClient){}

  getReseneas():Observable<ResenaResponse>{
    return this.http.get<ResenaResponse>(`${this.URL_BASE}/reseneas`)
  }

  deleteResenea(id:number):Observable<ResenaResponse>{
    return this.http.delete<ResenaResponse>(`${this.URL_BASE}/reseneas/${id}`)
  }
  
}
