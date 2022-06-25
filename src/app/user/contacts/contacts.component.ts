import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/medicare/user';
import { UserserviceService } from 'src/app/service/userservice.service';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {
  user: User;
  constructor(private service: UserserviceService, private router:Router) { }

  ngOnInit(): void {
    this.user = this.service.user;
  }
  logout(): void {
    this.service.clearCart();
    this.router.navigate(['/login']);
  }
}
