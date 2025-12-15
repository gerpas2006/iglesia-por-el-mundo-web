import { Component, OnInit } from '@angular/core';
import { DonacionesService } from '../../service/donaciones.service';
import { Donacion } from '../../interface/donaciones.interface';
import { left } from '@popperjs/core';

@Component({
  selector: 'app-donaciones-list-pages',
  imports: [],
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
      alert('Eliminado correctamente')
    })
  }

  calcularMedia() {
    let suma: number = 0;
    this.listaDonaciones.forEach(s => {
      suma += s.donacion
    });
    return suma / this.listaDonaciones.length;
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
    return suma;
  }

  buscarDonacion(nombre: string) {
    return this.listaDonaciones.filter(d => d.nombre_donante.toLowerCase() == nombre.toLowerCase())
  }




}
