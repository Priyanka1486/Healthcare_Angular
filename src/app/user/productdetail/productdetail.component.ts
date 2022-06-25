import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/medicare/product';
import { User } from 'src/app/medicare/user';
import { UserserviceService } from 'src/app/service/userservice.service';

@Component({
  selector: 'app-productdetail',
  templateUrl: './productdetail.component.html',
  styleUrls: ['./productdetail.component.css']
})
export class ProductdetailComponent implements OnInit {
  id : any;
  user: User;
  imgsrc : string = "assets/images/";
  product : Product;
  constructor(private service: UserserviceService ,private act_route:ActivatedRoute,private route:Router) { }

  ngOnInit(): void {
    this.user = this.service.user;
    this.act_route.paramMap.subscribe((params) => {this.id = (params.get('id'))});
    this.service.getProductById(this.id).subscribe(data=>this.product = data);
  }
  addToCart(value:string):void{
    var cartinfo = { 'product' : this.product , 'quantity' : Number(value)};  
    this.service.addToCart(cartinfo);
    this.route.navigate(['/viewproduct']);
  }
  logout(): void {
    this.service.clearCart();
    this.route.navigate(['/login']);
  }
}
