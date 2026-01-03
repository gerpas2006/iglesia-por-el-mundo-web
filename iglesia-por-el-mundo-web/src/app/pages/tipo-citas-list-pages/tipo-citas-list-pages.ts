import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { TipoCita } from '../../interface/tipo-citas.interface';
import { TipoCitasService } from '../../service/tipo-citas.service';

@Component({
  selector: 'app-tipo-citas-list-pages',
  imports: [CommonModule, RouterLink],
  templateUrl: './tipo-citas-list-pages.html',
  styleUrl: './tipo-citas-list-pages.css',
})
export class TipoCitasListPages implements OnInit{

  listaTipoCitas: TipoCita[]=[]

  constructor(private serviceTipoCitas: TipoCitasService){}

  ngOnInit(): void {
    this.getTipoCitas()
  }

  getTipoCitas():void{
    this.serviceTipoCitas.getTipoCitas().subscribe(resp =>{
      this.listaTipoCitas = resp
    })
  }

  deleteTipoCita(id:number):void{
    this.serviceTipoCitas.deleteTipoCitas(id).subscribe(resp =>{
      alert("Eliminado Correctamente")
    },
    error => {
      alert("Algo ha salido mal, intentalo más tarde")
    }
  )
  }

  buscarTipoCita(nombre:string){
    return this.listaTipoCitas.filter(t => t.nombre_cita.toLowerCase().includes(nombre.toLowerCase()))
  }

}
