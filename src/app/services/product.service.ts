import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private httpClient : HttpClient) { }
  productList(): Observable<any>{
    // return this.httpClient.get<any>('http://localhost:8000/api/getEvent');
    return this.httpClient.get<any>('https://reqres.in/api/products');
  }
}
