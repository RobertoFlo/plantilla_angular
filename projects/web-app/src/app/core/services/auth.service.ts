import { Injectable, inject } from '@angular/core';
import { EncryptedStorageService } from './encrypted-storage.service';

export interface InfUser {
  token: string;
  permisos: string[];
  rol: string;
  user?: any;
  // Agrega los campos que te devuelve tu API
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  private readonly STORAGE_KEY = 'inf_user';
  private storage = inject(EncryptedStorageService);

  /**
   * Guarda toda la información del usuario después del login
   */
  setInfUser(data: InfUser): void {
    this.storage.setItem(this.STORAGE_KEY, data);
  }

  /**
   * Obtiene toda la información del usuario
   */
  getInfUser(): InfUser | null {
    return this.storage.getItem<InfUser>(this.STORAGE_KEY);
  }

  /**
   * Obtiene solo el token
   */
  getToken(): string | null {
    const infUser = this.getInfUser();
    return infUser?.token || null;
  }

  /**
   * Obtiene solo los permisos
   */
  getPermisos(): string[] {
    const infUser = this.getInfUser();
    return infUser?.permisos || [];
  }

  /**
   * Verifica si tiene un permiso
   */
  canAction(permission: string): boolean {
    const permisos = this.getPermisos();
    return permisos.includes(permission);
  }

  /**
   * Verifica si está autenticado
   */
  isAuthenticated(): boolean {
    return !!this.getToken();
  }

  /**
   * Cierra sesión y limpia todo
   */
  logout(): void {
    this.storage.removeItem(this.STORAGE_KEY);
  }
}