import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { throwError } from 'rxjs';
import { Product } from '../product/product';
import { CartService } from './cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  //styleUrls: ['./cart.component.css']
})
export class CartComponent {
    items = this.cartService.getItems();
    qty = 1;
    name= "";

    product: Product;

    constructor(
      private cartService: CartService,
      private router: Router
    ) { }

    clearCart() {
        this.items = [];
        return this.items;
      }

      increment(){
          this.qty++;
      }

      decrement(){
          while(this.qty > 1){
              this.qty--;
      }}
      placeOrder() {
        alert("Order placed successfully!!");
      }
  
      deleteProduct(){
        this.items.splice(0,1);
        return this.items;
    }


      
}