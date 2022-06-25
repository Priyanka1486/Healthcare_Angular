import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { User } from 'src/app/medicare/user';
import { UserserviceService } from 'src/app/service/userservice.service';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent implements OnInit {
  loginForm: FormGroup;
  email:string;
  password:string;
  newuser : User;
  remember : boolean;
  userlist : Observable<User[]>;
  
  constructor(private service:UserserviceService,private route:Router) { }

  ngOnInit(): void {
    this.loginForm = new FormGroup({ 
      email : new FormControl('',Validators.required),
      password : new FormControl('',Validators.required),
      rememberme : new FormControl('')
    })
  }
  login():void{
    this.remember = this.loginForm.get('rememberme')?.value;
    this.email = this.loginForm.get('email')!.value;
    this.password =this.loginForm.get('password')!.value; 
    this.service.adminLogin(this.email, this.password).subscribe(data =>this.newuser = data );  
    if(this.newuser != null){
      this.service.isLoggedIn = true;
      this.service.admin = this.newuser;
      this.route.navigate(['/manageproduct']);
    }
    else{
      this.route.navigate(['/adminlogin']);
    } 
  }
}
