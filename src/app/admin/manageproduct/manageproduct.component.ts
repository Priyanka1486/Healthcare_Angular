import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/medicare/product';
import { User } from 'src/app/medicare/user';
import { UserserviceService } from 'src/app/service/userservice.service';

@Component({
  selector: 'app-manageproduct',
  templateUrl: './manageproduct.component.html',
  styleUrls: ['./manageproduct.component.css']
})
export class ManageproductComponent implements OnInit {

  products:Product[]=[];
  imgsrc : string = "assets/images/";
  str: String = "";
  admin: User;
  constructor(private service : UserserviceService, private route:Router) { }

  ngOnInit(): void {
    this.admin = this.service.admin;
    this.getProductList();  
  }
  getProductList():void{
    this.service.getProducts().subscribe(data => this.products=data); 
  }
  editProduct(product:Product,value:boolean):void{
    if(value == false){
      alert("First Enable it");
    }
    else{
      this.service.editProduct(product);
      this.route.navigate(['/editproduct']);  
    }
  }
 deleteProduct(id:number):void{
  this.service.deleteProduct(id).subscribe(data => this.str =data);
 // alert(this.str);
 console.log(this.str);
 var i=0;
 while(this.products.length > 0){
    if(this.products[i].id == id){
      this.products.splice(i,1);
      break;
    }
    i++;
 } 
  this.route.navigate(['/manageproduct']);
 }
 
 logout():void{
  this.route.navigate(['/adminlogin']);
}
}
