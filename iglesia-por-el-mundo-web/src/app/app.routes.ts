import { Routes } from '@angular/router';
import { CitasListPages } from './pages/citas-list-pages/citas-list-pages';
import { EventosListPages } from './pages/eventos-list-pages/eventos-list-pages';
import { OracionesListPages } from './pages/oraciones-list-pages/oraciones-list-pages';
import { DonacionesListPages } from './pages/donaciones-list-pages/donaciones-list-pages';
import { ValoracionesListPages } from './pages/valoraciones-list-pages/valoraciones-list-pages';
import { LoginPages } from './pages/login-pages/login-pages';
import { RegistroPages } from './pages/registro-pages/registro-pages';
import { FormulariEventosPage } from './pages/formulari-eventos-page/formulari-eventos-page';
import { FormularioOracionesPage } from './pages/formulario-oraciones-page/formulario-oraciones-page';

export const routes: Routes = [
    {
        path: '',
        redirectTo: '/login',
        pathMatch: 'full'
    },
    {
        path: 'citas',
        component: CitasListPages
    },
    {
        path: 'eventos',
        component: EventosListPages
    },
    {
        path: 'oraciones',
        component: OracionesListPages
    },
    {
        path: 'donaciones',
        component: DonacionesListPages
    },
    {
        path: 'valoraciones',
        component: ValoracionesListPages
    },
    {
        path: 'login',
        component: LoginPages
    },
    {
        path: 'registro',
        component: RegistroPages
    },
    {
        path: 'formularioEventos',
        component: FormulariEventosPage
    },
    {
        path: 'formularioOraciones',
        component: FormularioOracionesPage
    }




];
