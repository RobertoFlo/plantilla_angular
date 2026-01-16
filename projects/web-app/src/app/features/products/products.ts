import { Component, inject } from "@angular/core";
import { ImportsModule } from "../../imports";
import { ProductsService } from "./services/products.services";
import { Product, header } from "./interface/products.interface";
import { TablaComponent } from "../../shared/ui/tabla/tabla";
import { Router } from "@angular/router";
@Component({
    selector: 'app-products',
    templateUrl: './products.html',
    styleUrl: './products.scss',
    imports: [ImportsModule, TablaComponent]
})
export class ProductsComponent {
    private productsService = inject(ProductsService);
    private router = inject(Router);
    products: Product[] = [];
    header: header[] = [
        { field: 'id', header: 'Id' },
        { field: 'title', header: 'Titulo' },
        { field: 'price', header: 'Precio' },
        { field: 'description', header: 'Descripción' },
        { field: 'category', header: 'Categoría' },
        { field: 'image', header: 'Imagen' }
    ];
    acciones:boolean = true;
    constructor() {
        this.productsService.getProducts().subscribe({
            next: (products: Product[]) => {
                this.products = products;
                console.log(this.products);
            },
            error: (error: any) => {
                console.error(error);
            }
        });
    }
}