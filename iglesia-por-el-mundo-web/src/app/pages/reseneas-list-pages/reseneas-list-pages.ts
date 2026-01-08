import { Component, OnInit } from '@angular/core';
import { Resena } from '../../interface/reseneas.interface';
import { ReseneasService } from '../../service/reseneas.service';
  import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-reseneas-list-pages',
  imports: [FormsModule],
  templateUrl: './reseneas-list-pages.html',
  styleUrl: './reseneas-list-pages.css',
})
export class ReseneasListPages implements OnInit{

  listaReseneas: Resena[] =[]

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
    this.serviceResenea.deleteResenea(id).subscribe(resp =>{
      alert("Eliminado Correctamente")
      window.location.reload();
    },
    error =>{
        alert("Algo ha salido mal, intentalo mas tarde")
    }
  )
  }

  buscarReseneas(nombre:string){
    return this.listaReseneas.filter(r => r.usuario.toLowerCase().includes(nombre.toLowerCase()))
  }

  filtarPorValoracion(numero:number){
    return this.listaReseneas.filter(r => r.calificacion_resenea == numero)
  }

  mediaDeValoraciones(){
    let suma = 0;
    this.listaReseneas.forEach(r => {
      suma+=r.calificacion_resenea
    })
    return suma/this.listaReseneas.length
  }

}
