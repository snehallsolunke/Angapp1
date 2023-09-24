import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-form2',
  templateUrl: './form2.component.html',
  styleUrls: ['./form2.component.css']
})
export class Form2Component implements OnInit {
  username = '';
  defaultCourseValue = 'JavaScript';

  isFormSubmitted = false;

  genders = [
    { id: '1', value: 'Male'},
    { id: '2', value: 'Female'},
    { id: '3', value: 'Other'},

  ]

  formData = {
    username: '',
    email: '',
    course:'',
    country: '',
    state: '',
    gender:''
   }


  constructor() { }

  ngOnInit() {
  }
  OnSubmit(form: NgForm) {
    console.log('form submitted', form);
    let email = form.value.email;
    console.log('Email is', email);
    let country = form.value.address.country;
    console.log('user input country name is', country)

    this.isFormSubmitted = true;



    this.formData.username = form.value.username;
    this.formData.email = form.value.email;
    this.formData.course = form.value.course;
    this.formData.country = form.value.address.country;
    this.formData.state = form.value.address.state;
    this.formData.gender = form.value.gender;

      // Store the default course value
    const defaultCourseValue = 'JavaScript';


    // reser the form controls
    form.reset();

    // Set the dropdown value back to the default value
    form.controls['course'].setValue(defaultCourseValue);
  }
}
