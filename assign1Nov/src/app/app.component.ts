import { Component } from '@angular/core';
import { Employee } from './Employee';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'assign1Nov';

  name!:string;
  project!:string;
  check:boolean = false;
  isValidAge:boolean = true

  employeeArr : Employee[] = [];
  filterArr : Employee[] = [];

  constructor() {
    this.employeeArr = [
      {name : 'Aarush', project : 'Angular App', salary : 75000},
      {name : 'Divakar', project: 'Spring Boot', salary: 70000},
      {name : 'Akshat', project: 'React App', salary: 40000},
      {name : 'Manish', project: 'Electronics', salary : 35000},
      {name : 'Shaswat', project: 'CPP', salary : 55000}
    ]
  }

  doKeyUp(event:any) {
    this.name = event.target.value
  }

  doKeyUp1(event:any) {
    this.project = event.target.value
  }

  search(name:string, project:string, min:string, max:string) {
    let m1 = parseInt(min)
    let m2 = parseInt(max)

    this.filterArr = this.employeeArr.filter((e) => e.name.toLowerCase() == name.toLowerCase() && e.project.toLowerCase() == project.toLowerCase() && e.salary > m1 && e.salary < m2);
    let len = this.filterArr.length
    if(len > 0) this.check = true
  }
}
