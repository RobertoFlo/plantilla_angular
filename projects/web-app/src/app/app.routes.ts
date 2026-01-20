import { Routes, provideRouter } from '@angular/router';
import { Login } from './features/login/login';
import { authGuard } from './auth/auth-guard';
import { publicGuard } from './auth/public-guard';
import { Dashboard } from './features/dashboard/dashboard';
import { denegado_403 } from './features/403/403';
import { MainLayoutComponent } from './shared/layouts/main-layout/main-layout';
import { ProductsComponent } from './features/products/products';
//para que funcione el guard se debe agregar la propiedad data: { expectedRole: 'Admin', expectedPermission: 'read' } a cada ruta
//canActivate: [authGuard] funciona para proteger rutas que verifican si el usuario esta autenticado 
export const routes: Routes = [
  
//  {
//   path: '',
//   redirectTo: '',
//   pathMatch: 'full'
//  },
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
        title: 'Acceso denegado',
      },
      {
        path: 'products',
        component: ProductsComponent,
        title: 'Productos',
      }
    ]
  },
  {
    path: 'login', 
    component: Login,
    title: 'Login',
    canActivate: [publicGuard]  // error aqui si quieto esto me lleva a login  y no me deja en la ruta que estaba resolver
  },
];

export const appRoutes = routes;
export const appRouterProviders = provideRouter(appRoutes);