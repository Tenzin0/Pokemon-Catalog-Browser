import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../../services/pokemon.service';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent implements OnInit {

  constructor(private pokemonService: PokemonService ) {}

  ngOnInit(): void {
    this.getPokemon();
  }
  getPokemon() {
    this.pokemonService.getPokemon('pikachu').subscribe({
      next: (data) => {
        console.log('Pokemon Data:', data);
      },
      error: (err) => {
        console.error('HTTP Error:', err);
      }
    });
  }
}
