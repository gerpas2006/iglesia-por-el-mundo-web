import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Usuario } from '../../interface/usuario.interface';
import { LoginService } from '../../service/login.service';

@Component({
  selector: 'app-usuarios-list-pages',
  imports: [CommonModule],
  templateUrl: './usuarios-list-pages.html',
  styleUrl: './usuarios-list-pages.css',
})
export class UsuariosListPages implements OnInit{

  listaUsuarios:Usuario[] = []

  constructor(private serviceUsuario:LoginService){}

  ngOnInit(): void {
    this.listarUsuarios()
  }

  listarUsuarios():void{
    this.serviceUsuario.listarUsuarios().subscribe(resp => {
      this.listaUsuarios = resp.usuarios
    })
  }
}