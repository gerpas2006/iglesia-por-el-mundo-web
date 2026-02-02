import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from "@angular/router";
import { TipoOracionesService } from '../../service/tipo-oraciones.service';
import { TipoOracionDto } from '../../dto/tipoOraciones.dto';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-fomulario-tipo-oracion',
  imports: [RouterLink,ReactiveFormsModule],
  templateUrl: './fomulario-tipo-oracion.html',
  styleUrl: './fomulario-tipo-oracion.css',
})
export class FomularioTipoOracion implements OnInit{

  idTipoOracion: number | null = null;

  constructor(private serviceTipoOracion: TipoOracionesService, private router:Router,private route:ActivatedRoute){}


  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id')!;
    if (id) {
      this.idTipoOracion = id;
      this.serviceTipoOracion.getTipoOraciones().subscribe(resp => {
        const tipoOracion = resp.find(t => t.id === id);
        this.registroForm.patchValue({
          nombre_oracion: tipoOracion?.nombre_oracion,
          descripcion_oracion: tipoOracion?.descripcion_oracion
        });
      });
    }
  }

    registroForm = new FormGroup({
    nombre_oracion: new FormControl('', [Validators.required, Validators.maxLength(50)]),
    descripcion_oracion: new FormControl('', [Validators.maxLength(255)])
  })

  crearTipoOracion(){
    const nuevoTipoOracion = new TipoOracionDto(
      this.registroForm.get('nombre_oracion')?.value!,
      this.registroForm.get('descripcion_oracion')?.value!
    )
    this.serviceTipoOracion.crearTipoOracion(nuevoTipoOracion).subscribe(resp =>{
      this.router.navigate(['tipoOracion'])
    },
    error =>{
      alert("Algo ha salido mal. intentalo de nuevo")
    }
  )
  }

  updateTipoOracion(){
    const editarTipoOracion = new TipoOracionDto(
      this.registroForm.get('nombre_oracion')?.value!,
      this.registroForm.get('descripcion_oracion')?.value!
    )
    this.serviceTipoOracion.updateTipoOracion(this.idTipoOracion!,editarTipoOracion).subscribe(resp =>{
      this.router.navigate(['tipoOracion'])
    },
    error =>{
      alert("Algo ha salido mal. intentalo de nuevo")
    }
  )
  }





}
