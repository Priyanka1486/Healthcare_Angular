import { Category } from "./category";

export class Product {
 "id" : number;
 "price" : number;
 "productName" : string;
 "expiry" : Date ;
 "manufactuing" : Date;
 "brand": string;
 "descp":string;
 "availableQuantity" : number;
 "image" : string;
 "category": Category;
}
