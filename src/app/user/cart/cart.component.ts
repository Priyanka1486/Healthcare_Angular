import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cart } from 'src/app/medicare/cart';
import { User } from 'src/app/medicare/user';
import { UserserviceService } from 'src/app/service/userservice.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  carts : Cart[];
  imgsrc : string = "assets/images/";
  total_amount : number = 0;
  user: User;
  
  constructor(private route: ActivatedRoute,private service:UserserviceService,private router:Router) { }

  ngOnInit(): void {
    this.user = this.service.user;
    this.carts = this.service.getCartItems();
    for(var i=0 ; i < this.carts.length; i++){
        this.total_amount = this.total_amount + (this.carts[i].quantity * this.carts[i].product.price);
    }
  }
  removeFromCart(cart:Cart): void {
    let cart_id = cart.product.id;
    console.log(this.carts);
    for(var i=0 ; i < this.carts.length; i++){
      if(this.carts[i].product.id == cart_id) {
        this.total_amount = this.total_amount - (this.carts[i].quantity * this.carts[i].product.price);
        this.carts.splice(i,1);
        break;
      }
    }
  }
  logout(): void{
    this.service.clearCart();
    this.router.navigate(['/login']);    
  }
}
