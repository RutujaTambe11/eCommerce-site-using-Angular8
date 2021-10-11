import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../product/product';
import { IProduct } from '../product/product.model';
import { ProductService } from '../product/product.service';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit {

  editProduct = new FormGroup({
    name:new FormControl(''),
    price: new FormControl(),
    category: new FormControl('')

  })
  product: IProduct;
  newProduct = new Product(); //object of Produc cls
  btn = false;
    prod=false;
  errorMessage: any;
  constructor(private productService:ProductService, private router:Router, private route: ActivatedRoute){}

  ngOnInit():void{
    let id = +this.route.snapshot.paramMap.get('id');
    this.productService.getProduct(id).subscribe({
      next:products=>{
        this.product = products;
        console.log(this.product);
      }
    })
  }

  // edit(obj){
  //   console.log("object");
  //   this.product.name = obj.name;
  //   this.product.price = obj.price;
  //   this.product.category = obj.category;
  //   this.product.id = 
  // }


  get jsonProduct() {
    return JSON.stringify(this.newProduct);
  }

  // addProduct(p: Product) {
  //   console.log(this.newProduct);

  //   this.productService.addProduct(JSON.parse(this.jsonProduct)).subscribe(res=>{
  //       console.log('ADDED')
  //   })
  // }


  edit(){
    this.productService.updateProduct(this.product).subscribe({
      next:products=>{
        this.product = products;
        console.log(this.product);
      },
      error:err => this.errorMessage = err
    })
  }

  updateProduct(p: Product) {
    console.log(this.newProduct);

    this.productService.updateProduct(JSON.parse(this.jsonProduct)).subscribe(res=>{
        console.log('UPDATED')
    })
  }
//   deleteProduct(p: Product):void{
//     this.productService.updateProduct(this.product.id).subscribe(response => {
//         console.log(response);
//         this.router.navigate(['/products']);
//     }, error => {
//         console.log(error);
//     })
// }
  getValidationMessages(state: any, thingName?: string) {
    let thing: string = state.path || thingName;
    let messages: string[] = [];
    if (state.errors) {
      for (let errorName in state.errors) {
        switch (errorName) {
          case 'required':
            messages.push(`you must enter ${thing}`);
            break;
          case 'minlength':
            messages.push(
              `A ${thing} should have atleast ${state.errors['minlength'].requiredLength} characters`
            );
            break;
          case 'pattern':
            messages.push(` A ${thing} contains illigal characters`);
            break;
        }
      }
    }
    return messages;
  }

  getFormValidationSummary(form: NgForm): string[] {
    let messages: string[] = [];
    Object.keys(form.controls).forEach((k) => {
      this.getValidationMessages(form.controls[k], k).forEach((m) => {
        messages.push(m);
      });
    });

    return messages;
  }

  formSubmitted: boolean = false;
  submitForm(form: NgForm) {
    this.formSubmitted = true;
    console.log('submitted');
    if (form.valid) {
        
      //this.updateProduct(this.newProduct);
      //this.newProduct = new Product();
      form.reset();
      console.log('submitted');
      this.btn = true;
      this.formSubmitted = false;
    }
  }

}
