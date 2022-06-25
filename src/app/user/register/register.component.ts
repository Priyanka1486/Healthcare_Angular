import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Product } from 'src/app/medicare/product';
import { User } from 'src/app/medicare/user';
import { UserserviceService } from 'src/app/service/userservice.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registrationForm:FormGroup;
  user : User;
  newuser : User;
  products : Observable<Product[]>;
  userlist : Observable<User>

  constructor(private service : UserserviceService,private route:Router) { }

  ngOnInit(): void {
  this.registrationForm = new FormGroup({
    firstName  : new FormControl(''),
    lastName   : new FormControl(''),
    email      : new FormControl(''),
    password   : new FormControl(''),
    address    : new FormGroup({
      society  : new FormControl(''),
      locality : new FormControl(''),
      city     : new FormControl(''),
      pincode  : new FormControl(''),
      state    : new FormControl(''),
    })
  })
  }
  register():void{
  
    this.user = this.registrationForm.value;
    this.service.registerUser(this.user).subscribe(data => {this.newuser = data},
    error => {console.log(error)});
   // if(this.newuser!=null)
      this.route.navigate(['/login']);
  
      //this.getProductList();
     // this.userList();
     // this.route.navigate(['/login']);
  }

  getProductList():void{
 
    this.products = this.service.getProducts(); 
     console.log(this.products);
     this.products.forEach(value => console.log(value));
    }

    userList():void{
      this.userlist = this.service.getUsers(); 
      console.log(this.userlist);
      this.userlist.forEach(value => console.log(value));
    }
  
}
