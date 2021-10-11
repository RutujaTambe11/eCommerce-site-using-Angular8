import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';
import { ProductService } from './product/product.service';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { ProductData } from './product/product.data';
import { HttpClientModule } from '@angular/common/http';
import { ProductDetailComponent } from './product/product-detail.component';
import { ProductFormComponent } from './product/product-form.component';
import { DataService } from './data/data.service';
import { UpdateProductComponent } from './update-product/update-product.component';
import { CartComponent } from './cart/cart.component';
import { NavbarComponent } from './navbar/navbar.component';
import { UserComponent } from './user/user.component';
import { AdminComponent } from './admin/admin.component';
import { AuthenticationAdminComponent } from './authentication-admin/authentication-admin.component';
import { AuthenticationUserComponent } from './authentication-user/authentication-user.component';
import { UserProductComponent } from './product/user-product.component';
import { StarComponent } from './star/star.component';
import { AdminCartComponent } from './admin-cart/admin-cart.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductComponent,
    UserProductComponent,
    ProductDetailComponent,
    ProductFormComponent,
    UpdateProductComponent,
    CartComponent,
    AuthenticationUserComponent,
    NavbarComponent,
    UserComponent,
    AdminComponent,
    AuthenticationAdminComponent,
    StarComponent,
    AdminCartComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    InMemoryWebApiModule.forRoot(ProductData),
    
    HttpClientModule
    
  ],
  providers: [DataService,ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
