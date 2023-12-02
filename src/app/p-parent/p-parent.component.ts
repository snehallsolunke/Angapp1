import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-p-parent',
  templateUrl: './p-parent.component.html',
  styleUrls: ['./p-parent.component.css']
})
export class PParentComponent implements OnInit {

  // Name: string = "Fridge"; 

  items = [ 'item1', 'item2']

  add(newItem:any){
    this.items.push(newItem);
  }

  constructor() { }

  ngOnInit() {
  }

}
