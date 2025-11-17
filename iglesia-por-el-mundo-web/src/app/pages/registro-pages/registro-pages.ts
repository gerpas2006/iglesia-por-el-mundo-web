import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-registro-pages',
  imports: [RouterLink, ReactiveFormsModule],
  templateUrl: './registro-pages.html',
  styleUrl: './registro-pages.css',
})
export class RegistroPages {

  registroForm = new FormGroup({
    nombre : new FormControl('',Validators.required),
    apellido : new FormControl('',Validators.required),
    contrasenea : new FormControl('',[Validators.required, Validators.minLength(8), Validators.maxLength(20)]),
    nombreUsuario : new FormControl('',Validators.required),
    confirmarContrasenea : new FormControl('',[Validators.required, Validators.minLength(8), Validators.maxLength(20)]),
    emailUsuario : new FormControl('',[Validators.required,Validators.pattern(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)]),
    telefonoUsuario : new FormControl('',[Validators.required, Validators.pattern(/^[0-9]{10}$/)])
  })

}
