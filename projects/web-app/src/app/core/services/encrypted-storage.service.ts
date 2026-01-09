import { Injectable, inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import * as CryptoJS from 'crypto-js';
import { environment } from '../../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class EncryptedStorageService {
  
  private readonly SECRET_KEY = environment.secretKey;
  private platformId = inject(PLATFORM_ID);

  setItem(key: string, value: any): void {
    if (!isPlatformBrowser(this.platformId)) return;
    try {
      const jsonString = JSON.stringify(value);
      const encrypted = CryptoJS.AES.encrypt(jsonString, this.SECRET_KEY).toString();
      localStorage.setItem(key, encrypted);
    } catch (error) {
      console.error('Error al guardar:', error);
    }
  }

  getItem<T>(key: string): T | null {
    if (!isPlatformBrowser(this.platformId)) return null;
    try {
      const encrypted = localStorage.getItem(key);
      if (!encrypted) return null;
      
      const decrypted = CryptoJS.AES.decrypt(encrypted, this.SECRET_KEY);
      const decryptedText = decrypted.toString(CryptoJS.enc.Utf8);
      if (!decryptedText) return null;
      
      return JSON.parse(decryptedText) as T;
    } catch (error) {
      console.error('Error al obtener:', error);
      return null;
    }
  }

  removeItem(key: string): void {
    if (isPlatformBrowser(this.platformId)) {
      localStorage.removeItem(key);
    }
  }

  clear(): void {
    if (isPlatformBrowser(this.platformId)) {
      localStorage.clear();
    }
  }
}