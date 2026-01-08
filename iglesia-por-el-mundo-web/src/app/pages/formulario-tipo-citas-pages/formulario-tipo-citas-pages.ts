import { Component } from '@angular/core';
import { TipoCitasService } from '../../service/tipo-citas.service';
import { Router, RouterLink } from '@angular/router';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { TipoCitaDto } from '../../dto/tipoCitas.dto';

@Component({
  selector: 'app-formulario-tipo-citas-pages',
  imports: [ReactiveFormsModule,RouterLink],
  templateUrl: './formulario-tipo-citas-pages.html',
  styleUrl: './formulario-tipo-citas-pages.css',
})
export class FormularioTipoCitasPages {

  constructor(private serviceTipoCita:TipoCitasService, private route:Router){}

  registerForm = new FormGroup({
    nombre_cita: new FormControl('', [Validators.required, Validators.maxLength(50)]),
    descripcion_cita: new FormControl('', [Validators.required, Validators.maxLength(255)])
  })

  crearTipoCita(){
    const crearTipoCita = new TipoCitaDto(
      this.registerForm.get('nombre_cita')?.value!,
      this.registerForm.get('descripcion_cita')?.value!
    )
    this.serviceTipoCita.crearTipoCita(crearTipoCita).subscribe(resp =>{
      this.route.navigate(['tipoCitas'])
    },
    error => {
        alert("Algo ha salido mal. intentalo de juevo")
    }
  )
  }

}
