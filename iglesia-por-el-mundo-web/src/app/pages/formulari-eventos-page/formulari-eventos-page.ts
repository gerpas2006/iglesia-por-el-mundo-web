import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from "@angular/router";


@Component({
  selector: 'app-formulari-eventos-page',
  imports: [RouterLink, ReactiveFormsModule],
  templateUrl: './formulari-eventos-page.html',
  styleUrl: './formulari-eventos-page.css',
})
export class FormulariEventosPage {

  
  registroEventos = new FormGroup ({
    nombreEvento : new FormControl('', Validators.required),
    fechaEvento : new FormControl('',Validators.required),
    horaEvento : new FormControl('',Validators.required),
    tipoEvento : new FormControl('',Validators.required),
    asistentesEsperados : new FormControl('',Validators.required),
    ubicacionEvento : new FormControl('',Validators.required),
    descripcionEvento : new FormControl('',[Validators.required, Validators.minLength(12), Validators.maxLength(250)]),
    estadoEvento : new FormControl('',Validators.required)
  })

}
