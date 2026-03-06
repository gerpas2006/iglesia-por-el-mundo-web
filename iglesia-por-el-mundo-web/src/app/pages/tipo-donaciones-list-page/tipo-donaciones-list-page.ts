import { Component, OnInit } from '@angular/core';
import { TipoDonacion } from '../../interface/tipo-donacion.interface';
import { TipoDonacionService } from '../../service/tipo-donacion.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-tipo-donaciones-list-page',
  imports: [RouterLink],
  templateUrl: './tipo-donaciones-list-page.html',
  styleUrl: './tipo-donaciones-list-page.css',
})
export class TipoDonacionesListPage implements OnInit{


  listaTiposDonaciones: TipoDonacion[]=[]
  mostrarToast: boolean = false

  constructor(private serviceTipoDonacion:TipoDonacionService){}

  ngOnInit(): void {
    this.getTipoDonaciones()
  }

  getTipoDonaciones():void{
    this.serviceTipoDonacion.getTipoDonacion().subscribe(resp=>{
      this.listaTiposDonaciones = resp
    })
  }

  buscarTipoDonaciones(nombre:String){
    return this.listaTiposDonaciones.filter(d => d.nombre_donacion.toLocaleLowerCase().includes(nombre.toLocaleLowerCase()))
  }

  deleteTipoDonaciones(id:number):void{
    if (confirm('¿Seguro que quieres eliminar el evento?')) {
      this.serviceTipoDonacion.deleteDonacion(id).subscribe(resp =>{
        this.mostrarToast = true
        setTimeout(() => window.location.reload(), 2000)
      })
    }
  }



}
