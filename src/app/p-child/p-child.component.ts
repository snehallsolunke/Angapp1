import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-p-child',
  templateUrl: './p-child.component.html',
  styleUrls: ['./p-child.component.css']
})
export class PChildComponent implements OnInit {

  // @Input() item: any = "";
  @Output() itemEvent = new EventEmitter<any>();

  addItem(value:any){
    this.itemEvent.emit(value);
  }

  constructor() { }

  ngOnInit() {
  }

}
