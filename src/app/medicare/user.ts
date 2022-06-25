class Address{
    society: string;
    locality: string;
    city: string;
    pincode: number;
    state: string;
}

export class User {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    address: Address
}
  