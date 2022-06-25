import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Cart } from 'src/app/medicare/cart';
import { Product } from 'src/app/medicare/product';
import { User } from 'src/app/medicare/user';
import { UserserviceService } from 'src/app/service/userservice.service';
@Component({
  selector: 'app-viewproduct',
  templateUrl: './viewproduct.component.html',
  styleUrls: ['./viewproduct.component.css']
})
export class ViewproductComponent implements OnInit {
  searchForm  : FormGroup;
  searchText : string;
  products:Product[];
  userlist : Observable<User>
  cart : Cart[] = [];
  user:User;
  imgsrc : string = "assets/images/";
  constructor(private service:UserserviceService, private router:Router) { }

  ngOnInit(): void {
    this.searchForm = new FormGroup({ 
      searchText: new FormControl('',Validators.required),
    });  
    this.user = this.service.user;
    this.getProductList();  
    // this.userList();
  }
getProductList():void{
 
//  this.service.getCatProducts().subscribe(data => {this.products=data});
   this.service.getProducts().subscribe(data => this.products=data); 
  // console.log(this.products);
  // this.products.forEach(value => console.log(value));
  }
  addToCart(product:Product,value:string):void{
    
    var cartinfo = { 'product' : product , 'quantity' : Number(value)};  
    this.service.addToCart(cartinfo);
    console.log(this.cart);
  }
  userList():void{
    this.userlist = this.service.getUsers(); 
    console.log(this.userlist);
    this.userlist.forEach(value => console.log(value));
  }
  getValue(product:Product):void{
    
  }
  logout():void{
    this.service.clearCart();
    this.router.navigate(['/login']);
  }
  search():void{
    this.searchText = this.searchForm.get('search')?.value;

  }
}
