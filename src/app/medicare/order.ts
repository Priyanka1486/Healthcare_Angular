import { Cart } from "./cart";
import { User } from "./user";

export class Order {
    "id"?:number;
    "orderedDate" : Date;
    "totalAmount" : number;
    "user" : User;
}
