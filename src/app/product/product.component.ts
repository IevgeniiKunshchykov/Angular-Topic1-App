import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product';
import { IProduct } from '../interfaces/iproduct';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  public product: Product;
  public newIngredient: string;

  constructor(private productsService: ProductsService) { }

  ngOnInit() {
    this.product = new Product();
  }

  public onAddIngredient(): void {
    this.product .ingredients.push(this.newIngredient);
    this.newIngredient = null;
  }

  public onCreateProduct(): void {
    this.productsService.CreateProduct(this.product);
    this.product = new Product();
    this.newIngredient = null;
  }
}
