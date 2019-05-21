import { Component, OnInit } from '@angular/core';

enum Country {
  USA = 1,
  UK,
  Ukraine
}

export class Product{
  public name: string
  public description: string
  public price: number
  public isAvailable: boolean
  public producer: Country
  public ingredients: Array<string> = [];
}

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  public product: Product;
  public newIngredient: string;
  public basket: Array<Product> = [];

  constructor() { }

  ngOnInit() {
    this.product = new Product();
  }

  public onAddIngredient(): void{
    this.product .ingredients.push(this.newIngredient);
    this.newIngredient = null;
  }

  public onBuy(): void{
    this.basket.push(this.product);
    this.product = new Product();
    this.newIngredient = null;
  }
}
