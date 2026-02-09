import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {UsuarioResponse } from '../interface/usuario.interface';
import { RegistroUsuario } from '../dto/registro.dto';

@Injectable({
  providedIn: 'root',
})
export class UsuarioService {
  
  URL_BASE = 'http://127.0.0.1:8000/api'

  constructor(private http:HttpClient){}

  getUsuarios():Observable<UsuarioResponse>{
    return this.http.get<UsuarioResponse>(`${this.URL_BASE}/usuarios`)
  }

  deleteUsuario(id:number):Observable<UsuarioResponse>{
    return this.http.delete<UsuarioResponse>(`${this.URL_BASE}/usuarios/${id}`)
  }

  updateUsuario(id:number, usuario:RegistroUsuario):Observable<UsuarioResponse>{
    return this.http.put<UsuarioResponse>(`${this.URL_BASE}/usuarios/${id}`, usuario)
  }
}
