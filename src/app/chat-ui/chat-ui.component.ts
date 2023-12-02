import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chat-ui',
  templateUrl: './chat-ui.component.html',
  styleUrls: ['./chat-ui.component.css']
})
export class ChatUiComponent implements OnInit {
  s : string = "String Interpolation";  // string interpolation
  p : boolean = true; // property binding
  img : string = "https://media.istockphoto.com/id/517188688/photo/mountain-landscape.jpg?s=612x612&w=0&k=20&c=A63koPKaCyIwQWOTFBRWXj_PwCrR4cEoOw2S9Q7yVl8="
  
  //event binding
  event (){  
      console.log(`Event binding is working`);
      alert("hi");  
  }

  // two way binding
  twoWay:string= "Hard code value";
  
  binding() {
    console.log(this.twoWay);
    
  }

 

  constructor() { }

  ngOnInit() {
  }

}
