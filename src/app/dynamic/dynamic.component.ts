import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { Observable } from 'rxjs/internal/Observable';

@Component({
  selector: 'app-dynamic',
  templateUrl: './dynamic.component.html',
  styleUrls: ['./dynamic.component.css']
})
export class DynamicComponent implements OnInit {

  notAllowedNames = ['Doggo', 'Technology'];
  myForm: FormGroup;

  genders = [
    {id: '1', value: 'Male'},
    {id: '2', value: 'Female'},
    {id: "3", value: "Other"}
  ]
  isFormSubmitted = false;

  constructor() { 
    this.createForm();
  }

  ngOnInit() {
  }

  createForm() {
    this.myForm = new FormGroup({
      'userDetails': new FormGroup({      
       'username': new FormControl('', [Validators.required, this.NameNotAllowed.bind(this)]),
       'email': new FormControl(null,[Validators.required, Validators.email, Validators.pattern('.*@gmail\.com$')], this.EmailNotAllowed )
      }),     
      'breed': new FormControl('Dalmatian'),
      'gender': new FormControl('Male'),
      'skills': new FormArray([ new FormControl('Fetching Ball', Validators.required)])
    })
  }
  OnSubmit() {
    if(this.myForm.valid){
      console.log('Submit method called', this.myForm);
      console.log('Form Value', this.myForm.value);
      this.isFormSubmitted = true;
      
    }
  }
  OnAddSkills() {
    (<FormArray>this.myForm.get('skills')).push(new FormControl('', Validators.required))
  }

  OnRemoveSkills(index) {
    (<FormArray>this.myForm.get('skills')).removeAt(index);
  }

  // OnRemoveLastSkill() {
  //   const skillsFormArray = this.myForm.get('skills') as FormArray;
  //   if (skillsFormArray.length > 0) {
  //     skillsFormArray.removeAt(skillsFormArray.length-1);
//     }

NameNotAllowed(control: FormControl) {
  if (this.notAllowedNames.indexOf(control.value) !== -1) {
             // custom validation error code
      return { 'namesIsNotAllowed': true}
  }
  return null;
}
EmailNotAllowed(control: FormControl) : Promise<any> | Observable<any> {
  const myPromise = new Promise<any>((resolve, reject) => {
    setTimeout( () => {

      if (control.value === 'doggo@gmail.com') {
        resolve({'emailNotAllowed': true})
      } else {
        resolve(null)
      }
    }, 1000)
  })
  
  return myPromise;
}


}
