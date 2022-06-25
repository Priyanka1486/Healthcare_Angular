import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserserviceService } from '../service/userservice.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  loggedin = false;
  constructor(public service: UserserviceService, private route:Router) { }

  ngOnInit(): void {
    this.loggedin = this.service.isLoggedIn;
  }
  logout(){
    this.route.navigate(['/login'])
    this.service.cartList = [];
  }
}
