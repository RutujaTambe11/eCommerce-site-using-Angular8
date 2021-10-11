import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../cart/cart.service';
import { Product } from '../product/product';

@Component({
  selector: 'app-admin-cart',
  templateUrl: './admin-cart.component.html',
  styleUrls: ['./admin-cart.component.css']
})
export class AdminCartComponent implements OnInit {
  items = this.cartService.getItems();
  qty = 1;
  name= "";

  product: Product;

  cName="admin-cart";

  constructor(
    private cartService: CartService,
    private router: Router
  ) { }
  ngOnInit(): void { }

  clearCart() {
      this.items.splice(0,1);
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

    deleteProduct():void{
      this.cartService.deleteProduct(this.product.id).subscribe(response => {
          console.log(response);
          this.router.navigate(['/cart']);
      }, error => {
          console.log(error);
      })
  }


}
