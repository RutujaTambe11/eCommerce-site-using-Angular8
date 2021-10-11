import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
//import { Observable } from "rxjs";
//import { IProduct } from "./product.model";
import { HttpClient, HttpErrorResponse, HttpHeaders } from "@angular/common/http";
import { IProduct } from "./product.model";
import {catchError, map, tap} from 'rxjs/operators';
import { Observable, throwError } from "rxjs";
import { Product } from "./product";
import { ProductService } from "./product.service";
import { CartService } from "../cart/cart.service";

@Component({
    selector: 'app-prod-detail',
    templateUrl:'./product-detail.component.html',

})
export class ProductDetailComponent implements OnInit{
    pageTitle:string="Product deatil page";
     product:Product
  

    constructor(private cartService: CartService, private route:ActivatedRoute, private router:Router, private productService:ProductService,private http:HttpClient){

    }

    private handleError(err:HttpErrorResponse){
        let errorMessage='';

        if(err.error instanceof ErrorEvent){
            errorMessage=`An error occured ${err.error.message}`
        }
        else {
            errorMessage=`server returned code ${err.status}, error message is : ${err.message}`
        }

        return throwError(errorMessage);

    }


    addToCart(product: IProduct) {
        this.cartService.addToCart(product);
        window.alert('Your product has been added to the cart!');
      }

    ngOnInit(){
        let id= +this.route.snapshot.paramMap.get('id')
        this.pageTitle += `:${id}`;
        this.productService.getProduct(id).subscribe(products => {
            this.product = products;
            console.log(products);
        }, error => {
            console.log(error);
        })
        
    }

    deleteProduct():void{
        this.productService.deleteProduct(this.product.id).subscribe(response => {
            console.log(response);
            this.router.navigate(['/products']);
        }, error => {
            console.log(error);
        })
    }

    onBack():void{
        this.router.navigate(['/products'])
    }

    

}