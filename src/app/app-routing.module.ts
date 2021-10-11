import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { AppComponent } from './app.component';
import { AuthenticationAdminComponent } from './authentication-admin/authentication-admin.component';
import { AuthenticationUserComponent } from './authentication-user/authentication-user.component';
import { CartComponent } from './cart/cart.component';
import { HomeComponent } from './home/home.component';
import { ProductDetailComponent } from './product/product-detail.component';
import { ProductDetailGuard } from './product/product-detail.guard';
import { ProductFormComponent } from './product/product-form.component';
import { ProductComponent } from './product/product.component';
import { UserProductComponent } from './product/user-product.component';
import { UpdateProductComponent } from './update-product/update-product.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  { path:'products', component:ProductComponent },
  { path:'userproducts', component: UserProductComponent },
  { path:'product/:id', canActivate:[ProductDetailGuard], component:ProductDetailComponent },
  { path:'addproduct', component:ProductFormComponent},
  { path:'editproduct/:id', component: UpdateProductComponent },
  { path: 'cart', component: CartComponent },
  { path: 'userlogin', component: AuthenticationUserComponent },
  { path: 'adminlogin', component: AuthenticationAdminComponent },
  { path: 'home', component: HomeComponent },
  { path: 'user', component: UserComponent },
  { path: 'admin', component: AdminComponent },
  { path: '', component: AppComponent },
  // { path:'',redirectTo:'Home', pathMatch:'full' },
  // { path:'**',redirectTo:'Home', pathMatch:'full' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    RouterModule.forChild(routes),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
