import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-project1',
  templateUrl: './project1.component.html',
  styleUrls: ['./project1.component.css']
})
export class Project1Component implements OnInit {
  loginText = document.querySelector(".title-text .login");
 loginForm = document.querySelector("form.login");
 loginBtn = document.querySelector("label.login");
 signupBtn = document.querySelector("label.signup");
 signupLink = document.querySelector("form .signup-link a");

  constructor() { }

  ngOnInit() {
    
  }
}
