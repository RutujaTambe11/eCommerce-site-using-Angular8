import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse, HttpHeaders } from "@angular/common/http";
import { IProduct } from "./product.model";
import {catchError, map, tap} from 'rxjs/operators';
import { Observable, throwError } from "rxjs";
import { Product } from "./product";
@Injectable({
    providedIn:'root'
})
export class ProductService{
    setter(p: any) {
      throw new Error('Method not implemented.');
    }
    id: any;
   // private _http: any;
    post(arg0: any) {
        throw new Error("Method not implemented.");
    }

    
    URL = "http://localhost:4200/product"
    private url="api/products";
    postData: any;
    constructor(private http:HttpClient, private _http:HttpClient){

    }
    getProducts():Observable<IProduct[]>{
        return this.http.get<IProduct[]>(this.url).pipe(tap(data=>console.log("All"+ JSON.stringify(data))),
        catchError(this.handleError)
        )
    }

    /*getProduct():Observable<IProduct[]>{
        return this.http.get<IProduct[]>(this.url).find()
        
    }*/

    getCurrentData(id: any){
        return this._http.get(`${this.URL}/${id}`)
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
    productTitle="Sports service";
    getProduct(id:number):Observable<IProduct>{
        const url = `${this.url}/${id}`;
        return this.http.get<IProduct>(url)
          .pipe(
            tap(data => console.log('getProduct: ' + JSON.stringify(data))),
            catchError(this.handleError)
          );

    }

    addProduct(product:IProduct):Observable<IProduct>{
        
        
        const headers=new HttpHeaders({'content-type ':'application/json'});
        //product.id =null;
        return this.http.post<IProduct>(this.url, product, {headers}).pipe( tap(data => 
            console.log('product added: ' + JSON.stringify(data))),
        catchError(this.handleError)
        );
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
    updateProduct(product:Product):Observable<Product>{
        
        
        const headers=new HttpHeaders({'content-type ':'application/json'});
        
        const url = `${this.url}/${product.id}`;
        return this.http.put<IProduct>(url, product , {headers})
          .pipe(
            tap(data => console.log('product update : ' + product.id)),
            map(()=>product),
            catchError(this.handleError)
          );
    }


    }


    
 


/*   [ {"id":1, "name":"Shirt", "category":"clothing brand", "price":375.8, "imageUrl":"./assets/images/book.jpg","rating":2.5},
            {"id":2, "name":"shirt", "category":"clothing brand", "price":375.8, "imageUrl":"./assets/images/book.jpg","rating":2.5}
            
        ]
        
        
         new IProduct(1, "Shirt", "clothing brand", 375.8, "./assets/images/book.jpg",2.5),
            new IProduct(2, "football", "sports accessories", 575.45,"./assets/images/shoes.jpg",3),
            new IProduct(3, "shoes", "footwear", 2999,"",4.5),
            new IProduct(4, "table", "furniture", 5000,"",3.4),
            new IProduct(5, "Books", "stationary", 400,"",5),
        );*/