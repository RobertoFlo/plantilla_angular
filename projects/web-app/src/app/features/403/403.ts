import { Component, inject } from "@angular/core";
import { Router } from "@angular/router";
@Component({
  selector: 'app-403',
  templateUrl: './403.html',
})
export class denegado_403 {
    private router = inject(Router);

  volver() {
    this.router.navigate(['/dashboard']);
  }
}