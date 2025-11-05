import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Menu } from "./menu/menu";
import { DonacionesListPages } from "./pages/donaciones-list-pages/donaciones-list-pages";
import { EventosListPages } from "./pages/eventos-list-pages/eventos-list-pages";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Menu, DonacionesListPages, EventosListPages],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('iglesia-por-el-mundo-web');
}
