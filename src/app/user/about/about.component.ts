import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/medicare/user';
import { UserserviceService } from 'src/app/service/userservice.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  user: User;
  constructor(private service: UserserviceService,private route:Router) { }

  ngOnInit(): void {
    this.user = this.service.user;
  }
  logout(): void {
    this.service.clearCart();
    this.route.navigate(['/login']);
  }
}
