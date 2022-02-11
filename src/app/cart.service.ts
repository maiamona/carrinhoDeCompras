import { Injectable } from '@angular/core';

import { products } from './products';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class CartService {

  
items = products;
constructor(private http:HttpClient) {}
addToCart(product){
  this.items.push(product);
}

getItems() {
  return this.items;
}

clearCart() {
  this.items = [];
  return this.items;
}
 getShippingPrices() {
    return this.http.get('/assets/shipping.json');
  }
}