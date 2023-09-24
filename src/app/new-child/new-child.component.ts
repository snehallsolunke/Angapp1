import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-new-child',
  templateUrl: './new-child.component.html',
  styleUrls: ['./new-child.component.css']
})
export class NewChildComponent implements OnInit {

 
  
  @Input() courses: string[];
  @Output() courseSelected : EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
    console.log('input data from parent', this.courses);
  }
 

    listCourse(course: string) {
      this.courseSelected.emit(course);
    }


  }




