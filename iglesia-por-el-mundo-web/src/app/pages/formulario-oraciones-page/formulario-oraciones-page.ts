import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-formulario-oraciones-page',
  imports: [RouterLink, ReactiveFormsModule],
  templateUrl: './formulario-oraciones-page.html',
  styleUrl: './formulario-oraciones-page.css',
})
export class FormularioOracionesPage {

  registroOraciones = new FormGroup({
    nombreOracion : new FormControl('',Validators.required),
    fechaOracion : new FormControl('',Validators.required),
    categoriaOracion : new FormControl('',Validators.required),
    autorOracion : new FormControl('',Validators.required),
    estadoOracion : new FormControl('',Validators.required),
    contenidoOracion : new FormControl('',[Validators.required, Validators.minLength(15),Validators.maxLength(250)])

  })

}
