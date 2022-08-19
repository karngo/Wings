import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http"

@Injectable({
  providedIn: 'root'
})

export class ServerService {
  constructor(private httpClient: HttpClient) { }

  PRODUCTS_URL: string = "https://fakestoreapi.com/products"

  getProducts() {
    return this.httpClient.get(this.PRODUCTS_URL)
  }
}
