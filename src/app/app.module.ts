import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './components/product/product.component';
import { ProductListComponent } from './components/product-list/components/product-list.component';
import { ProductsService } from './components/product-list/services/products.service';
import { CartComponent } from './components/cart/components/cart.component';
import { CartService } from './components/cart/services/cart.service';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    ProductListComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [ProductsService, CartService],
  bootstrap: [AppComponent]
})
export class AppModule { }
