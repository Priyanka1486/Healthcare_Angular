import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './user/cart/cart.component';
import { CheckoutComponent } from './user/checkout/checkout.component';
import { HomeComponent } from './user/home/home.component';
import { LoginComponent } from './user/login/login.component';
import { RegisterComponent } from './user/register/register.component';
import { ViewproductComponent } from './user/viewproduct/viewproduct.component';
import { ManageproductComponent } from './admin/manageproduct/manageproduct.component';
import { AdminloginComponent } from './admin/adminlogin/adminlogin.component';
import { EditproductComponent } from './admin/editproduct/editproduct.component';
import { AddproductComponent } from './admin/addproduct/addproduct.component';
import { CatproductComponent } from './user/catproduct/catproduct.component';
import { AboutComponent } from './user/about/about.component';
import { ContactsComponent } from './user/contacts/contacts.component';
import { ProductdetailComponent } from './user/productdetail/productdetail.component';
const routes: Routes = [
  { path:'login', component: LoginComponent },
  { path:'register', component: RegisterComponent},
  { path:'viewproduct', component: ViewproductComponent},
  { path:'home', component: HomeComponent },
  { path: '', redirectTo: '/home',pathMatch: 'full'},
  { path:'cart', component: CartComponent},
  { path:'checkout', component: CheckoutComponent},
  { path:'adminlogin', component: AdminloginComponent},
  { path:'manageproduct', component: ManageproductComponent },
  { path:'editproduct', component: EditproductComponent},
  { path:'addproduct', component: AddproductComponent},
  { path: 'catproduct/:id', component: CatproductComponent},
  { path: 'productdetail/:id', component: ProductdetailComponent},
  { path: 'about', component: AboutComponent},
  { path:'contacts', component: ContactsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
