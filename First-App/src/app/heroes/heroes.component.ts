import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HEROES } from '../mock-heroes';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes = HEROES;
  hero1: Hero = {
    id: 1,
    name: 'ThoR'
  };

  hero2: Hero = {
    id: 2,
    name: 'Iron Man'
  }
  
  constructor() { }

  ngOnInit(): void {
  }

}
