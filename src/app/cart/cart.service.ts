import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import { Product } from '../product/product';
import { IProduct } from '../product/product.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private url="api/cart";

  constructor(private http:HttpClient) {}
    items: IProduct[] = [];

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
        this.items.push(product);
      }
    
      getItems() {
        return this.items;
      }
      
    
      clearCart() {
        this.items = [];
        return this.items;
      }

      deleteProduct(id:number):Observable<{}>
    {
        const headers=new HttpHeaders({'content-type ':'application/json'});
        const url = `${this.url}/${id}`;
        return this.http.delete<IProduct>(url)
          .pipe(
            tap(data => console.log('product deleted: ' + JSON.stringify(data))),
            catchError(this.handleError)
          );

        
    }

      // getShippingPrices() {
      //   return this.http.get<{type: string, price: number}[]>('/assets/shipping.json');
      // }
}