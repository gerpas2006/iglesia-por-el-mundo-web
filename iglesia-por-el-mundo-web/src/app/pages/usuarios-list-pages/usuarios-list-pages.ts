import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Usuario } from '../../interface/usuario.interface';
import { UsuarioService } from '../../service/usuario.service';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-usuarios-list-pages',
  imports: [CommonModule, RouterLink],
  templateUrl: './usuarios-list-pages.html',
  styleUrl: './usuarios-list-pages.css',
})
export class UsuariosListPages implements OnInit {

  listaUsuarios: Usuario[] = []
  mostrarToast: boolean = false

  constructor(private serviceUsuario: UsuarioService) { }

  ngOnInit(): void {
    this.listarUsuarios()
  }

  listarUsuarios(): void {
    this.serviceUsuario.getUsuarios().subscribe(resp => {
      this.listaUsuarios = resp
    })
  }

  deleteUsuario(id: number): void {
        if (confirm('¿Seguro que quieres eliminar el evento?')) {
    this.serviceUsuario.deleteUsuario(id).subscribe(resp => {
      this.mostrarToast = true
      setTimeout(() => window.location.reload(), 2000)
    },
      error => {
        alert("Algo ha salido mal,intentelo mas tarde")
      })
  }
}

  contarAdmin(): number {
    let resul = 0
    this.listaUsuarios.forEach(u => {
      if (u.role == 'admin') {
        resul += 1
      }
    })
    return resul
  }

  contarUsuarios(): number {
    let resul = 0
    this.listaUsuarios.forEach(u => {
      if (u.role == 'user') {
        resul += 1
      }
    })
    return resul
  }
}