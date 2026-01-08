import { Component, OnInit } from '@angular/core';
import { DonacionesService } from '../../service/donaciones.service';
import { Donacion } from '../../interface/donaciones.interface';
import { left } from '@popperjs/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-donaciones-list-pages',
  imports: [RouterLink],
  templateUrl: './donaciones-list-pages.html',
  styleUrl: './donaciones-list-pages.css',
})
export class DonacionesListPages implements OnInit {

  listaDonaciones: Donacion[] = []

  constructor(private serviceDonaciones: DonacionesService) { }

  ngOnInit(): void {
    this.getDonaciones();
  }

  getDonaciones(): void {
    this.serviceDonaciones.getDonaciones().subscribe(resp => {
      this.listaDonaciones = resp;
    })
  }

  removeDonaciones(id: number): void {
    this.serviceDonaciones.removeDonacion(id).subscribe(resp => {
        alert("Eliminado correctamente ")
        window.location.reload();
    },
      error =>{
        alert("Algo ha slido mal, intentalo más tarde")
      }
    )
  }

  calcularMedia() {
    let suma: number = 0;
    this.listaDonaciones.forEach(s => {
      suma += s.donacion
    });
    return (suma / this.listaDonaciones.length).toFixed(2);
  }

  calcularSuma() {
    let suma = 0;
    if (this.listaDonaciones.length == 0) {
      suma = 0;
    } else {
      this.listaDonaciones.forEach(d => {
        suma += d.donacion
      })
    }
    return suma.toFixed(2);
  }

  buscarDonacion(nombre: string) {
    return this.listaDonaciones.filter(d => d.nombre_donante.toLowerCase().includes(nombre.toLowerCase()))
  }




}
