import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }
  getCategories() {
    const url = "https://fakestoreapi.com/products/categories";
    return this.http.get(url);
  }
  getAllProducts() {
    const url = "https://fakestoreapi.com/products";
    return this.http.get(url)
  }
  getProductDetails(id: null | string) {
    let url = `https://fakestoreapi.com/products/${id}`
    return this.http.get(url)
  }
  getProductsByCategory(category: string) {
    let url = `https://fakestoreapi.com/products/category/${category}`
    return this.http.get(url)
  }
}
