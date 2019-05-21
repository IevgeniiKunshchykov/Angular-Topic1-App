import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../services/products.service';
import { IProduct } from '../interfaces/iproduct';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products: Array<IProduct>;

  constructor(private productsService: ProductsService, private cartService: CartService) { }

  ngOnInit() {
    this.products = this.productsService.GetProducts();
  }

  onBuy(product: IProduct){
    this.cartService.AddProductToCart(product);
  }  
}
