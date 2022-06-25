import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Product } from 'src/app/medicare/product';
import { User } from 'src/app/medicare/user';
import { UserserviceService } from 'src/app/service/userservice.service';

@Component({
  selector: 'app-editproduct',
  templateUrl: './editproduct.component.html',
  styleUrls: ['./editproduct.component.css']
})
export class EditproductComponent implements OnInit {

  editForm:FormGroup;
  product:Product = new Product();
  pid:number;
  admin:User;
  constructor(private service:UserserviceService, private route:Router) { }

  ngOnInit(): void {
    this.admin = this.service.admin;
    this.product = this.service.getProductToEdit();
    this.pid =this.product.id;
    console.log(this.product);
    this.editForm = new FormGroup({
      productName  : new FormControl(this.product.productName),
      brand   : new FormControl(this.product.brand),
      price   : new FormControl(this.product.price),
      descp   : new FormControl(this.product.descp),
      manufacturing : new FormControl(this.product.manufactuing),
      expiry  : new FormControl(this.product.expiry),
      availableQuantity : new FormControl(this.product.availableQuantity),
      image: new FormControl(this.product.image)
    })
    }
  
  update():void {
    this.product = this.editForm.value;
    this.product.id = this.pid;
    this.service.updateProduct(this.product).subscribe(data => {console.log(data)});
    this.route.navigate(['/manageproduct']);
  }
  logout():void{
    this.route.navigate(['/adminlogin']);
  }
}
