import { FactoryTarget } from '@angular/compiler';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'First-App';
  b:number = 100;

  res!: number;
  arr: Array<number> = [];
  factor: Array<string> = [];

  sum(n1: string, n2: string) {
    let num1 = parseInt(n1);
    let num2 = parseInt(n2)
    this.res = num1+num2;
  }

  factors(n1: string) {
    let num1 = parseInt(n1);
    let j=0;
    for(var i=1; i<=num1; i++) {
      if(num1 % i == 0) {
        this.arr[j] = i;
        j++;
        // console.log(this.arr)
      }
    }
    this.factor =  this.printFactors(this.arr)
    this.arr = [];
  }

  printFactors(f:Array<number>) : Array<string> {
    let j = f.length-1;
    let fac:Array<string> = []
    for(var i=0; i<f.length/2; i++) {
        fac[i] = f[i] + ' * ' +f[j];
        j--
    }
    return fac;
  }
}
