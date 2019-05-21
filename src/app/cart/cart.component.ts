import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { CartService } from '../services/cart.service';
import { CartItem } from '../models/cartitem';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit, OnDestroy {
  cartItems: Array<CartItem>;

  private sub: Subscription;

  constructor(private cartService: CartService) { }

  ngOnInit() {
    this.GetCartItems();
    this.sub = this.cartService.cartChanged$.subscribe(
      () => this.GetCartItems());
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  onRemoveFromCart(cartItem: CartItem) {
    this.cartService.RemoveProductFromCart(cartItem);
  }

  private GetCartItems() {
    this.cartItems = null;
    this.cartItems = this.cartService.GetCartItem();
  }
}
