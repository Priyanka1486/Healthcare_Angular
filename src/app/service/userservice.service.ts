import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cart } from '../medicare/cart';
import { Category } from '../medicare/category';
import { Order } from '../medicare/order';
import { Product } from '../medicare/product';
import { User } from '../medicare/user';

@Injectable({
  providedIn: 'root'
})
export class UserserviceService {
user : User;
admin : User;
catid :number;
isLoggedIn : boolean;
//loginUser : User;
product : Product;
cartList : Cart[] = [];
private baseurl :string = "http://localhost:8080/api";
constructor(private http:HttpClient) { }
 
  registerUser(user:User):Observable<User> {
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this.http.post<User>(this.baseurl+"/registeruser",user,{headers:headers});
  }

  getUsers():Observable<any>{
    return this.http.get(this.baseurl+"/getalluser");
  }

  checkUserLogin(email: string,password :string):Observable<any>{
    return this.http.get(this.baseurl+"/checkuserlogin?email="+email+"&password="+password);
  }

  getProducts():Observable<Product[]>{
    return this.http.get<Product[]>(this.baseurl+"/allproducts");
  }
  setcatid(id:number){
    this.catid = id;
  }
  getCatProducts1():Observable<Product[]>{
    return this.http.get<Product[]>(this.baseurl+"/catproducts?id="+this.catid);
  }
  getCatProducts(id:number):Observable<Product[]>{
    return this.http.get<Product[]>(this.baseurl+"/catproducts?id="+id);
  }

  //// Order placed 
  orderPlaced(order:Order):Observable<Order> {
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this.http.post<Order>(this.baseurl+"/orderplaced",order,{headers:headers});
  }

  placeOrder():Observable<Order>{
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this.http.post<Order>(this.baseurl+"/orderplaced",this.cartList,{headers:headers});
  }
  ////local cart info
  addToCart(cart:Cart):void{
    this.cartList.push(cart);
  }
  getCartItems(){
    return this.cartList;
  }
  clearCart(){
    this.cartList = [];
    return this.cartList;
  }
  //////// Admin services
  
  adminLogin1(email:string,password:string):Observable<any>{
    let loginId={"email" : email, "password" : password};
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this.http.get(this.baseurl+"/adminlogin?email="+email+"&password="+password);
  }
  adminLogin(email: string,password :string):Observable<any>{
    return this.http.get(this.baseurl+"/adminlogin?email="+email+"&password="+password);
  }

  editProduct(product:Product):void{
    this.product = new Product();
    this.product = product;
  } 
  getProductToEdit():Product{
    return this.product;
  }
  updateProduct(product:Product):Observable<Product>{
    return this.http.patch<Product>(this.baseurl+"/updateproduct", product)
  }
  addProduct(product:Product):Observable<Product>{
    let headers = new HttpHeaders();
    headers.append("Content-Type", "application/json");
    return this.http.post<Product>(this.baseurl+"/addproduct",product,{headers:headers});
  }
  deleteProduct(id:number):Observable<String>{
    return this.http.delete<String>(this.baseurl+"/deleteproduct?id="+id);
  }
  getCategories():Observable<Category[]>{
    return this.http.get<Category[]>(this.baseurl+"/catlist")
  }
  getCatById(id:number):Observable<Category>{
    return this.http.get<Category>(this.baseurl+"/catname?id="+id);
  }
  getProductById(id:number):Observable<Product>{
    return this.http.get<Product>(this.baseurl+"/getproduct?id="+id);
  }
  getMostViewedProduct():Observable<Product[]>{
    return this.http.get<Product[]>(this.baseurl+"/mostviewedproduct");
  }
}
