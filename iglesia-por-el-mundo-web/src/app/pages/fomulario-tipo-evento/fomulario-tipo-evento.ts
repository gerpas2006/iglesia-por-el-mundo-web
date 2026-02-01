import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from "@angular/router";
import { TipoEventoService } from '../../service/tipo-evento.service';
import { TipoEventoDto } from '../../dto/tipoEvento.dto';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-fomulario-tipo-evento',
  imports: [RouterLink,ReactiveFormsModule],
  templateUrl: './fomulario-tipo-evento.html',
  styleUrl: './fomulario-tipo-evento.css',
})
export class FomularioTipoEvento implements OnInit{



  idTipoD: number | null = null;
  constructor(private serviceTipoEvento: TipoEventoService, private route: Router,private activatedRoute: ActivatedRoute) {}

  registroForm = new FormGroup({
    nombre_evento: new FormControl('', [Validators.required, Validators.maxLength(50)]),
    descripcion_evento: new FormControl('', [Validators.required, Validators.maxLength(255)])
  })

  ngOnInit(): void {
    const id = +this.activatedRoute.snapshot.paramMap.get('id')!;
    if (id) {
      this.idTipoD = id;
      this.serviceTipoEvento.getTipoEventos().subscribe(resp => {
        const tipoD = resp.find(t => t.id === id);
        this.registroForm.patchValue({
          nombre_evento: tipoD?.nombre_evento,
          descripcion_evento: tipoD?.descripcion_evento
        });
      });
    }
  }

  crearTipoEvento() {
    const nuevoTipoEvento = new TipoEventoDto(
      this.registroForm.get('nombre_evento')?.value!,
      this.registroForm.get('descripcion_evento')?.value!
    )
    this.serviceTipoEvento.crearTipoEvento(nuevoTipoEvento).subscribe(resp => {
      this.route.navigate(['tipoEventos'])
    },
      error => {
        alert("Algo ha salido mal. intentalo de juevo")
      }
    )
  }

  editarTipoEvento() {
    const editarTipoEvento = new TipoEventoDto(
      this.registroForm.get('nombre_evento')?.value!,
      this.registroForm.get('descripcion_evento')?.value!
    )
    this.serviceTipoEvento.editarTipoEvento(editarTipoEvento,this.idTipoD!).subscribe(resp => {
      this.route.navigate(['tipoEventos'])
    },
      error => {
        alert("Algo ha salido mal. intentalo de juevo")
      }
    )
  }

}
