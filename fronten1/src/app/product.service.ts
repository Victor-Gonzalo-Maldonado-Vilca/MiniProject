import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { environment } from '../environments/environment';  // ajusta el archivo de entorno según sea necesario
import { Product } from './product';  // ajusta según la estructura de tu modelo Product

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private apiUrl = `${environment.apiBaseUrl}`;  // ajusta según la URL de tu API

  constructor(private http: HttpClient) { }
  
  getProducts(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl + '/api/list/');
  }

  createProduct(product: Product): Observable<Product> {
    return this.http.post<Product>(this.apiUrl + '/api/products/create/', product);
  }
  
  deleteProduct(id: number): Observable<any> {
    const url = `${this.apiUrl + '/api/products/delete/'}${id}/`;
    return this.http.delete(url);
  }
  updateProduct(product: Product): Observable<Product> {
    const url = `${this.apiUrl + '/api/products/update/'}${product.id}/`;
    return this.http.put<Product>(url, product);
  }

}

