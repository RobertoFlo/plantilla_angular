import { inject, Injectable } from '@angular/core';
import { ApiService } from '../../../core/services/api.service'; 

@Injectable({ providedIn: 'root' })
export class LoginService {
  private api = inject(ApiService);

  postLogin(authData: any) {
    return this.api.post('/auth/login', authData);
  }
}