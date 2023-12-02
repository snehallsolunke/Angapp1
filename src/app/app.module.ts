import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgForm, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DemoComponent } from './demo/demo.component';
import { DemoDataBindComponent } from './demo-data-bind/demo-data-bind.component';
import { UsernameComponent } from './username/username.component';
import { FormsModule} from '@angular/forms';
import { NewChildComponent } from './new-child/new-child.component';
import { NgifComponent } from './ngIf/ngif.component';
import { SimpleFormComponent } from './simple-form/simple-form.component';
import { Form2Component } from './form2/form2.component';
import { DropdownComponent } from './dropdown/dropdown.component';
import { Reactive1Component } from './reactive1/reactive1.component';
import { Reactive2Component } from './reactive2/reactive2.component';
import { DynamicComponent } from './dynamic/dynamic.component';
import { Comp1Component } from './comp1/comp1.component';
import { Comp2Component } from './comp2/comp2.component';
import { Age11Component } from './age11/age11.component';
import { Age22Component } from './age22/age22.component';
import { NetflixReactiveComponent } from './netflix-reactive/netflix-reactive.component';
import { Project1Component } from './project1/project1.component';

import{HttpClientModule} from '@angular/common/http';
import { HookComponent } from './hook/hook.component';
import { ChatUiComponent } from './chat-ui/chat-ui.component';
import { PChildComponent } from './p-child/p-child.component';
import { PParentComponent } from './p-parent/p-parent.component'

@NgModule({
  declarations: [
    AppComponent,
    DemoComponent,
    DemoDataBindComponent,
    UsernameComponent,
    NewChildComponent,
    NgifComponent,
    SimpleFormComponent,
    Form2Component,
    DropdownComponent,
    Reactive1Component,
    Reactive2Component,
    DynamicComponent,
    Comp1Component,
    Comp2Component,
    Age11Component,
    Age22Component,
    NetflixReactiveComponent,
    Project1Component,
    HookComponent,
    ChatUiComponent,
    PChildComponent,
    PParentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
