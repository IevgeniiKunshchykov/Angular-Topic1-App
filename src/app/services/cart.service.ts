import { Injectable } from '@angular/core';
import { IProduct } from '../interfaces/iproduct';
import { CartItem } from '../models/cartitem';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cartItems: Array<CartItem> = [];

  constructor() { }

  AddProductToCart(product: IProduct):void{
    var cartItem = new CartItem();
    cartItem.count = 1;
    cartItem.product = product;
    this.cartItems.push(cartItem);
  }

  RemoveProductFromCart(cartItem: CartItem):void{
    var index = this.cartItems.indexOf(cartItem, 0);
    this.cartItems.splice(index, 1);
  }
}
