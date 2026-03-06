import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TipoOracion } from '../../interface/tipo-oraciones.interface';
import { TipoOracionesService } from '../../service/tipo-oraciones.service';

@Component({
  selector: 'app-tipo-oraciones-list-pages',
  imports: [RouterLink],
  templateUrl: './tipo-oraciones-list-pages.html',
  styleUrl: './tipo-oraciones-list-pages.css',
})
export class TipoOracionesListPages implements OnInit{

  listaTipoOraciones:TipoOracion[]=[]
  mostrarToast: boolean = false

  constructor(private serviceTipoOracion:TipoOracionesService){}

  ngOnInit(): void {
    this.getTipoOraciones()
  }

  getTipoOraciones():void{
    this.serviceTipoOracion.getTipoOraciones().subscribe(resp =>{
      this.listaTipoOraciones= resp
    })
  }

  deleteTipoOracion(id:number):void{
        if (confirm('¿Seguro que quieres eliminar el evento?')) {
    this.serviceTipoOracion.deleteTipoOracion(id).subscribe(resp =>{
      this.mostrarToast = true
      setTimeout(() => window.location.reload(), 2000)
    }, 
    error =>{
      alert("Algo ha salido mal intentalo más tarde")
    }
  )
  }
}

  buscarTipoOracion(nombre:string){
    return this.listaTipoOraciones.filter(o => o.nombre_oracion.toLowerCase().includes(nombre.toLowerCase()))
  }

  

}
