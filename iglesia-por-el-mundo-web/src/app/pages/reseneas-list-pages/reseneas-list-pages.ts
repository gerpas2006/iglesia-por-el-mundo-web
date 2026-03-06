import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Resena } from '../../interface/reseneas.interface';
import { ReseneasService } from '../../service/reseneas.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-reseneas-list-pages',
  imports: [CommonModule, FormsModule],
  templateUrl: './reseneas-list-pages.html',
  styleUrl: './reseneas-list-pages.css',
})
export class ReseneasListPages implements OnInit{

  listaReseneas: Resena[] =[]
  mostrarToast: boolean = false
  textoBusqueda: string = ''
  calificacionFiltro: number = 0

  constructor(private serviceResenea:ReseneasService){}


  ngOnInit(): void {
    this.getReseneas()
  }

  getReseneas():void{
    this.serviceResenea.getReseneas().subscribe(resp =>{
      this.listaReseneas = resp
    })
  }

  deleteResenea(id:number):void{
    if (confirm('¿Seguro que quieres eliminar el evento?')) {
      this.serviceResenea.deleteResenea(id).subscribe(resp =>{
        this.mostrarToast = true
        setTimeout(() => window.location.reload(), 2000)
      })
    }
  }

  getReseneasFiltradas(){
    let reseneasFiltradas = this.listaReseneas

    // Filtrar por búsqueda de texto
    if(this.textoBusqueda.trim()){
      reseneasFiltradas = reseneasFiltradas.filter(r => 
        r.user.name.toLowerCase().includes(this.textoBusqueda.toLowerCase()) ||
        r.titulo_reseneas.toLowerCase().includes(this.textoBusqueda.toLowerCase()) ||
        r.comentario_resenea.toLowerCase().includes(this.textoBusqueda.toLowerCase())
      )
    }

    // Filtrar por calificación
    if(this.calificacionFiltro > 0){
      reseneasFiltradas = reseneasFiltradas.filter(r => r.calificacion_resenea == this.calificacionFiltro)
    }

    return reseneasFiltradas
  }

  mediaDeValoraciones(){
    if(this.listaReseneas.length === 0) return 0
    let suma = 0;
    this.listaReseneas.forEach(r => {
      suma+=r.calificacion_resenea
    })
    return (suma/this.listaReseneas.length).toFixed(1)
  }

}
