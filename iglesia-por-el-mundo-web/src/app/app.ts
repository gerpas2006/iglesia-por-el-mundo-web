import { Component, signal } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { Menu } from "./layouts/menu/menu";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Menu],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('iglesia-por-el-mundo-web');

  constructor(private router: Router) {}

  isAuthRoute(): boolean {
    const authRoutes = ['/login', '/registro'];
    return authRoutes.includes(this.router.url);
  }
}
