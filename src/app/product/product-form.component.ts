import { Component } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Product } from "./product";
import { IProduct } from "./product.model";
import { ProductService } from "./product.service";

@Component({
    selector: 'app-prod-form',
    templateUrl:'./product-form.component.html',
})


export class ProductFormComponent {
    product: Product;
  newProduct = new Product(); //object of Produc cls
  btn = false;
    prod=false;
  constructor(private productService:ProductService){}

  ngOnInit(){

  }
  get jsonProduct() {
    return JSON.stringify(this.newProduct);
  }

  addProduct(p: Product) {
    console.log(this.newProduct);

    this.productService.addProduct(JSON.parse(this.jsonProduct)).subscribe(res=>{
        console.log('ADDED')
    })
  }
  updateProduct(values) {
    console.log(this.newProduct);

    this.productService.updateProduct(JSON.parse(JSON.stringify(this.newProduct))).subscribe(res=>{
       
      console.log('UPDATED')
    })
  }
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

      this.addProduct(this.newProduct);
      //this.updateProduct(this.newProduct);
      this.newProduct = new Product();
      form.reset();
      console.log('submitted');
      this.btn = true;
      this.formSubmitted = false;
    }
  }
    }
    
    



/* 
Object.keys(this.formGroup.controls).forEach(c=> this.newProduct[c]=this.formGroup.controls[c].value);
        this.formSubmitted=true;
        if(this.formGroup.valid){
            this.addProduct(this.newProduct);
            this.newProduct=new Product();
            this.formSubmitted=false;
        }


   
 */
