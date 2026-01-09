import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DrawerComponent } from '../../ui/drawer/drawer';

@Component({
  selector: 'app-main-layout',
  standalone: true,
  imports: [RouterOutlet, DrawerComponent],
  templateUrl: './main-layout.html',
})
export class MainLayoutComponent {}
