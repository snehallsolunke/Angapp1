import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-simple-form',
  templateUrl: './simple-form.component.html',
  styleUrls: ['./simple-form.component.css']
})
export class SimpleFormComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  onSubmit(form:NgForm) {
    console.log('Form Submitted', form);
  }

}
