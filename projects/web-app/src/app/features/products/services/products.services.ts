import { inject, Injectable } from '@angular/core';
import { ApiService } from '../../../core/services/api.service'; 
import { Product } from '../interface/products.interface';

@Injectable({ providedIn: 'root' })
export class ProductsService {
  private api = inject(ApiService);

  getProducts() {
    return this.api.get<Product[]>('/products');
  }
}