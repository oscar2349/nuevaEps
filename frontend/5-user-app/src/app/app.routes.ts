import { Routes } from '@angular/router';
import { SolicitudesComponent } from './components/solicitudes/solicitudes.component';
import { SolicitudFormComponent } from './components/solicitud-form/solicitud-form.component';

export const routes: Routes = [

    {
        path: '',
        pathMatch: 'full',
        redirectTo: '/solicitudes/page/0'
    },
    {
        path: 'solicitudes',
        component: SolicitudesComponent,
    },
    {
        path: 'solicitudes/page/:page',
        component: SolicitudesComponent,
    },
    {
        path: 'solicitudes/create', 
        component: SolicitudFormComponent,
    },
    {
        path: 'solicitudes/edit/:id',
        component: SolicitudFormComponent
    }

];
