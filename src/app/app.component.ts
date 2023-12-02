import { Component } from '@angular/core';
import {UsersService} from './users.service'

@Component({ 
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  courses:string[]=['Angular','React','Bootstrap','JavaScript','.net'];
  // title = 'ISRO';
  // title = 'AngularApp'

  constructor(private user:UsersService){
    // this.user.getData().subscribe(data=>{
    //   console.warn(data);
    // })
  }
}
