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
      alert("Eliminado correctamente")
    },
    error =>{
      alert("Algo ha salido mal, intentalo más tarde")
    }
  )
  }

  buscarOracion(nombre:string){
    return this.listaOraciones.filter(o => o.nombre_oracion.toLowerCase().includes(nombre.toLowerCase()))
  }

}
