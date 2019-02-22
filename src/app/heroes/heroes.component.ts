import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../services/heroes.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
  providers:[HeroesService]
})
export class HeroesComponent implements OnInit {

  heroes:Heroe[]= [];

  constructor(
    private _heroesServicio: HeroesService,
    private _router: Router
    ) { 
    // console.log("Contructor")
  }

  ngOnInit() {
    this.heroes = this._heroesServicio.getHeroes();
    // console.log(this.heroes)
  }

  verHeroe( i: number ){
    this._router.navigate( ['/heroe/',i] );
  }

}

export interface Heroe{
  nombre: string;
  bio: string;
  img: string;
  aparicion: string;
  casa: string;
}
