import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router, RouterLink } from "@angular/router";
import { EventosService } from '../../service/eventos.service';
import { EventoDto } from '../../dto/evento.dto';
import { TipoEventoService } from '../../service/tipo-evento.service';
import { TipoEventoDto } from '../../dto/tipoEvento.dto';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Evento } from '../../interface/eventos.interface';


@Component({
  selector: 'app-formulari-eventos-page',
  imports: [RouterLink, ReactiveFormsModule],
  templateUrl: './formulari-eventos-page.html',
  styleUrl: './formulari-eventos-page.css',
})
export class FormulariEventosPage implements OnInit {

  listaTipoEventos: TipoEventoDto[] = []
  listaEventos: Evento[] = []
  idEvento: number | null = null
  constructor(private serviceEventos: EventosService, private router: Router, private serviceTipoEventos: TipoEventoService,private route: ActivatedRoute) { }

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

    const nuevoEvento = new EventoDto(
      this.registroEventos.get('nombre_evento')?.value!,
      fechaFormateada,
      this.registroEventos.get('ubicacion')?.value!,
      this.registroEventos.get('descripcion_evento')?.value!,
      this.registroEventos.get('estado')?.value!,
      this.registroEventos.get('tipo_evento_id')?.value!
    )
    this.serviceEventos.crearEvento(nuevoEvento).subscribe(resp => {
      this.router.navigate(['eventos'])
    },
      error => {
        alert("Algo ha salido mal. intentalo de nuevo")
      }
    )
  }

  ngOnInit(): void {
    this.getTipoEventos()
    const id = +this.route.snapshot.paramMap.get('id')!
    if (id){
      this.idEvento = id
      this.serviceEventos.getEventos().subscribe(resp =>{
        this.listaEventos = resp
      const evento = this.listaEventos.find(e => e.id === id)
      this.registroEventos.patchValue({
        nombre_evento: evento?.nombre_evento,
        descripcion_evento: evento?.descripcion_evento,
        fecha_evento: evento?.fecha_evento,
        estado: evento?.estado,
        tipo_evento_id: evento?.tipo_evento_id,
        ubicacion: evento?.ubicacion
      })
      })
    }
  }

  getTipoEventos(): void {
    this.serviceTipoEventos.getTipoEventos().subscribe(resp => {
      this.listaTipoEventos = resp;
    })
  }

  updateEvento(): void {
    const fechaInput = this.registroEventos.get('fecha_evento')?.value!;
    const fechaFormateada = fechaInput.replace('T', ' ') + ':00';

    const editarEvento = new EventoDto(
      this.registroEventos.get('nombre_evento')?.value!,
      fechaFormateada,
      this.registroEventos.get('ubicacion')?.value!,
      this.registroEventos.get('descripcion_evento')?.value!,
      this.registroEventos.get('estado')?.value!,
      this.registroEventos.get('tipo_evento_id')?.value!
    )
    this.serviceEventos.updateEvento(editarEvento, this.idEvento!).subscribe(resp => {
      this.router.navigate(['eventos'])
    }
    )
  }






}
