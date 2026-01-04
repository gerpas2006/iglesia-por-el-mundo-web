import { Routes } from '@angular/router';
import { EventosListPages } from './pages/eventos-list-pages/eventos-list-pages';
import { OracionesListPages } from './pages/oraciones-list-pages/oraciones-list-pages';
import { DonacionesListPages } from './pages/donaciones-list-pages/donaciones-list-pages';
import { LoginPages } from './pages/login-pages/login-pages';
import { RegistroPages } from './pages/registro-pages/registro-pages';
import { FormulariEventosPage } from './pages/formulari-eventos-page/formulari-eventos-page';
import { FormularioOracionesPage } from './pages/formulario-oraciones-page/formulario-oraciones-page';
import { FomularioTipoEvento } from './pages/fomulario-tipo-evento/fomulario-tipo-evento';
import { FomularioTipoDonacion } from './pages/fomulario-tipo-donacion/fomulario-tipo-donacion';
import { FomularioTipoOracion } from './pages/fomulario-tipo-oracion/fomulario-tipo-oracion';
import { TipoEventosListPages } from './pages/tipo-eventos-list-pages/tipo-eventos-list-pages';
import { TipoDonacionesListPage } from './pages/tipo-donaciones-list-page/tipo-donaciones-list-page';
import { TipoOracionesListPages } from './pages/tipo-oraciones-list-pages/tipo-oraciones-list-pages';
import { TipoCitasListPages } from './pages/tipo-citas-list-pages/tipo-citas-list-pages';
import { FormularioTipoCitasPages } from './pages/formulario-tipo-citas-pages/formulario-tipo-citas-pages';
import { CitasListPages } from './pages/citas-list-pages/citas-list-pages';
import { ReseneasListPages } from './pages/reseneas-list-pages/reseneas-list-pages';

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
        path: 'reseñas',
        component: ReseneasListPages
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
    },
    {
        path: 'formularioTipoEvento',
        component: FomularioTipoEvento
    },
    {
        path: 'formularioTipoDonacion',
        component: FomularioTipoDonacion
    },
    {
        path: 'formularioTipoOracion',
        component: FomularioTipoOracion
    },
    {
        path: 'tipoEventos',
        component: TipoEventosListPages
    },
    {
        path: 'tipoDonacion',
        component:TipoDonacionesListPage
    },
    {
        path: 'tipoOracion',
        component: TipoOracionesListPages
    },
    {
        path: 'tipoCitas',
        component: TipoCitasListPages
    },
    {
        path: 'formularioTipoCitas',
        component: FormularioTipoCitasPages
    }




];
