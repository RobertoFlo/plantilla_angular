import { inject, PLATFORM_ID } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { isPlatformBrowser } from '@angular/common';
import { AuthService } from '../core/services/auth.service';

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const authService = inject(AuthService);

  
  if (!authService.isAuthenticated()) {
    router.navigate(['login']); 
    return false;
  }
 
  // 2. Verificar Rol
  const expectedRole = route.data['expectedRole'];
  if (expectedRole) {
    const userRole = authService.getInfUser()?.rol;
    if (userRole !== expectedRole) {
      console.warn('Rol no autorizado');
      router.navigate(['dashboard']);
      return false;
    }
  }

  // 3. Verificar Permiso
  const expectedPermission = route.data['expectedPermission'];
  if (expectedPermission) {
    if (!authService.canAction(expectedPermission)) {
      console.warn('Permiso insuficiente');
      router.navigate(['dashboard']);
      return false;
    }
  }

  return true; 
};