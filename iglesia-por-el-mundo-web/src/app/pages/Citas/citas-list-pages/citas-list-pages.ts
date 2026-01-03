import { Component, OnInit } from '@angular/core';
import { Cita, CitaResponse } from '../../../interface/citas.interface';
import { CitasService } from '../../../service/citas.service';
import { Route, Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-citas-list-pages',
  imports: [RouterLink],
  templateUrl: './citas-list-pages.html',
  styleUrl: './citas-list-pages.css',
})
export class CitasListPages implements OnInit {


  listaCitas: Cita[] = []

  constructor(private serviceCitas: CitasService) { }

  ngOnInit(): void {
    this.getCitas();
  }

  getCitas(): void {
    this.serviceCitas.getCitas().subscribe(resp => {
      this.listaCitas = resp;
    })
  }

  deleteCita(id: number): void {
    this.serviceCitas.deleteCitas(id).subscribe(resp => {
      alert("Eliminado Correctamente")
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

  filtarPorEstado(estado:string){
    return this.listaCitas.filter(c => c.estado.toLowerCase().includes(estado.toLowerCase()))
  }



}
