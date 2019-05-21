import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { ProductsService } from '../services/products.service';
import { IProduct } from '../interfaces/iproduct';
import { CartService } from '../services/cart.service';

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
    this.GetProducts();
    this.sub = this.productsService.productsChanged$.subscribe(
      () => this.GetProducts());
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  onBuy(product: IProduct) {
    this.cartService.AddProductToCart(product);
  }

  private GetProducts() {
    this.products = null;
    this.products = this.productsService.GetProducts();
  }
}
