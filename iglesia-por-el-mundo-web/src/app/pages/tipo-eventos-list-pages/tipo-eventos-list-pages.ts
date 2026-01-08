import { Component, OnInit } from '@angular/core';
import { TipoEventoService } from '../../service/tipo-evento.service';
import { TipoEventoDto } from '../../dto/tipoEvento.dto';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-tipo-eventos-list-pages',
  imports: [RouterLink],
  templateUrl: './tipo-eventos-list-pages.html',
  styleUrl: './tipo-eventos-list-pages.css',
})
export class TipoEventosListPages implements OnInit {

  listaTipoEventos: TipoEventoDto[] = []

  constructor(private serviceTipoEvento: TipoEventoService) { }

  ngOnInit(): void {
    this.getTipoEventos()
  }

  getTipoEventos(): void {
    this.serviceTipoEvento.getTipoEventos().subscribe(resp => {
      this.listaTipoEventos = resp
    })
  }

  buscarTipoEvento(nombre: string) {
    return this.listaTipoEventos.filter(t => t.nombre_evento.toLowerCase().includes(nombre.toLowerCase()) )
  }

  deleteTipoEventos(id:number){
    return this.serviceTipoEvento.deleteTipoEvento(id).subscribe(resp =>{
      alert("Eliminado Correcatamente")
      window.location.reload();
    },
    error =>{
      alert("Algo a salido mal, intentalo más tarde")
    }
  )
  }



}
