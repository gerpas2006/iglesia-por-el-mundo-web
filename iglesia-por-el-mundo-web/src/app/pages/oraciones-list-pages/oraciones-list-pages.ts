import { Component, OnInit } from '@angular/core';
import { RouterLink } from "@angular/router";
import { Oracion } from '../../interface/oraciones.interface';
import { OracionesService } from '../../service/oraciones.service';

@Component({
  selector: 'app-oraciones-list-pages',
  imports: [RouterLink],
  templateUrl: './oraciones-list-pages.html',
  styleUrl: './oraciones-list-pages.css',
})
export class OracionesListPages implements OnInit{

  listaOraciones:Oracion[]=[]
  mostrarToast: boolean = false

  constructor(private serviceOraciones:OracionesService){}


  ngOnInit(): void {
    this.getOraciones()
  }

  getOraciones():void{
    this.serviceOraciones.getOraciones().subscribe(resp =>{
      this.listaOraciones = resp;
    })
  }

  deleteOraciones(id:number):void{
    this.serviceOraciones.deleteOracion(id).subscribe(resp =>{
      this.mostrarToast = true
      setTimeout(() => window.location.reload(), 2000)
    },
    error =>{
      alert("Algo ha salido mal, intentalo más tarde")
    }
  )
  }

  buscarOracion(nombre:string){
    return this.listaOraciones.filter(o => o.nombre_oracion.toLowerCase().includes(nombre.toLowerCase()))
  }

  eventosPublicados(){
    let suma =0
    this.listaOraciones.forEach( o =>{
      if(o.estado){
        suma+=1
      }
    })
    return suma
  }

    eventosProgramados(){
    let suma =0
    this.listaOraciones.forEach( o =>{
      if(!o.estado){
        suma+=1
      }
    })
    return suma
  }

}
