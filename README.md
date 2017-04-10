# Angular 2 Simple Search

This article contains simple example of Angular 2 basic search. For more details you can visit below sites. 

[Angular simple search using pipe]

![Simple Search](https://2.bp.blogspot.com/-hPsELvrsZhE/WNpndtIoCxI/AAAAAAAAApQ/KRUKQ3MLJCQbWLjGj2SRTdMpHhP7uUEuQCLcB/s1600/angular2simplesearch.PNG)

## Required
1. Angular 2
2. Typescript
## html
```sh

<div>
  <h3> {{title}}</h3>
  <input type="text" [(ngModel)]="queryString" id="search" placeholder="Search to type">

  <ul>
    <li *ngFor="let n of names | FilterPipe: queryString">
      {{n}}
    </li>
  </ul>
</div>

```

## Pipe

```sh

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'FilterPipe',
})
export class FilterPipe implements PipeTransform {
    transform(value: any, input: string) {
        if (input) {
            input = input.toLowerCase();
            return value.filter(function (el: any) {
                return el.toLowerCase().indexOf(input) > -1;
            })
        }
        return value;
    }
}

```
## Component 

```sh

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

```

## Usage

Download and do `npm install` and `npm start`

You will get a screen which has a simple text box that allows to search through the displayed data.

[Angular simple search using pipe]: <http://www.angulartutorial.net/2017/03/simple-search-using-pipe-in-angular-2.html>

For more info visit [Angular simple search using pipe]

