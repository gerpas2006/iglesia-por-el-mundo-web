import { Component } from '@angular/core';
import { Router, RouterLink } from "@angular/router";
import { TipoOracionesService } from '../../service/tipo-oraciones.service';
import { TipoOracion } from '../../dto/tipoOraciones.dto';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-fomulario-tipo-oracion',
  imports: [RouterLink,ReactiveFormsModule],
  templateUrl: './fomulario-tipo-oracion.html',
  styleUrl: './fomulario-tipo-oracion.css',
})
export class FomularioTipoOracion {

  constructor(private serviceTipoOracion: TipoOracionesService, private route:Router){}

    registroForm = new FormGroup({
    nombre_oracion: new FormControl('', [Validators.required, Validators.maxLength(50)]),
    descripcion_oracion: new FormControl('', [Validators.maxLength(255)])
  })

  crearTipoOracion(){
    const nuevoTipoOracion = new TipoOracion(
      this.registroForm.get('nombre_oracion')?.value!,
      this.registroForm.get('descripcion_oracion')?.value!
    )
    this.serviceTipoOracion.crearTipoOracion(nuevoTipoOracion).subscribe(resp =>{
      this.route.navigate(['tipoOracion'])
    },
    error =>{
      alert("Algo ha salido mal. intentalo de nuevo")
    }
  )
  }





}
