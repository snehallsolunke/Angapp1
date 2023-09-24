import { Component, OnInit } from '@angular/core';
import { AgeServiceService } from '../services/age-service.service';

@Component({
  selector: 'app-age11',
  templateUrl: './age11.component.html',
  styleUrls: ['./age11.component.css']
})
export class Age11Component implements OnInit {


  dateOfBirth: Date;
  age: { years: number; months: number; days: number };

  constructor(private ageCalculatorService: AgeServiceService) {}

  ngOnInit(){
   
  }

  calculateAge(): void {
    this.age = this.ageCalculatorService.calculateAge(this.dateOfBirth);
  }

  resetForm(): void {
    this.dateOfBirth = undefined;
    this.age=null;
  }
}
