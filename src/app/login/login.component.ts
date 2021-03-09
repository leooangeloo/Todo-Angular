import { HardcodeAuthService } from './../service/hardcode-auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username = 'leooangeloo'
  password = 'password'
  errorMess = 'Invalid Credentials'
  invalidLogin = false

  //Router Information - to route to necessary pages
  constructor(private welcomeRouter : Router,
    private HardcodeAuthService: HardcodeAuthService) { }

  ngOnInit(): void {
  }

  handleLogin(){
    // if(this.username === "leooangeloo" && this.password === "password")
    if(this.HardcodeAuthService.auth (this.username, this.password)){
      //Redirect to Welcome Page
      this.welcomeRouter.navigate(['welcome', this.username])
      this.invalidLogin = false
      console.log("Successful Login!")

    } else{
      this.invalidLogin = true
      console.log("Incorrect Login Info!")

    }
  }
}
