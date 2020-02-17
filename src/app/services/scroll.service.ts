import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { take, map, tap } from 'rxjs/operators';

import { Category } from '../models/scroll/category';
import { Product } from '../models/scroll/product';

@Injectable({
  providedIn: 'root'
})
export class ScrollService {

  constructor(private http: HttpClient) { }

  getCategories() {
    return this.http
      .get<Category[]>('assets/data/categories.json')
      .pipe(tap(console.log), take(1));
  }

  getProducts(idCategory: number) {
    return this.http
      .get<Product[]>('assets/data/products.json')
      .pipe(
        take(1),
        map((products: Product[]) => products.filter(c => c.category == idCategory)),
      );
  }

}
