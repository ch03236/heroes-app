import { Component, OnInit } from '@angular/core';
import  {HeroesService} from '../services/heroes.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
  providers:[HeroesService]
})
export class HeroesComponent implements OnInit {

  heroes:Heroe[]= [];

  constructor(private _heroesServicio: HeroesService) { 
    console.log("Contructor")
  }

  ngOnInit() {
    this.heroes = this._heroesServicio.getHeroes();
    console.log(this.heroes)
  }

}

export interface Heroe{
  npmbre: string;
  bio: string;
  img: string;
  aparicion: string;
  casa: string;
}
