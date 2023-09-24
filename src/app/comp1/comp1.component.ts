import { Component, OnInit } from '@angular/core';
import { Service1Service } from '../services/service1.service';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.css']
})
export class Comp1Component implements OnInit {
  products = {};

  constructor(private objService: Service1Service) { }

  ngOnInit() {
    // const objService = new Service1Service();
    this.products = this.objService.products;
  }

}
