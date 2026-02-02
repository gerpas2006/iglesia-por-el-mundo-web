import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from "@angular/router";
import { OracionDto } from '../../dto/oraciones.dto';
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

  idOracion: number | null = null;
  listaTipoOracion:TipoOracion[]=[]


  constructor(private serviceOracion: OracionesService, private router:Router,private serviceTipoOraciones:TipoOracionesService,private route:ActivatedRoute){}
  
  ngOnInit(): void {
    this.getTipoOraciones()
    const id = +this.route.snapshot.paramMap.get('id')!;
    if (id) {
      this.idOracion = id;
      this.serviceOracion.getOraciones().subscribe(resp =>{
        const oracion = resp.find(o => o.id === id);
        if (oracion) {
          this.registroOraciones.patchValue({
            nombre_oracion: oracion.nombre_oracion,
            texto_oracion: oracion.texto_oracion,
            autor: oracion.autor,
            estado: oracion.estado,
            tipo_oracion_id: oracion.tipo_oracion_id
          });
        }
      });
    }
  }

  registroOraciones = new FormGroup({
    nombre_oracion: new FormControl('', [Validators.required, Validators.maxLength(255)]),
    texto_oracion: new FormControl('', [Validators.required]),
    autor: new FormControl('', [Validators.required, Validators.maxLength(255)]),
    estado: new FormControl(false),
    tipo_oracion_id: new FormControl<number | null>(null)
  });

  crearOracion(){
    const nuevaOracion = new OracionDto(
      this.registroOraciones.get('nombre_oracion')?.value!,
      this.registroOraciones.get('texto_oracion')?.value!,
      this.registroOraciones.get('autor')?.value!,
      this.registroOraciones.get('estado')?.value!,
      this.registroOraciones.get('tipo_oracion_id')?.value!
    )
    this.serviceOracion.createOracion(nuevaOracion).subscribe(resp =>{
      this.router.navigate(['oraciones'])
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

  editarOracion(id:number){
    const editarOracion = new OracionDto(
      this.registroOraciones.get('nombre_oracion')?.value!,
      this.registroOraciones.get('texto_oracion')?.value!,
      this.registroOraciones.get('autor')?.value!,
      this.registroOraciones.get('estado')?.value!,
      this.registroOraciones.get('tipo_oracion_id')?.value!
    )
    this.serviceOracion.updateOracion(editarOracion,id).subscribe(resp =>{
      this.router.navigate(['oraciones'])
    },
    error =>{
      alert("Algo ha salido mal. intentalo de nuevo")
    }
  )
  }

}
