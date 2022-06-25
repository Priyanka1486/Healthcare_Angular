import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './user/login/login.component';
import { RegisterComponent } from './user/register/register.component';
import { UserserviceService } from './service/userservice.service';
import { ViewproductComponent } from './user/viewproduct/viewproduct.component';
import { HomeComponent } from './user/home/home.component';
import { CartComponent } from './user/cart/cart.component';
import { CheckoutComponent } from './user/checkout/checkout.component';
import { ManageproductComponent } from './admin/manageproduct/manageproduct.component';
import { AdminloginComponent } from './admin/adminlogin/adminlogin.component';
import { EditproductComponent } from './admin/editproduct/editproduct.component';
import { AddproductComponent } from './admin/addproduct/addproduct.component';
import { CatproductComponent } from './user/catproduct/catproduct.component';
import { AboutComponent } from './user/about/about.component';
import { ContactsComponent } from './user/contacts/contacts.component';
import { ProductdetailComponent } from './user/productdetail/productdetail.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    RegisterComponent,
    ViewproductComponent,
    HomeComponent,
    CartComponent,
    CheckoutComponent,
    ManageproductComponent,
    AdminloginComponent,
    EditproductComponent,
    AddproductComponent,
    CatproductComponent,
    AboutComponent,
    ContactsComponent,
    ProductdetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [UserserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
