import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from "@angular/router";
import { EventosService } from '../../service/eventos.service';
import { Evento } from '../../dto/evento.dto';
import { TipoEventoService } from '../../service/tipo-evento.service';
import { TipoEvento } from '../../dto/tipoEvento.dto';


@Component({
  selector: 'app-formulari-eventos-page',
  imports: [RouterLink, ReactiveFormsModule],
  templateUrl: './formulari-eventos-page.html',
  styleUrl: './formulari-eventos-page.css',
})
export class FormulariEventosPage implements OnInit {

  listaTipoEventos: TipoEvento[]=[]

  constructor(private serviceEventos: EventosService, private route: Router, private serviceTipoEventos: TipoEventoService) { }

  registroEventos = new FormGroup({
    nombre_evento: new FormControl('', Validators.required),
    fecha_evento: new FormControl('', Validators.required),
    ubicacion: new FormControl('', [Validators.required]),
    descripcion_evento: new FormControl('', [Validators.required]),
    estado: new FormControl(true, [Validators.required]),
    tipo_evento_id: new FormControl(0, [Validators.required])
  })

  crearEvento() {
    const fechaInput = this.registroEventos.get('fecha_evento')?.value!;
    const fechaFormateada = fechaInput.replace('T', ' ') + ':00';
    
    const nuevoEvento = new Evento(
      0,
      this.registroEventos.get('nombre_evento')?.value!,
      fechaFormateada,
      this.registroEventos.get('ubicacion')?.value!,
      this.registroEventos.get('descripcion_evento')?.value!,
      this.registroEventos.get('estado')?.value!,
      this.registroEventos.get('tipo_evento_id')?.value!
    )
    this.serviceEventos.crearEvento(nuevoEvento).subscribe(resp => {
      this.route.navigate(['eventos'])
    },
      error => {
        alert("Algo ha salido mal. intentalo de juevo")
      }
    )
  }

  ngOnInit(): void {
    this.getTipoEventos()
  }

  getTipoEventos() : void{
    this.serviceTipoEventos.getTipoEventos().subscribe(resp =>{
      this.listaTipoEventos = resp;
    })
  }






}
