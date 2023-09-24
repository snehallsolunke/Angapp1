import { Component, OnInit } from '@angular/core';
import { AgeServiceService } from '../services/age-service.service';

@Component({
  selector: 'app-age22',
  templateUrl: './age22.component.html',
  styleUrls: ['./age22.component.css']
})
export class Age22Component implements OnInit {

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
