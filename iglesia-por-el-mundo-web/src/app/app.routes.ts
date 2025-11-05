import { Routes } from '@angular/router';
import { CitasListPages } from './pages/citas-list-pages/citas-list-pages';
import { EventosListPages } from './pages/eventos-list-pages/eventos-list-pages';
import { OracionesListPages } from './pages/oraciones-list-pages/oraciones-list-pages';
import { DonacionesListPages } from './pages/donaciones-list-pages/donaciones-list-pages';
import { ValoracionesListPages } from './pages/valoraciones-list-pages/valoraciones-list-pages';

export const routes: Routes = [
    {
        path: '',
        redirectTo: '/citas',
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
    }



];
