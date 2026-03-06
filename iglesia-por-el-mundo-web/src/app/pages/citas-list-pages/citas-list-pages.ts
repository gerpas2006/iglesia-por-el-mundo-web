import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Cita, CitaResponse } from '../../interface/citas.interface';
import { CitasService } from '../../service/citas.service';
import { RouterLink } from '@angular/router';
import { TipoCitasService } from '../../service/tipo-citas.service';
import { TipoCita } from '../../interface/tipo-citas.interface';
import { CitaDto } from '../../dto/cita.dto';

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

  constructor(private serviceCitas: CitasService, private serviceTipoCitas:TipoCitasService) {}

  cambiarEstadoCita(cita: Cita, nuevoEstado: string): void {
    const citaActualizada = new CitaDto(
      cita.nombre_solicitante,
      cita.apellido_solicitante,
      cita.fecha_y_hora_cita,
      cita.mensaje,
      nuevoEstado,
      cita.contacto,
      cita.tipo_cita_id
    );

    this.serviceCitas.updateCita(cita.id, citaActualizada).subscribe(
      resp => {
        this.getCitas();
      },
      error => {
        alert('Error al actualizar el estado de la cita');
      }
    );
  }

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
    if (confirm('¿Seguro que quieres eliminar el evento?')) {
      this.serviceCitas.deleteCitas(id).subscribe(resp => {
        this.mostrarToast = true
        setTimeout(() => window.location.reload(), 2000)
      })
    }
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
