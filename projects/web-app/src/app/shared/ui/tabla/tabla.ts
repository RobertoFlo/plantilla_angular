import {ImportsModule} from "../../../imports";
import { Component, Input} from "@angular/core";

interface header {
    field:string;
    header:string;
}
@Component({
    selector: 'app-tabla',
    templateUrl: './tabla.html',
    styleUrl: './tabla.scss',
    standalone: true,
    imports: [ImportsModule]
})
export class TablaComponent {
    @Input() items:any[] = [];
    @Input() header:header[] = [];
    selectedSize: any = undefined;
    @Input() acciones:boolean = false;
    constructor() {
        this.selectedSize = 'large';
    }
}
