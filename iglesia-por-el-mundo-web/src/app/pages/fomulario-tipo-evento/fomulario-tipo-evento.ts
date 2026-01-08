import { Component } from '@angular/core';
import { Router, RouterLink } from "@angular/router";
import { TipoEventoService } from '../../service/tipo-evento.service';
import { TipoEventoDto } from '../../dto/tipoEvento.dto';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-fomulario-tipo-evento',
  imports: [RouterLink,ReactiveFormsModule],
  templateUrl: './fomulario-tipo-evento.html',
  styleUrl: './fomulario-tipo-evento.css',
})
export class FomularioTipoEvento {

  constructor(private serviceTipoEvento: TipoEventoService, private route: Router) { }

  registroForm = new FormGroup({
    nombre_evento: new FormControl('', [Validators.required, Validators.maxLength(50)]),
    descripcion_evento: new FormControl('', [Validators.required, Validators.maxLength(255)])
  })

  crearTipoEvento() {
    const nuevoTipoEvento = new TipoEventoDto(
      0,
      this.registroForm.get('nombre_evento')?.value!,
      this.registroForm.get('descripcion_evento')?.value!
    )
    this.serviceTipoEvento.crearTipoEvento(nuevoTipoEvento).subscribe(resp => {
      this.route.navigate(['tipoEventos'])
    },
      error => {
        alert("Algo ha salido mal. intentalo de juevo")
      }
    )
  }

}
