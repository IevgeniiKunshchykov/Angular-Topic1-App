import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

import { IProduct } from '../../product-list/interfaces/iproduct';
import { CartItem } from '../model/cartitem';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartChanged = new Subject();
  private cartItems: Array<CartItem> = [];

  cartChanged$ = this.cartChanged.asObservable();

  constructor() { }

  getCartItem(): Array<CartItem> {
    return this.cartItems;
  }

  addProductToCart(product: IProduct): void {
    const cartItem = new CartItem();
    cartItem.count = 1;
    cartItem.product = product;
    this.cartItems.push(cartItem);

    this.cartChanged.next();
  }

  removeProductFromCart(cartItem: CartItem): void {
    const index = this.cartItems.indexOf(cartItem, 0);
    this.cartItems.splice(index, 1);

    this.cartChanged.next();
  }
}
