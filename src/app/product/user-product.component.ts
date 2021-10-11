import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IProduct } from './product.model';
import { ProductService } from './product.service';

@Component({
  selector: 'app-user-product',
  templateUrl: './user-product.html',
  styleUrls: ['./product.component.css']
})
export class UserProductComponent implements OnInit  {
  color="bg-danger";
  errorMessage:string;

  productList:IProduct[];
  listFilter:string='Sports';
  showImage:boolean=false;
  imageWidth:number=50;
  imageMargin:number=20;
  

constructor(private pdtService:ProductService, private router:Router){
  //this.productList=this.model.getProducts();

}
  ngOnInit(): void {
    this.pdtService.getProducts().subscribe({
      next:products=>{
        this.productList=products;
      },
      error:err => this.errorMessage=err
    })
  }
  toggleImage():void{
    this.showImage=!this.showImage;
  }

  doUpdate(p){
    this.pdtService.setter(p);
    this.router.navigate(['/editproduct/{{p.id}}']);
  }
  getProducts(){
  }

  deleteProducts(){}
  ratingReview:string;
  onratingClicked(message:string):void{
    this.ratingReview = "Rating review "+ message
  }

}
  