import { Routes } from '@angular/router';
import { Login } from './features/login/login';
import { authGuard } from './auth/auth-guard';
import { publicGuard } from './auth/public-guard';
import { Dashboard } from './features/dashboard/dashboard';
import { denegado_403 } from './features/403/403';
import { MainLayoutComponent } from './shared/layouts/main-layout/main-layout';

export const routes: Routes = [
  {
    path: 'login', 
    component: Login,
    title: 'Login',
    canActivate: [publicGuard]
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: '',
    component: MainLayoutComponent,
    canActivate: [authGuard],
    children: [
      {
        path: 'dashboard', 
        component: Dashboard,
        title: 'Dashboard', 
        data: { expectedRole: 'Admin' }
      },
      {
        path: '403',
        component: denegado_403,
        title: 'Acceso denegado'
      }
    ]
  }
];
