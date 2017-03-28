import { Component } from '@angular/core';
import {FilterPipe} from './pipes'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title:String;
  names:any;
  constructor(){
    this.title = "Angular 2 simple search";
        this.names = ['Prashobh','Abraham','Anil','Sam','Natasha','Marry','Zian','karan']
  }
}
