import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Cita, CitaResponse } from '../../interface/citas.interface';
import { CitasService } from '../../service/citas.service';
import { RouterLink } from '@angular/router';
import { TipoCitasService } from '../../service/tipo-citas.service';
import { TipoCita } from '../../interface/tipo-citas.interface';

@Component({
  selector: 'app-citas-list-pages',
  imports: [CommonModule, RouterLink],
  templateUrl: './citas-list-pages.html',
  styleUrl: './citas-list-pages.css',
})
export class CitasListPages implements OnInit {


  listaCitas: Cita[] = []
  listaTipoCitas: TipoCita[]=[]
  mostrarToast: boolean = false

  constructor(private serviceCitas: CitasService, private serviceTipoCitas:TipoCitasService) { }

  ngOnInit(): void {
    this.getTipoCitas()
    this.getCitas();
  }

  getTipoCitas():void{
    this.serviceTipoCitas.getTipoCitas().subscribe(resp =>{
      this.listaTipoCitas = resp
    })
  }

  getCitas(): void {
    this.serviceCitas.getCitas().subscribe(resp => {
      this.listaCitas = resp;
    })
  }

  deleteCita(id: number): void {
    this.serviceCitas.deleteCitas(id).subscribe(resp => {
      this.mostrarToast = true
      setTimeout(() => window.location.reload(), 2000)
    },
      error => {
        alert("Algo ha salido mal, intentalo más tarde")
      }
    )
  }

  contarCitasPendientes(): number {
    return this.listaCitas.filter(c => c.estado.toLowerCase() === 'pendiente').length;
  }

  contarCitasRechazadas(): number {
    return this.listaCitas.filter(c => c.estado.toLowerCase() === 'rechazada').length;
  }

  contarCitasAprobadas(): number {
    return this.listaCitas.filter(c => c.estado.toLowerCase() === 'aprobada').length;
  }

  buscarCita(nombre:string){
    return this.listaCitas.filter(c => c.nombre_solicitante.toLowerCase().includes(nombre.toLowerCase()))
  }

  filtrarPorEstado(estado:string){
    return this.listaCitas.filter(c => c.estado.toLowerCase().includes(estado.toLowerCase()))
  }

  filtrarPorTipoCita(id:string){
    return this.listaCitas.filter(c => c.tipo_cita_id.toString() === id)
  }



}
