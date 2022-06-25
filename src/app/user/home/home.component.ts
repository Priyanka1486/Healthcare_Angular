import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Category } from 'src/app/medicare/category';
import { Product } from 'src/app/medicare/product';
import { User } from 'src/app/medicare/user';
import { UserserviceService } from 'src/app/service/userservice.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  imgsrc : string = "assets/images/";
  categories :Category[];
  loggedin : boolean = false;
  user: User;
  products: Product[];

  constructor(private service:UserserviceService,private route:Router) { }

  ngOnInit(): void {
    this.loggedin = this.service.isLoggedIn;
    if(this.loggedin)
      this.user = this.service.user;
    this.service.getCategories().subscribe(data => this.categories =data);
    this.service.getMostViewedProduct().subscribe(data => this.products=data);
  }
  catlink(cat:Category){
    this.service.setcatid(cat.id);
    this.route.navigate(['/viewproduct'])
  }
  logout(): void{
    this.service.clearCart();
    this.route.navigate(['/login']);
  }
}
