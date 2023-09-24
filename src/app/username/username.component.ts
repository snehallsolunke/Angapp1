import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-username',
  templateUrl: './username.component.html',
  styleUrls: ['./username.component.css']
})
export class UsernameComponent implements OnInit {

  username:string='Chandrayan-3';
  imageUrl:string='assets/ISRO.jpeg';
  title:string="Welcome to ISRO";
  
  Clear(){
    this.username = ''
  }

  constructor() { }

  ngOnInit() {

  }

}
