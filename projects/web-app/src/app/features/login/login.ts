import { Component,signal,ChangeDetectionStrategy, inject } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {LoginService} from './services/login.services';
import { AuthService, InfUser } from '../../core/services/auth.service';
import {Router} from '@angular/router';
@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class Login {
  username = signal('');
  password = signal('');
  private loginService = inject(LoginService);
  private authService = inject(AuthService);
  private router = inject(Router);

  onSubmit() {
    const username = this.username();
    const password = this.password();
    const authData = { username, password };
    if(authData.username === "" || authData.password === ""){
      alert("Por favor, completa todos los campos.");
      return;
    }
    this.loginService.postLogin(authData).subscribe({
      next: (response: any) => {
        const infUser: InfUser = {
          token: response.token,
          permisos: ["create", "read", "update", "delete"],
          rol: "Admin",
          user: "Admin"
        };
        this.authService.setInfUser(infUser);
        
        // Limpiar formulario para que no persistan los datos al regresar
        this.username.set('');
        this.password.set('');
        
        this.router.navigate(['/dashboard']);
      },
      error: (error: any) => {
        console.error('Login error:', error);
      }
    });
  }
}
