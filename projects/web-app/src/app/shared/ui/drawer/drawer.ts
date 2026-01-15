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

    // closeCallback(e: any): void {
    //     this.drawerRef.visible = false;
    // }
    // openCallback(e: any): void {
    //   console.log(e);
    //     this.drawerRef.visible = true;
    // }
  toggleItem(item: any) {
    item.expanded = !item.expanded;
  }
    visible: boolean = false;
    submenu:boolean = false;
    menuSections = [
    {
      label: 'FAVORITES',
      expanded: true, // Controla la sección principal
      items: [
        { label: 'Dashboard', icon: 'pi-home'},
        { label: 'Bookmarks', icon: 'pi-bookmark'},
        { 
          label: 'Reports', 
          icon: 'pi-chart-line',
          expanded: false, // Controla el submenú de Reports
          children: [
            { label: 'Revenue', icon: 'pi-chart-line' },
            { label: 'Expenses', icon: 'pi-chart-line' }
          ]
        }
      ]
    }
  ];
}
