import { Component, ViewChild } from "@angular/core";
import { ImportsModule } from "../../../imports";
import { Drawer as PrimeDrawer } from 'primeng/drawer';

@Component({
  selector: 'app-drawer',
  templateUrl: './drawer.html',
  styleUrl: './drawer.scss',
  standalone: true,
  imports: [ImportsModule]
})
export class DrawerComponent {
    @ViewChild('drawerRef') drawerRef!: PrimeDrawer;

    closeCallback(e: any): void {
        this.drawerRef.visible = false;
    }

    visible: boolean = false;
}
