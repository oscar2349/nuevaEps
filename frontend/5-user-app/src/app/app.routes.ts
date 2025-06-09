import { Routes } from '@angular/router';
import { UserAppComponent } from './components/solicitud-app.component';
import { LoginComponent } from './components/login/login.component';
import { MedicamentoComponent } from './components/medicamentos/medicamentos.component';
import { MedicamentoFormComponent } from './components/medicamentoForm/medicamentoFormComponent';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'solicitudes', component: UserAppComponent },
  { path: 'medicamentos', component: MedicamentoComponent },
  { path: 'medicamentos', component: MedicamentoComponent },
  { path: 'crearMedicamentos',component: MedicamentoFormComponent},
  { path: '**', redirectTo: 'login' }
];