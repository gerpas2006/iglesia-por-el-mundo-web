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
import { cUSTOMNAMEGuard } from './custom-name-guard';
import { Usuario } from './dto/usuario.dto';
import { UsuariosListPages } from './pages/usuarios-list-pages/usuarios-list-pages';


export const routes: Routes = [
    {
        path: '',
        redirectTo: '/login',
        pathMatch: 'full'
    },
    {
        path: 'citas',
        component: CitasListPages,
        canActivate: [cUSTOMNAMEGuard]
    },
    {
        path: 'eventos',
        component: EventosListPages,
        canActivate: [cUSTOMNAMEGuard]
    },
    {
        path: 'oraciones',
        component: OracionesListPages,
        canActivate: [cUSTOMNAMEGuard]
    },
    {
        path: 'donaciones',
        component: DonacionesListPages,
        canActivate: [cUSTOMNAMEGuard]
    },
    {
        path: 'reseñas',
        component: ReseneasListPages,
        canActivate: [cUSTOMNAMEGuard]
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
        path: 'formularioEventos/:id',
        component: FormulariEventosPage,
        canActivate: [cUSTOMNAMEGuard]
    },
    {
        path: 'formularioEventos',
        component: FormulariEventosPage,
        canActivate: [cUSTOMNAMEGuard]
    },
    {
        path: 'formularioOraciones',
        component: FormularioOracionesPage,
        canActivate: [cUSTOMNAMEGuard]
    },
    {
        path: 'formularioTipoEvento',
        component: FomularioTipoEvento,
        canActivate: [cUSTOMNAMEGuard]
    },
    {
        path: 'formularioTipoDonacion/:id',
        component: FomularioTipoDonacion,
        canActivate: [cUSTOMNAMEGuard]
    },
    {
        path: 'formularioTipoOracion',
        component: FomularioTipoOracion,
        canActivate: [cUSTOMNAMEGuard]
    },
    {
        path: 'tipoEventos',
        component: TipoEventosListPages,
        canActivate: [cUSTOMNAMEGuard]
    },
    {
        path: 'tipoDonacion',
        component:TipoDonacionesListPage,
        canActivate: [cUSTOMNAMEGuard]
    },
    {
        path: 'tipoOracion',
        component: TipoOracionesListPages,
        canActivate: [cUSTOMNAMEGuard]
    },
    {
        path: 'tipoCitas',
        component: TipoCitasListPages,
        canActivate: [cUSTOMNAMEGuard]
    },
    {
        path: 'formularioTipoCitas',
        component: FormularioTipoCitasPages,
        canActivate: [cUSTOMNAMEGuard]
    },
    {
        path: 'formularioTipoDonacion',
<<<<<<< HEAD
        component: FomularioTipoDonacion,
        canActivate: [cUSTOMNAMEGuard]
    }
    ,
    {
        path: 'usuarios',
        component: UsuariosListPages,
        canActivate: [cUSTOMNAMEGuard]
=======
        component: FomularioTipoDonacion
    },
    {
        path: 'formularioTipoEvento/:id',
        component: FomularioTipoEvento
>>>>>>> 0cc837fb340c84d643e99b1b6fc1faa0f7797d74
    }





];
