import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Category } from 'src/app/medicare/category';
import { Product } from 'src/app/medicare/product';
import { User } from 'src/app/medicare/user';
import { UserserviceService } from 'src/app/service/userservice.service';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent implements OnInit {

  addForm:FormGroup;
  product:Product = new Product();
  categories : Category[];
  admin : User;
  constructor(private service:UserserviceService, private route:Router) { }

  ngOnInit(): void {
    this.admin = this.service.admin;
    this.service.getCategories().subscribe(data=>{this.categories=data});
  //  this.product = this.service.getProductToEdit();
  //  console.log(this.product);
    this.addForm = new FormGroup({
      productName  : new FormControl(''),
      brand   : new FormControl(''),
      price   : new FormControl(''),
      descp   : new FormControl(''),
      manufacturing : new FormControl(''),
      expiry  : new FormControl(''),
      availableQuantity : new FormControl(''),
      image : new FormControl(''),
      category : new FormControl(''),
    })
  }
  addProduct():void {
    //console.log("category :"+this.addForm.get('category')?.value);
    let cid =  this.addForm.get('category')?.value
    let cat_obj :Category = new Category;
    for(let cat of this.categories){
      if(cid == cat.id){
        cat_obj = cat;
      }
    }
    this.product = this.addForm.value;
    this.product.category = cat_obj;
    this.service.addProduct(this.product).subscribe(data => {console.log(data)});
    this.route.navigate(['/manageproduct']);
  }
  logout():void{
    this.route.navigate(['/adminlogin']);
  }
}
