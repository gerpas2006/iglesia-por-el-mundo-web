import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Route, Router, RouterLink } from "@angular/router";
import { LoginService } from '../../service/login.service';
import { Usuario } from '../../dto/usuario.dto';

@Component({
  selector: 'app-login-pages',
  imports: [RouterLink, ReactiveFormsModule],
  templateUrl: './login-pages.html',
  styleUrl: './login-pages.css',
})
export class LoginPages {
  
  constructor(private servicioLogin:LoginService,private route:Router){}

  logiForm = new FormGroup ({
    email : new FormControl('',[Validators.required,Validators.pattern(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)]),
    contrasenea : new FormControl('',[Validators.required, Validators.minLength(8), Validators.maxLength(20)])
  })

  loginUsuario(){
    const loginUsuario = new Usuario(
      this.logiForm.get('email')?.value!,
      this.logiForm.get('contrasenea')?.value!
    )
    this.servicioLogin.loginUsuario(loginUsuario).subscribe(resp =>{
      const token = resp.token
      localStorage.setItem('token',token);
      this.route.navigate(['citas'])
    }, error => {
      alert('El correo no esta registrado')
    })
  }

}
