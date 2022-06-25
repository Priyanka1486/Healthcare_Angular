import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cart } from 'src/app/medicare/cart';
import { Order } from 'src/app/medicare/order';
import { User } from 'src/app/medicare/user';
import { UserserviceService } from 'src/app/service/userservice.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  carts : Cart[]=[];
  order : Order = new Order;
  getorder :Order = new Order;
  imgsrc : string = "assets/images/";
  str: string ="";
  user: User;
  constructor(private service:UserserviceService,private route:Router) { }

  ngOnInit(): void {
  /*
    this.carts = this.service.getCartItems();  
    this.order.orderedDate = new Date();
    this.order.cart = this.carts;
    for(let a of this.carts)
      console.log(a.product)
    let totalamount = 0;
    for(let cart of this.carts){
      this.order.cart.push(cart);
      let amount = cart.product.price;
      amount = amount* cart.quantity;
      totalamount = totalamount + amount;
    }
    this.order.totalAmount = totalamount;
    this.service.orderPlaced(this.order).subscribe(data=>this.getorder);
    */
    if(this.service.isLoggedIn){
      this.user = this.service.user;
      this.carts = this.service.getCartItems();  
      this.service.placeOrder().subscribe(data=>this.getorder = data);
      this.service.clearCart();
    }
    else
      this.route.navigate(['/login'])  
  }
  logout():void{
    this.service.clearCart();
    this.route.navigate(['/login']);

  }
}
