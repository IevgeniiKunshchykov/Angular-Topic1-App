import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

import { IProduct } from '../interfaces/iproduct';
import { CartItem } from '../models/cartitem';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartChanged = new Subject();
  private cartItems: Array<CartItem> = [];

  cartChanged$ = this.cartChanged.asObservable();

  constructor() { }

  GetCartItem(): Array<CartItem> {
    return this.cartItems;
  }

  AddProductToCart(product: IProduct): void {
    const cartItem = new CartItem();
    cartItem.count = 1;
    cartItem.product = product;
    this.cartItems.push(cartItem);

    this.cartChanged.next();
  }

  RemoveProductFromCart(cartItem: CartItem): void {
    const index = this.cartItems.indexOf(cartItem, 0);
    this.cartItems.splice(index, 1);

    this.cartChanged.next();
  }
}
