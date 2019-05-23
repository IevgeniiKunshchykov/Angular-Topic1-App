import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { ProductsService } from '../services/products.service';
import { IProduct } from '../interfaces/iproduct';
import { CartService } from '../../cart/services/cart.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit, OnDestroy {
  products: Array<IProduct>;

  private sub: Subscription;

  constructor(private productsService: ProductsService, private cartService: CartService) { }

  ngOnInit() {
    this.getProducts();
    this.sub = this.productsService.productsChanged$.subscribe(
      () => this.getProducts());
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  onBuy(product: IProduct) {
    this.cartService.addProductToCart(product);
  }

  private getProducts() {
    this.products = null;
    this.products = this.productsService.getProducts();
  }
}
