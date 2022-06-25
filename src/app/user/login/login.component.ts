import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { User } from 'src/app/medicare/user';
import { UserserviceService } from 'src/app/service/userservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  email:string;
  password:string;
  newuser : User;
  remember : boolean;
  constructor(private userservice:UserserviceService, private route:Router) { }

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
    this.userservice.checkUserLogin(this.email, this.password).subscribe(data => {console.log(data)
      this.newuser = data},
      error => console.log(error));
      if(this.newuser != null){
        this.userservice.isLoggedIn = true;
        this.userservice.user  = this.newuser;  
        this.route.navigate(['/home'])  
      }
      else
        this.route.navigate(['/login'])  
  }
}
