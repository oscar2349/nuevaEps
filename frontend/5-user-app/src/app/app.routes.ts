import { Routes } from '@angular/router';
import { UserAppComponent } from './components/solicitud-app.component';
import { LoginComponent } from './components/login/login.component';
import { MedicamentoComponent } from './components/medicamentos/medicamentos.component';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'solicitudes', component: UserAppComponent },
  { path: 'medicamentos', component: MedicamentoComponent },
  { path: '**', redirectTo: 'login' }
];