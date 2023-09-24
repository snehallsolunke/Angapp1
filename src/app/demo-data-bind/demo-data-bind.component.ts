import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo-data-bind',
  templateUrl: './demo-data-bind.component.html',
  styleUrls: ['./demo-data-bind.component.css']
})
export class DemoDataBindComponent implements OnInit {
  name:string='Rocky';
  // imageURL : string = 'https://media.istockphoto.com/id/517188688/photomountain-landscape.';
  image: string ="assets/Doggo1.jpeg"
  

  data = {
    age : '7',
    name: 'Canine'
  }
  addition: number =2+2;

  constructor() { }

  ngOnInit() {
  }

}
