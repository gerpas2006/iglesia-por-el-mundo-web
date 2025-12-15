import { Component, OnInit } from '@angular/core';
import { DonacionesService } from '../../service/donaciones.service';
import { Donacion } from '../../interface/donaciones.interface';

@Component({
  selector: 'app-donaciones-list-pages',
  imports: [],
  templateUrl: './donaciones-list-pages.html',
  styleUrl: './donaciones-list-pages.css',
})
export class DonacionesListPages implements OnInit{

listaDonaciones : Donacion[]=[]

  constructor(private serviceDonaciones:DonacionesService){}

  ngOnInit(): void {
    this.getDonaciones();
  }

  getDonaciones():void{
    this.serviceDonaciones.getDonaciones().subscribe(resp =>{
      this.listaDonaciones = resp;
    })
  }



}
