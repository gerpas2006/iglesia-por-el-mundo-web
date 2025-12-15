import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from "@angular/router";
import { LoginService } from '../../service/login.service';
import { RegistroUsuario } from '../../dto/registro.dto';
import { errorContext } from 'rxjs/internal/util/errorContext';

@Component({
  selector: 'app-registro-pages',
  imports: [RouterLink, ReactiveFormsModule],
  templateUrl: './registro-pages.html',
  styleUrl: './registro-pages.css',
})
export class RegistroPages {

  constructor(private serviceRegistro:LoginService, private route:Router){}

  registroForm = new FormGroup({
    nombre : new FormControl('',Validators.required),
    contrasenea : new FormControl('',[Validators.required, Validators.minLength(8), Validators.maxLength(20)]),
    confirmarContrasenea : new FormControl('',[Validators.required, Validators.minLength(8), Validators.maxLength(20)]),
    emailUsuario : new FormControl('',[Validators.required,Validators.pattern(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)]),
  })

  crearUsuario(){
      const nuevoUsuario = new RegistroUsuario(
        this.registroForm.get('nombre')?.value!,
        this.registroForm.get('emailUsuario')?.value!,
        this.registroForm.get('contrasenea')?.value!,
        this.registroForm.get('confirmarContrasenea')?.value!,
      )
      this.serviceRegistro.crearUsuario(nuevoUsuario).subscribe(resp =>{
        const token = resp.token;
        localStorage.setItem('token', token);
        this.route.navigate(['login'])
      },
    error=>{
      alert('El correo ya esta registrado')
    })
  }


}
