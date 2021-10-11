import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import Validation from './validation';
import { Product } from '../product/product';

@Component({
  selector: 'app-authentication-admin',
  templateUrl: './authentication-admin.component.html',
  styleUrls: ['./authentication-admin.component.css']
})
export class AuthenticationAdminComponent implements OnInit {

  Name : "admin-auth";

  form: FormGroup;
  submitted = false;

  product: Product;
  newProduct = new Product();


  constructor(private formBuilder: FormBuilder, private router: Router) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group(
      {
        fullname: ['', Validators.required],
        username: [
          '',
          [
            Validators.required,
            Validators.minLength(6),
            Validators.maxLength(20)
          ]
        ],
        email: ['', [Validators.required, Validators.email]],
        password: [
          '',
          [
            Validators.required,
            Validators.minLength(6),
            Validators.maxLength(40)
          ]
        ],
        confirmPassword: ['', Validators.required],
        acceptTerms: [false, Validators.requiredTrue]
      },
      {
        validators: [Validation.match('password', 'confirmPassword')]
      }
    );
  }

  get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }

  onSubmit(): void {
    this.submitted = true;

    if (this.form.invalid) {
      return;
    }
    else {

    console.log(JSON.stringify(this.form.value, null, 2));
    
  }
  }

  login() {
    this.submitted = true;

    if (this.form.valid && this.submitted) {
      // this.router.navigate(['/products']);
      console.log("route");
      this.router.navigate(['/products']);
     // this.URL = "http://localhost:4200/products"
    }
    
  }

  onReset(): void {
    this.submitted = false;
    this.form.reset();
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
      console.log("route");
      this.router.navigate(['/products']);
        
      // this.updateProduct(this.newProduct);
      // this.newProduct = new Product();
      // form.reset();
      // console.log('submitted');
      // this.btn = true;
      // this.formSubmitted = false;
    }
  }
}
