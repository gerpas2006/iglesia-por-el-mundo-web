import { Component } from '@angular/core';
import { RouterLink } from "@angular/router";
import { EventosService } from '../../service/eventos.service';
import { Evento } from '../../interface/eventos.interface';


@Component({
  selector: 'app-eventos-list-pages',
  imports: [RouterLink],
  templateUrl: './eventos-list-pages.html',
  styleUrl: './eventos-list-pages.css',
})
export class EventosListPages {

  listaEventos: Evento[] = []

  constructor(private serviceEventos: EventosService) {}

  ngOnInit(): void {
    this.getEventos()
  }

  getEventos(): void {
    this.serviceEventos.getEventos().subscribe(resp => {
      this.listaEventos = resp;
    })
  }

  removeEvento(id:number):void{
    this.serviceEventos.removeEventos(id).subscribe(resp=>{
      alert("Eliminado correctamente")
    })
  }

  buscarEvento(nombre:string){
    return this.listaEventos.filter(e => e.nombre_evento.toLowerCase().includes(nombre.toLowerCase()))
  }

  eventosProximos(){
    let suma =0
    this.listaEventos.forEach(e => {
      if(e.estado){
        suma+=1
      }
    })
    return suma
  }

}
