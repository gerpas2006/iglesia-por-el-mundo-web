import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule, Validators, FormGroup } from '@angular/forms';
import { Router, RouterLink } from "@angular/router";
import { TipoDonacion } from '../../dto/tipoDonacion.dto';
import { TipoDonacionService } from '../../service/tipo-donacion.service';

@Component({
  selector: 'app-fomulario-tipo-donacion',
  imports: [RouterLink, ReactiveFormsModule],
  templateUrl: './fomulario-tipo-donacion.html',
  styleUrl: './fomulario-tipo-donacion.css',
})
export class FomularioTipoDonacion {

  constructor(private serviceTipoDonacion: TipoDonacionService, private route: Router) { }

  registroForm = new FormGroup({
    nombre_donacion: new FormControl('', [Validators.required, Validators.maxLength(50)]),
    descripcion_donacion: new FormControl('', [Validators.maxLength(255)])
  })

  crearTipoDonacion() {
    const nuevoTipoDonacion = new TipoDonacion(
      this.registroForm.get('nombre_donacion')?.value!,
      this.registroForm.get('descripcion_donacion')?.value!
    )
    this.serviceTipoDonacion.crearTipoDonacion(nuevoTipoDonacion).subscribe(resp => {
      this.route.navigate(['tipoDonacion'])
    },
      error => {
        alert("Algo ha salido mal. intentalo de juevo")
      }
    )
  }

}
