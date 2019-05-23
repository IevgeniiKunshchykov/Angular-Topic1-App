import { Component, OnInit } from '@angular/core';
import { Product } from '../product-list/model/product';
import { IProduct } from '../product-list/interfaces/iproduct';
import { ProductsService } from '../product-list/services/products.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  public product: Product;

  constructor(private productsService: ProductsService) { }

  ngOnInit() {
    this.product = new Product();
  }

  public onAddIngredient(newIngredient: string): void {
    this.product.ingredients.push(newIngredient);
  }

  public onCreateProduct(): void {
    this.productsService.createProduct(this.product);
    this.product = new Product();
  }
}
