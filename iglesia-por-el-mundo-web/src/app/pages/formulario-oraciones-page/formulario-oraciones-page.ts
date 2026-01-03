import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from "@angular/router";
import { Oracion } from '../../dto/oraciones.dto';
import { OracionesService } from '../../service/oraciones.service';
import { TipoOracionesService } from '../../service/tipo-oraciones.service';
import { TipoOracion } from '../../interface/tipo-oraciones.interface';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario-oraciones-page',
  imports: [RouterLink, ReactiveFormsModule],
  templateUrl: './formulario-oraciones-page.html',
  styleUrl: './formulario-oraciones-page.css',
})
export class FormularioOracionesPage implements OnInit{

  listaTipoOracion:TipoOracion[]=[]


  constructor(private serviceOracion: OracionesService, private route:Router,private serviceTipoOraciones:TipoOracionesService){}
  
  ngOnInit(): void {
    this.getTipoOraciones()
  }

  registroOraciones = new FormGroup({
    nombre_oracion: new FormControl('', [Validators.required, Validators.maxLength(255)]),
    texto_oracion: new FormControl('', [Validators.required]),
    autor: new FormControl('', [Validators.required, Validators.maxLength(255)]),
    estado: new FormControl(false),
    tipo_oracion_id: new FormControl(null)
  });

  crearOracion(){
    const nuevaOracion = new Oracion(
      this.registroOraciones.get('nombre_oracion')?.value!,
      this.registroOraciones.get('texto_oracion')?.value!,
      this.registroOraciones.get('autor')?.value!,
      this.registroOraciones.get('estado')?.value!,
      this.registroOraciones.get('tipo_oracion_id')?.value!
    )
    this.serviceOracion.createOracion(nuevaOracion).subscribe(resp =>{
      this.route.navigate(['oraciones'])
    },
    error =>{
      alert("Algo ha salido mal. intentalo de nuevo")
    }
  )
  }

  getTipoOraciones():void{
    this.serviceTipoOraciones.getTipoOraciones().subscribe(resp =>{
      this.listaTipoOracion = resp
    })
  }

}
