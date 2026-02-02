import { Component, OnInit } from '@angular/core';
import { TipoCitasService } from '../../service/tipo-citas.service';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { TipoCitaDto } from '../../dto/tipoCitas.dto';

@Component({
  selector: 'app-formulario-tipo-citas-pages',
  imports: [ReactiveFormsModule,RouterLink],
  templateUrl: './formulario-tipo-citas-pages.html',
  styleUrl: './formulario-tipo-citas-pages.css',
})
export class FormularioTipoCitasPages implements OnInit{

  idTipoCita: number | null = null;

  constructor(private serviceTipoCita:TipoCitasService, private router:Router, private route:ActivatedRoute){}

  registerForm = new FormGroup({
    nombre_cita: new FormControl('', [Validators.required, Validators.maxLength(50)]),
    descripcion_cita: new FormControl('', [Validators.required, Validators.maxLength(255)])
  })

    ngOnInit(): void {
      const id = +this.route.snapshot.paramMap.get('id')!;
      if (id) {
        this.idTipoCita = id;
        this.serviceTipoCita.getTipoCitas().subscribe(resp => {
          const tipoCita = resp.find(t => t.id === id);
          this.registerForm.patchValue({
            nombre_cita: tipoCita?.nombre_cita,
            descripcion_cita: tipoCita?.descripcion_cita
          });
        });
      }
    }


  crearTipoCita(){
    const crearTipoCita = new TipoCitaDto(
      this.registerForm.get('nombre_cita')?.value!,
      this.registerForm.get('descripcion_cita')?.value!
    )
    this.serviceTipoCita.crearTipoCita(crearTipoCita).subscribe(resp =>{
      this.router.navigate(['tipoCitas'])
    },
    error => {
        alert("Algo ha salido mal. intentalo de juevo")
    }
  )
  }

  editarTipoCita(){
    const editarTipoCita = new TipoCitaDto(
      this.registerForm.get('nombre_cita')?.value!,
      this.registerForm.get('descripcion_cita')?.value!
    )
    this.serviceTipoCita.editarTipoCita(editarTipoCita,this.idTipoCita!).subscribe(resp =>{
      this.router.navigate(['tipoCitas'])
    },
    error => {
        alert("Algo ha salido mal. intentalo de juevo")
    }
  )
  }

}
