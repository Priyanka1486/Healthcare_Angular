import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cart } from 'src/app/medicare/cart';
import { Category } from 'src/app/medicare/category';
import { Product } from 'src/app/medicare/product';
import { User } from 'src/app/medicare/user';
import { UserserviceService } from 'src/app/service/userservice.service';

@Component({
  selector: 'app-catproduct',
  templateUrl: './catproduct.component.html',
  styleUrls: ['./catproduct.component.css']
})
export class CatproductComponent implements OnInit {

  products :Product[];
  cart : Cart[] = [];
  id: any;
  imgsrc : string = "assets/images/";
  cat : Category;
  user: User;
  constructor(private service : UserserviceService,private route:ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
    this.user = this.service.user;
    this.route.paramMap.subscribe((params) => {this.id = (params.get('id'))});
    this.service.getCatById(this.id).subscribe(data=> {this.cat = data});
    this.service.getCatProducts(this.id).subscribe(data => {this.products=data});
    if(this.products.length==0){
      
    }
  }
  addToCart(product:Product,value:string):void{
    var cartinfo = { 'product' : product , 'quantity' : Number(value)};  
    this.service.addToCart(cartinfo);
    console.log(this.cart);
  }
  logout():void{
    this.service.clearCart();
    this.router.navigate(['/login']);
  }
}
