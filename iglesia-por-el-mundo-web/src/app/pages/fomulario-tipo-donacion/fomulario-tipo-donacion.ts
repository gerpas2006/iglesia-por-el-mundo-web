import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from "@angular/router";

import { TipoDonacionService } from '../../service/tipo-donacion.service';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { TipoDonacion } from '../../interface/tipo-donacion.interface';
import { TipoDonacionDto } from '../../dto/tipoDonacion.dto';

@Component({
  selector: 'app-fomulario-tipo-donacion',
  imports: [RouterLink, ReactiveFormsModule],
  templateUrl: './fomulario-tipo-donacion.html',
  styleUrl: './fomulario-tipo-donacion.css',
})
export class FomularioTipoDonacion implements OnInit {


  tipoDonacionesList: TipoDonacion[] = [];
  idTipoD: number | null = null;
  constructor(private serviceTipoDonacion: TipoDonacionService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id')!;
    if (id) {
      this.idTipoD = id;
      this.serviceTipoDonacion.getTipoDonacion().subscribe(resp => {
        this.tipoDonacionesList = resp;
        const tipoD = this.tipoDonacionesList.find(t => t.id === id);
        this.registroForm.patchValue({
          nombre_donacion: tipoD?.nombre_donacion,
          descripcion_donacion: tipoD?.descripcion_donacion
        });
      });
    }
  }


  registroForm = new FormGroup({
    nombre_donacion: new FormControl('', [Validators.required, Validators.maxLength(50)]),
    descripcion_donacion: new FormControl('', [Validators.maxLength(255)])
  })

  crearTipoDonacion() {
    const nuevoTipoDonacion = new TipoDonacionDto(
      this.registroForm.get('nombre_donacion')?.value!,
      this.registroForm.get('descripcion_donacion')?.value!
    )
    this.serviceTipoDonacion.crearTipoDonacion(nuevoTipoDonacion).subscribe({
      next: resp => {
        this.router.navigate([`tipoDonacion`])
      },
      error: error => {
        alert("Algo ha salido mal. intentalo de juevo")
      }
    });
  }

  updateTipoDonacion() {
    const editarTipoDonacion = new TipoDonacionDto(
      this.registroForm.get('nombre_donacion')?.value!,
      this.registroForm.get('descripcion_donacion')?.value!
    )
    this.serviceTipoDonacion.updateTipoDonacion(editarTipoDonacion, this.idTipoD!).subscribe({
      next: resp => {
        this.router.navigate([`tipoDonacion`])
      },
      error: error => {
        alert("Algo ha salido mal. intentalo de juevo")
      }
    });
  }

}
