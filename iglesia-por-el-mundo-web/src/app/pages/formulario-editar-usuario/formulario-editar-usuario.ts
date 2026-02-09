import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { RegistroUsuario } from '../../dto/registro.dto';
import { UsuarioService } from '../../service/usuario.service';

@Component({
  selector: 'app-formulario-editar-usuario',
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './formulario-editar-usuario.html',
  styleUrl: './formulario-editar-usuario.css',
})
export class FormularioEditarUsuario implements OnInit{

  idUsuario: number | null = null;

  constructor(private serviceUsuario: UsuarioService, private router: Router, private route: ActivatedRoute) { }
  
  registroForm = new FormGroup({
    nombre : new FormControl('',Validators.required),
    contrasenea : new FormControl('',[Validators.minLength(8), Validators.maxLength(20)]),
    confirmarContrasenea : new FormControl('',[Validators.minLength(8), Validators.maxLength(20)]),
    emailUsuario : new FormControl('',[Validators.required,Validators.pattern(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)]),
  })

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id')!;
    if(id){
      this.idUsuario = id;
      this.serviceUsuario.getUsuarios().subscribe(resp =>{
        const usuario = resp.find(u => u.id === id)
        if(usuario){
          this.registroForm.patchValue({
            nombre: usuario.name,
            emailUsuario: usuario.email
          })
        }
      })
    }
  }

  editarUsuario():void{
    if(this.idUsuario){
      const password = this.registroForm.get('contrasenea')?.value;
      const passwordConfirmation = this.registroForm.get('confirmarContrasenea')?.value;
      
      // Validar que las contraseñas coincidan si se proporcionaron
      if ((password || passwordConfirmation) && password !== passwordConfirmation) {
        alert("Las contraseñas no coinciden");
        return;
      }
      
      let editarUsuario: any = {
        name: this.registroForm.get('nombre')?.value!,
        email: this.registroForm.get('emailUsuario')?.value!
      };
      
      // Solo incluir contraseñas si ambas se proporcionaron
      if (password && passwordConfirmation) {
        editarUsuario.password = password;
        editarUsuario.password_confirmation = passwordConfirmation;
      }
      
      this.serviceUsuario.updateUsuario(this.idUsuario, editarUsuario).subscribe(resp =>{
        window.location.href = '/usuarios';
      },
      error =>{
        alert("Algo ha salido mal, inténtalo de nuevo")
      }
    )
    }
  }
}
