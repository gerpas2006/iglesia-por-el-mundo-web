import { Component } from '@angular/core';
import { Router, RouterLink } from "@angular/router";
import { TipoEventoService } from '../../service/tipo-evento.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-fomulario-tipo-evento',
  imports: [RouterLink],
  templateUrl: './fomulario-tipo-evento.html',
  styleUrl: './fomulario-tipo-evento.css',
})
export class FomularioTipoEvento {

  constructor(private serviceTipoEvento: TipoEventoService, route:Router){}

  registroForm = new FormGroup({
    nombre_evento: new FormControl('',[Validators.required,Validators.maxLength(50)]),
    descripcion_evento: new FormControl('',[Validators.required,])
  })

}
